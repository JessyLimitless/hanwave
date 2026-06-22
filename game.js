/* =========================================================================
 * 천자문 어드벤처: 마법의 팝업 — 게임 로직
 * 의존: data.js (EPISODES, ALL_CHARACTERS, RANKS)
 * 핵심 루프: 월드맵 → 마법 팝업 퀴즈 → 어원 해설/카드 → 콤보 → 도감/오답노트
 * ======================================================================= */

'use strict';

/* ----------------------------- 상태 관리 ----------------------------- */
const STORAGE_KEY = 'cheonjamun-adventure-v1';

const defaultProgress = () => ({
  collectedCards: [], // 획득한 한자 ID
  wrongNotes: [],     // 오답 노트 한자 ID
  clearedEpisodes: [],// 완료한 에피소드 ID
  exp: 0,
  gold: 0
});

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    return { ...defaultProgress(), ...JSON.parse(raw) };
  } catch (e) {
    return defaultProgress();
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) { /* 저장 실패는 무시 (시크릿 모드 등) */ }
}

/* 월드맵 펼침 상태(UI) 저장 — 새로고침해도 유지 */
const UI_KEY = 'cheonjamun-ui-v1';
function loadExpanded() {
  try {
    const raw = localStorage.getItem(UI_KEY);
    if (raw) return new Set(JSON.parse(raw));
  } catch (e) { /* 무시 */ }
  return null;
}
function saveExpanded() {
  try {
    localStorage.setItem(UI_KEY, JSON.stringify([...expandedChapters]));
  } catch (e) { /* 무시 */ }
}

let progress = loadProgress();

/* 현재 진행 중인 퀴즈 세션 */
let session = null; // { episode, index, results: [bool...] }

/* ----------------------------- 헬퍼 ----------------------------- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function charById(id) {
  return ALL_CHARACTERS.find((c) => c.id === id);
}

function readingOf(c) { return `${c.meaning} ${c.sound}`; }

function currentRank() {
  const n = progress.collectedCards.length;
  let rank = RANKS[0].name;
  for (const r of RANKS) if (n >= r.min) rank = r.name;
  return rank;
}

/* 에피소드 잠금 여부: 전 관문 잠금 해제(모든 장 자유 탐험). */
function isUnlocked(epIndex) {
  return true;
}

/* 다음 도전할(=현재) 에피소드 인덱스 */
function currentEpisodeIndex() {
  const idx = EPISODES.findIndex((ep) => !progress.clearedEpisodes.includes(ep.id));
  return idx === -1 ? EPISODES.length - 1 : idx;
}

/* 셔플 (Fisher–Yates) */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* 한 문제의 4지선다 보기 생성: 정답 + 풀에서 뽑은 오답 3개 (훈음 형태) */
function buildOptions(target) {
  const correct = readingOf(target);
  const pool = shuffle(
    ALL_CHARACTERS.filter((c) => c.id !== target.id && readingOf(c) !== correct)
  );
  const distractors = [];
  for (const c of pool) {
    const r = readingOf(c);
    if (!distractors.includes(r)) distractors.push(r);
    if (distractors.length === 3) break;
  }
  return shuffle([correct, ...distractors]);
}

/* ----------------------------- 효과음 (WebAudio 합성) ----------------------------- */
let audioCtx = null;
function beep(freqs, type = 'sine', dur = 0.18, gain = 0.12) {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    let t = audioCtx.currentTime;
    freqs.forEach((f) => {
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = type;
      osc.frequency.value = f;
      g.gain.setValueAtTime(gain, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      osc.connect(g).connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + dur);
      t += dur * 0.7;
    });
  } catch (e) { /* 오디오 미지원 무시 */ }
}
const sfx = {
  appear: () => beep([523, 784], 'triangle', 0.16, 0.08),
  correct: () => beep([659, 880, 1175], 'triangle', 0.16, 0.12),
  wrong: () => beep([180, 110], 'sawtooth', 0.22, 0.14),
  combo: () => beep([523, 659, 784, 1047, 1319], 'triangle', 0.14, 0.13)
};

/* ----------------------------- TTS ----------------------------- */
function speak(text) {
  try {
    if (!('speechSynthesis' in window)) { toast('이 브라우저는 음성을 지원하지 않아요'); return; }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ko-KR';
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  } catch (e) { /* 무시 */ }
}

/* ----------------------------- 토스트 ----------------------------- */
let toastTimer = null;
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

/* =========================================================================
 * 렌더링 — 상태바
 * ======================================================================= */
const EXP_PER_LEVEL = 50;

/* 숫자 카운트업: el의 dataset.val 에서 목표값까지 부드럽게 증가 */
function animateNumber(el, to, fmt) {
  if (!el) return;
  const from = Number(el.dataset.val || 0);
  fmt = fmt || ((v) => String(v));
  if (from === to) { el.textContent = fmt(to); el.dataset.val = to; return; }
  if (to > from) bump(el.closest('.stat') || el); // 증가 시 칩 펄스
  const dur = 520, t0 = performance.now();
  function step(t) {
    const p = Math.min(1, (t - t0) / dur);
    const v = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3)));
    el.textContent = fmt(v);
    if (p < 1) requestAnimationFrame(step);
    else { el.textContent = fmt(to); el.dataset.val = to; }
  }
  requestAnimationFrame(step);
}

/* 강조 펄스(애니메이션 재시작) */
function bump(el) {
  if (!el) return;
  el.classList.remove('bump');
  void el.offsetWidth; // 리플로우로 애니메이션 재시작
  el.classList.add('bump');
}

let lastRank = null;

function renderTopbar() {
  const rank = currentRank();
  const rankEl = $('#rank');
  if (rankEl) {
    rankEl.textContent = rank;
    if (lastRank !== null && lastRank !== rank) bump(rankEl);
    lastRank = rank;
  }
  animateNumber($('#gold'), progress.gold);
  animateNumber($('#collected'), progress.collectedCards.length, (v) => `${v} / ${ALL_CHARACTERS.length}`);

  // 레벨 & XP 진행바
  const level = Math.floor(progress.exp / EXP_PER_LEVEL) + 1;
  const into = progress.exp % EXP_PER_LEVEL;
  const lvLabel = $('#level-label');
  const expLabel = $('#exp-label');
  const xpbar = $('#xpbar');
  if (lvLabel) lvLabel.textContent = `Lv.${level}`;
  if (expLabel) expLabel.textContent = `${into} / ${EXP_PER_LEVEL} XP`;
  if (xpbar) xpbar.style.width = `${(into / EXP_PER_LEVEL) * 100}%`;
}

/* =========================================================================
 * 렌더링 — 월드맵
 * ======================================================================= */
/* 펼쳐진 장 목록(아코디언 상태). 최초엔 현재 진행 중인 장만 펼친다. */
let expandedChapters = null;

function renderWorldMap() {
  const root = $('#view-map');
  const curIdx = currentEpisodeIndex();
  const currentChapter = EPISODES[curIdx].chapter;

  // 챕터별 그룹화 (등장 순서 유지)
  const groups = {};
  EPISODES.forEach((ep, i) => {
    (groups[ep.chapter] = groups[ep.chapter] || []).push({ ep, i });
  });

  // 저장된 펼침 상태를 우선 사용, 없으면 기본값 = 현재 진행 중인 장만 펼침
  if (expandedChapters === null) expandedChapters = loadExpanded() || new Set([currentChapter]);

  const clearedCount = progress.clearedEpisodes.length;
  const totalEp = EPISODES.length;
  const pct = Math.round((clearedCount / totalEp) * 100);
  const allOpen = Object.keys(groups).every((n) => expandedChapters.has(n));

  let html = `
    <div class="map-top">
      <div>
        <h2>📜 마법의 천자문 지도</h2>
        <p class="hint">전체 ${totalEp}개 관문 · ${Object.keys(groups).length}개 장. 장 헤더를 눌러 펼치거나 접을 수 있어요.</p>
      </div>
      <button id="toggle-all" class="btn ghost btn-sm">${allOpen ? '▴ 모두 접기' : '▾ 모두 펼치기'}</button>
    </div>`;
  html += `
    <div class="map-progress">
      <span class="mp-label">🗺️ 모험 진행도</span>
      <div class="mp-bar"><div class="mp-fill" style="width:${pct}%"></div></div>
      <span class="mp-count">${clearedCount} / ${totalEp} 관문</span>
    </div>`;

  for (const [chapter, items] of Object.entries(groups)) {
    const chCleared = items.filter(({ ep }) => progress.clearedEpisodes.includes(ep.id)).length;
    const chTotal = items.length;
    const chPct = Math.round((chCleared / chTotal) * 100);
    const chLocked = !isUnlocked(items[0].i);
    const isOpen = expandedChapters.has(chapter);
    const hasCurrent = chapter === currentChapter;

    const groupCls = ['chapter-group'];
    if (!isOpen) groupCls.push('collapsed');
    if (chLocked) groupCls.push('ch-locked');
    if (hasCurrent) groupCls.push('ch-current');

    let cards = '';
    items.forEach(({ ep, i }, n) => {
      const unlocked = isUnlocked(i);
      const cleared = progress.clearedEpisodes.includes(ep.id);
      const isCurrent = i === curIdx && !cleared;
      const cls = ['stage'];
      if (!unlocked) cls.push('locked');
      if (cleared) cls.push('cleared');
      if (isCurrent) cls.push('current');

      const doneCount = ep.characters.filter((c) => progress.collectedCards.includes(c.id)).length;
      const pips = ep.characters
        .map((c) => `<span class="pip ${progress.collectedCards.includes(c.id) ? 'done' : ''}"></span>`)
        .join('');
      const status = cleared ? '✅ 봉인 해제' : unlocked ? (isCurrent ? '⚔️ 도전 가능' : '도전 가능') : '🔒 잠김';

      cards += `
        <div class="${cls.join(' ')}" data-ep="${i}" style="animation-delay:${Math.min(n, 8) * 50}ms" ${unlocked ? '' : 'aria-disabled="true"'}>
          <div class="ep-no">관문 ${String(i + 1).padStart(2, '0')} · ${doneCount}/4</div>
          <div class="ep-combo">${ep.comboPhrase}</div>
          <div class="ep-title">${ep.title}</div>
          <div class="progress-pips">${pips}</div>
          <div class="ep-status">${status}</div>
        </div>`;
    });

    html += `
      <div class="${groupCls.join(' ')}">
        <button class="chapter-header" data-ch="${chapter}" aria-expanded="${isOpen}">
          <span class="ch-title">${chapter}${chLocked ? ' 🔒' : ''}${hasCurrent ? '<em>진행 중</em>' : ''}</span>
          <span class="ch-progress">
            <span class="ch-bar"><i style="width:${chPct}%"></i></span>
            <span class="ch-count">${chCleared}/${chTotal}</span>
          </span>
          <span class="ch-chevron">▾</span>
        </button>
        <div class="chapter-body"><div class="stage-grid">${cards}</div></div>
      </div>`;
  }

  root.innerHTML = html;

  // 모두 펼치기 / 모두 접기
  const toggleAll = $('#toggle-all');
  if (toggleAll) {
    toggleAll.addEventListener('click', () => {
      const names = Object.keys(groups);
      if (names.every((n) => expandedChapters.has(n))) expandedChapters.clear();
      else names.forEach((n) => expandedChapters.add(n));
      saveExpanded();
      renderWorldMap();
    });
  }

  // 장 헤더: 펼치기/접기 토글
  $$('#view-map .chapter-header').forEach((h) => {
    h.addEventListener('click', () => {
      const ch = h.dataset.ch;
      if (expandedChapters.has(ch)) expandedChapters.delete(ch);
      else expandedChapters.add(ch);
      saveExpanded();
      renderWorldMap();
    });
  });

  // 관문 클릭
  $$('#view-map .stage').forEach((node) => {
    node.addEventListener('click', () => {
      const i = Number(node.dataset.ep);
      if (!isUnlocked(i)) { toast('이전 관문을 먼저 봉인 해제하세요!'); return; }
      startEpisode(i);
    });
  });
}

/* =========================================================================
 * 렌더링 — 카드 도감
 * ======================================================================= */
/* 도감 보기 모드: 'all'(전체) | 'collected'(수집한 카드만) */
let collectionFilter = 'all';

function renderCollection() {
  const root = $('#view-collection');
  const total = ALL_CHARACTERS.length;
  const got = progress.collectedCards.length;
  const pct = Math.round((got / total) * 100);

  // 다음 등급까지 남은 카드 수
  const cur = currentRank();
  const next = RANKS.find((r) => r.min > got);
  const rankLine = next
    ? `다음 등급 <b>${next.name}</b>까지 <b>${next.min - got}</b>장`
    : '최고 등급 <b>대제학</b> 달성! 🎉';

  let html = `
    <h2>🃏 천자문 카드 도감</h2>
    <p class="hint">획득한 한자 카드를 모아봅니다. 카드를 클릭하면 음(소리)을 들려줍니다.</p>
    <div class="collection-summary">
      <div class="cs-ring" style="--p:${pct}">
        <span class="cs-pct">${pct}<small>%</small></span>
      </div>
      <div class="cs-info">
        <div class="cs-count"><b>${got}</b> <span>/ ${total} 카드 수집</span></div>
        <div class="cs-bar"><i style="width:${pct}%"></i></div>
        <div class="cs-rank">🎖️ 현재 <b>${cur}</b> · ${rankLine}</div>
      </div>
      <div class="cs-filter" role="tablist">
        <button data-filter="all" class="${collectionFilter === 'all' ? 'on' : ''}">전체</button>
        <button data-filter="collected" class="${collectionFilter === 'collected' ? 'on' : ''}">수집한 카드</button>
      </div>
    </div>`;

  if (got === 0 && collectionFilter === 'collected') {
    html += `<div class="empty-note">아직 수집한 카드가 없어요.<br>월드맵에서 첫 관문에 도전해 보세요! ✨</div>`;
    root.innerHTML = html;
    bindCollectionFilter(root);
    return;
  }

  const list = collectionFilter === 'collected'
    ? ALL_CHARACTERS.filter((c) => progress.collectedCards.includes(c.id))
    : ALL_CHARACTERS;

  html += '<div class="collection-grid">';
  list.forEach((c, idx) => {
    const delay = `animation-delay:${Math.min(idx, 24) * 22}ms`;
    if (progress.collectedCards.includes(c.id)) {
      html += `<div class="card-slot" data-char="${c.id}" style="${delay}" title="클릭해서 발음 듣기" tabindex="0">
                 <div class="c-char">${c.character}</div>
                 <div class="c-read">${readingOf(c)}</div>
               </div>`;
    } else {
      html += `<div class="card-slot empty" style="${delay}">?</div>`;
    }
  });
  html += '</div>';
  root.innerHTML = html;

  bindCollectionFilter(root);

  $$('#view-collection .card-slot[data-char]').forEach((node) => {
    const play = () => {
      const c = charById(node.dataset.char);
      speak(c.sound);
      node.animate(
        [{ transform: 'rotateY(0)' }, { transform: 'rotateY(180deg)' }, { transform: 'rotateY(360deg)' }],
        { duration: 600, easing: 'ease-in-out' }
      );
    };
    node.addEventListener('click', play);
    node.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); } });
  });
}

function bindCollectionFilter(root) {
  root.querySelectorAll('.cs-filter button').forEach((btn) => {
    btn.addEventListener('click', () => {
      collectionFilter = btn.dataset.filter;
      renderCollection();
    });
  });
}

/* =========================================================================
 * 렌더링 — 오답노트
 * ======================================================================= */
function renderWrongNotes() {
  const root = $('#view-wrong');
  let html = '<h2>🪄 마법의 오답서</h2><p class="hint">틀린 한자는 이곳에 봉인됩니다. 복습 퀴즈를 다시 맞히면 정화되어 도감으로 돌아갑니다.</p>';

  if (progress.wrongNotes.length === 0) {
    html += '<div class="empty-note">아직 봉인된 마물이 없습니다. 훌륭해요! ✨</div>';
    root.innerHTML = html;
    return;
  }

  html += '<div class="wrong-list">';
  progress.wrongNotes.forEach((id) => {
    const c = charById(id);
    html += `
      <div class="wrong-item">
        <div class="w-char">${c.character}</div>
        <div class="w-info"><b>${readingOf(c)}</b><span>다시 맞혀 정화하세요</span></div>
        <button class="btn crimson" data-retry="${id}">복습 도전</button>
      </div>`;
  });
  html += '</div>';
  root.innerHTML = html;

  $$('#view-wrong [data-retry]').forEach((btn) => {
    btn.addEventListener('click', () => startReview(btn.dataset.retry));
  });
}

/* =========================================================================
 * 탭 전환
 * ======================================================================= */
function showView(name) {
  $$('.panel').forEach((p) => p.classList.add('hidden'));
  $(`#view-${name}`).classList.remove('hidden');
  $$('.nav button').forEach((b) => b.classList.toggle('active', b.dataset.view === name));

  if (name === 'map') renderWorldMap();
  if (name === 'collection') renderCollection();
  if (name === 'wrong') renderWrongNotes();
}

/* =========================================================================
 * 퀴즈 세션 — 에피소드 진행
 * ======================================================================= */
function startEpisode(epIndex) {
  const episode = EPISODES[epIndex];
  session = { mode: 'episode', episode, epIndex, index: 0, results: [] };
  showQuiz();
}

/* 오답노트 단일 복습 */
function startReview(charId) {
  const c = charById(charId);
  session = { mode: 'review', reviewChar: c };
  showQuizForChar(c);
}

function showQuiz() {
  const c = session.episode.characters[session.index];
  showQuizForChar(c);
}

/* 한 문제 팝업 렌더 */
function showQuizForChar(c) {
  const overlay = $('#overlay');
  const popup = $('#popup');
  overlay.classList.remove('hidden');

  const headLabel = session.mode === 'review'
    ? '🪄 오답 복습'
    : `${session.episode.comboPhrase} · ${session.index + 1} / 4`;

  const options = buildOptions(c);
  const answer = readingOf(c);

  popup.innerHTML = `
    <div class="attack-flash" id="attack-flash"></div>
    <div class="popup-head">${headLabel}</div>
    <div class="char-stage">
      <div class="char-box flash" id="char-box">${c.character}</div>
    </div>
    <div class="popup-head">이 한자의 뜻과 음은?</div>
    <div class="options" id="options">
      ${options.map((o, k) => `<button class="option" data-opt="${o}" style="animation-delay:${120 + k * 80}ms">${o}</button>`).join('')}
    </div>`;

  sfx.appear();

  $$('#options .option').forEach((btn) => {
    btn.addEventListener('click', () => handleAnswer(btn, btn.dataset.opt === answer, c));
  });
}

function handleAnswer(btn, isCorrect, c) {
  const buttons = $$('#options .option');
  buttons.forEach((b) => (b.disabled = true));

  if (isCorrect) {
    btn.classList.add('correct');
    sfx.correct();
    const flash = $('#attack-flash');
    if (flash) { flash.classList.add('go'); }
    // 클릭한 보기 + 한자 박스 위치에서 스파클 폭발
    if (window.fxBurst) {
      const r = btn.getBoundingClientRect();
      window.fxBurst(r.left + r.width / 2, r.top + r.height / 2);
      const box = $('#char-box');
      if (box) {
        const br = box.getBoundingClientRect();
        setTimeout(() => window.fxBurst(br.left + br.width / 2, br.top + br.height / 2), 120);
      }
    }
    setTimeout(() => onCorrect(c), 650);
  } else {
    btn.classList.add('wrong');
    sfx.wrong();
    $('#popup').classList.add('shake');
    // 정답도 표시
    buttons.forEach((b) => { if (b.dataset.opt === readingOf(c)) b.classList.add('correct'); });
    setTimeout(() => onWrong(c), 1100);
  }
}

/* ----------------------------- 정답 처리 ----------------------------- */
function onCorrect(c) {
  $('#popup').classList.remove('shake');

  // 카드 획득
  const newlyCollected = !progress.collectedCards.includes(c.id);
  if (newlyCollected) {
    progress.collectedCards.push(c.id);
    progress.exp += 10;
    progress.gold += 5;
  }
  // 오답노트에서 정화
  if (progress.wrongNotes.includes(c.id)) {
    progress.wrongNotes = progress.wrongNotes.filter((id) => id !== c.id);
    toast(`'${c.character}' 정화 완료! 도감으로 복귀했어요`);
  }

  if (session.mode === 'episode') session.results.push(true);
  saveProgress();
  renderTopbar();
  showLore(c, newlyCollected);
}

/* ----------------------------- 오답 처리 ----------------------------- */
function onWrong(c) {
  $('#popup').classList.remove('shake');
  if (!progress.wrongNotes.includes(c.id)) progress.wrongNotes.push(c.id);
  if (session.mode === 'episode') session.results.push(false);
  saveProgress();
  renderTopbar();

  const popup = $('#popup');
  popup.innerHTML = `
    <div class="popup-head">💥 콰광!</div>
    <div class="char-stage"><div class="char-box">${c.character}</div></div>
    <div class="lore-section" style="text-align:center">
      <p>아쉽네요! 정답은 <b>${readingOf(c)}</b> 입니다.</p>
      <p style="margin-top:8px;color:var(--ink-soft);font-size:0.85rem">이 마물은 '마법의 오답서'에 봉인되었습니다. 나중에 다시 도전해 정화하세요.</p>
    </div>
    <div class="lore-actions">
      <button class="btn ghost" id="btn-retry">다시 도전</button>
      <button class="btn" id="btn-continue">계속</button>
    </div>`;

  $('#btn-retry').addEventListener('click', () => {
    if (session.mode === 'episode') session.results.pop(); // 직전 오답 기록 취소
    showQuizForChar(c);
  });
  $('#btn-continue').addEventListener('click', advanceAfterQuestion);
}

/* ----------------------------- 해설 화면 ----------------------------- */
function showLore(c, newlyCollected) {
  const popup = $('#popup');
  popup.innerHTML = `
    <div class="lore">
      <div class="popup-head">✨ 봉인 해제 — 한자의 비밀 ✨</div>
      <div class="lore-head">
        <div class="l-char">${c.character}</div>
        <div class="l-read">${readingOf(c)}</div>
      </div>
      <div class="lore-meta">
        <span>부수 ${c.radical || '-'}</span>
        <span>총획 ${c.strokeCount || '-'}획</span>
        <button class="btn ghost" id="btn-tts" style="padding:2px 12px;font-size:0.8rem">🔊 음 듣기</button>
      </div>
      <div class="lore-section">
        <h4>어원 이야기</h4>
        <p>${c.originStory ? c.originStory : '이 한자의 상세 어원 해설은 준비 중입니다. (기초 100자는 상세 해설을 제공해요)'}</p>
      </div>
      ${(c.vocabulary && c.vocabulary.length) ? `
      <div class="lore-section">
        <h4>활용 단어</h4>
        <ul class="vocab">
          ${c.vocabulary.map((v) => `<li><b>${v.word}</b> — <span>${v.meaning}</span></li>`).join('')}
        </ul>
      </div>` : ''}
      ${newlyCollected ? '<div class="card-earned">🃏 카드 도감에 저장되었습니다! (+10 EXP · +5 Gold)</div>' : ''}
      <div class="lore-actions">
        <button class="btn" id="btn-next">${nextButtonLabel()}</button>
      </div>
    </div>`;

  $('#btn-tts').addEventListener('click', () => speak(c.sound));
  $('#btn-next').addEventListener('click', advanceAfterQuestion);
}

function nextButtonLabel() {
  if (session.mode === 'review') return '정화 완료';
  return session.index < 3 ? '다음 한자 ▶' : '사자성어 완성!';
}

/* ----------------------------- 다음 문제 / 콤보 / 종료 ----------------------------- */
function advanceAfterQuestion() {
  if (session.mode === 'review') {
    closePopup();
    showView('wrong');
    return;
  }

  session.index += 1;
  if (session.index < session.episode.characters.length) {
    showQuiz();
  } else {
    finishEpisode();
  }
}

function finishEpisode() {
  const ep = session.episode;
  const allCorrect = session.results.every(Boolean);

  // 4자 모두 수집되었으면 에피소드 클리어로 간주
  const allCollected = ep.characters.every((c) => progress.collectedCards.includes(c.id));
  if (allCollected && !progress.clearedEpisodes.includes(ep.id)) {
    progress.clearedEpisodes.push(ep.id);
  }

  if (allCollected) {
    showCombo(ep, allCorrect);
  } else {
    // 일부 오답 → 콤보 없이 종료, 오답 정화 후 재완성 가능
    saveProgress();
    renderTopbar();
    closePopup();
    showView('map');
    toast('일부 마물이 오답서에 봉인되었어요. 정화 후 사자성어를 완성하세요!');
  }
}

function showCombo(ep, perfect) {
  // 콤보 보상
  const bonusGold = perfect ? 50 : 20;
  const bonusExp = perfect ? 40 : 15;
  progress.gold += bonusGold;
  progress.exp += bonusExp;
  saveProgress();
  renderTopbar();
  sfx.combo();
  if (window.fxConfetti) window.fxConfetti();

  const popup = $('#popup');
  popup.innerHTML = `
    <div class="combo">
      <div class="combo-banner">⭐ 사자성어 완성 ⭐</div>
      <div class="combo-phrase">${ep.comboPhrase}</div>
      <div class="combo-read">${ep.characters.map((c) => c.sound).join(' ')}</div>
      ${ep.comboTranslation ? `<div class="combo-trans">"${ep.comboTranslation}"</div>` : ''}
      ${perfect ? '<div class="card-earned">🏆 완벽 클리어 보너스!</div>' : ''}
      <div class="combo-reward">
        <span>💰 +<b>${bonusGold}</b> Gold</span>
        <span>✨ +<b>${bonusExp}</b> EXP</span>
      </div>
      <div class="lore-actions">
        <button class="btn" id="btn-combo-done">지도로 돌아가기</button>
      </div>
    </div>`;

  $('#btn-combo-done').addEventListener('click', () => {
    closePopup();
    showView('map');
    maybeAnnounceRank();
  });
}

/* 등급 상승 안내 */
let sessionPrevRank = currentRank();
function maybeAnnounceRank() {
  const now = currentRank();
  if (now !== sessionPrevRank) {
    toast(`🎖️ 등급 상승! 이제 당신은 '${now}' 입니다`);
    sessionPrevRank = now;
  }
}

function closePopup() {
  $('#overlay').classList.add('hidden');
  $('#popup').innerHTML = '';
  session = null;
}

/* =========================================================================
 * 초기화
 * ======================================================================= */
function init() {
  // 탭 네비게이션
  $$('.nav button').forEach((b) => {
    b.addEventListener('click', () => showView(b.dataset.view));
  });

  // 오버레이 배경 클릭 시 닫기 비활성화(진행 중 실수 방지) — 닫기 버튼만 허용하지 않음
  $('#overlay').addEventListener('click', (e) => {
    if (e.target.id === 'overlay') {
      // 퀴즈 도중에는 닫지 않음. 결과/콤보 단계에서만 닫기 허용은 버튼으로.
      toast('보기를 선택해 몬스터를 봉인하세요!');
    }
  });

  // 데이터 초기화 버튼
  $('#btn-reset').addEventListener('click', () => {
    if (confirm('정말 모든 진행도를 초기화할까요? (카드/오답/골드 모두 삭제)')) {
      progress = defaultProgress();
      saveProgress();
      sessionPrevRank = currentRank();
      renderTopbar();
      showView('map');
      toast('진행도가 초기화되었습니다');
    }
  });

  sessionPrevRank = currentRank();
  renderTopbar();
  showView('map');
}

document.addEventListener('DOMContentLoaded', init);
