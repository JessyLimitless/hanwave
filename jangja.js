/* =========================================================================
 * 유진이의 한자교실 — 장자(莊子) 명품 우화 33편 게임 엔진
 *  데이터: window.JANGJA_DATA (jangja-data.js) — 우화(寓話) 객체 배열
 *  루프: 소요(逍遙)의 길(33 디딤돌) → 우화 클릭 → 낭독 → 빈칸 → 짝맞추기 → 풀이 → 물음 → 도장
 * ======================================================================= */
(function () {
  'use strict';
  const $ = (s, r) => (r || document).querySelector(s);
  const DATA = Array.isArray(window.JANGJA_DATA) ? window.JANGJA_DATA.slice().sort((a, b) => a.ch - b.ch) : [];

  /* ---------------- 독음(讀音) 맵 ---------------- *
   * 원문 줄(한자1자=한글1음절)에서 글자별 독음을 추출 + 핵심어 + 보충사전 병합.
   * 선택지/짝/카드에 독음을 반복 노출해 자연스럽게 외워지도록. */
  const READ = (function () {
    const m = {}; const isHan = (c) => /[㐀-鿿豈-﫿]/.test(c);
    DATA.forEach((d) => {
      (d.lines || []).forEach((l) => {
        const h = Array.from(l.han || ''), r = Array.from(l.read || '');
        if (h.length === r.length) h.forEach((c, i) => { if (isHan(c)) m[c] = r[i]; });
      });
      if (d.keyword && d.keyword.han) m[d.keyword.han] = d.keyword.read;
    });
    const extra = window.JANGJA_READ_EXTRA || {};
    Object.keys(extra).forEach((k) => { if (!m[k]) m[k] = extra[k]; });
    return m;
  })();
  const read1 = (c) => READ[c] || '';
  const readOf = (s) => Array.from(s || '').map((c) => READ[c] || '').join('');

  /* ---------------- 음성(TTS) — 독음 들려주기 ---------------- */
  const TTS = ('speechSynthesis' in window);
  function speak(text) {
    if (!TTS || !text) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ko-KR'; u.rate = 0.85; u.pitch = 1;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }

  /* ---------------- 진행 저장 ---------------- */
  const KEY = 'jangja_progress_v1';
  let progress = load();
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { cleared: [] }; }
    catch (e) { return { cleared: [] }; }
  }
  function save() { localStorage.setItem(KEY, JSON.stringify(progress)); }
  const isCleared = (ch) => progress.cleared.indexOf(ch) !== -1;

  /* ---------------- 사운드 (Web Audio · 물/먹/종) ---------------- */
  let actx = null, master = null;
  let muted = localStorage.getItem('jangja_muted') === '1';
  function ctx() {
    if (actx) return actx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    actx = new AC(); master = actx.createGain(); master.gain.value = 0.5; master.connect(actx.destination);
    return actx;
  }
  function noise(d) {
    const n = Math.max(1, Math.floor(actx.sampleRate * d)), b = actx.createBuffer(1, n, actx.sampleRate), c = b.getChannelData(0);
    for (let i = 0; i < n; i++) c[i] = Math.random() * 2 - 1;
    return b;
  }
  function tone(freq, dur, type, gain, slideTo) {
    if (muted) return; const c = ctx(); if (!c) return; if (c.state === 'suspended') c.resume();
    const t = c.currentTime, o = c.createOscillator(), g = c.createGain();
    o.type = type || 'sine'; o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain || 0.3, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.02);
  }
  function whoosh(opt) {
    if (muted) return; const c = ctx(); if (!c) return; if (c.state === 'suspended') c.resume();
    const o = Object.assign({ dur: 0.5, f0: 350, f1: 1600, gain: 0.3, q: 0.9 }, opt || {}), t = c.currentTime;
    const s = c.createBufferSource(); s.buffer = noise(o.dur + 0.05);
    const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = o.q;
    bp.frequency.setValueAtTime(o.f0, t);
    bp.frequency.exponentialRampToValueAtTime(o.f1, t + o.dur * 0.6);
    bp.frequency.exponentialRampToValueAtTime(Math.max(80, o.f0 * 0.7), t + o.dur);
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(o.gain, t + o.dur * 0.3); g.gain.exponentialRampToValueAtTime(0.0001, t + o.dur);
    s.connect(bp); bp.connect(g); g.connect(master); s.start(t); s.stop(t + o.dur + 0.05);
  }
  const sfx = {
    drop() { tone(880, 0.18, 'sine', 0.28, 320); },              // 물방울
    brush() { whoosh({ dur: 0.4, f0: 300, f1: 1400, gain: 0.22, q: 1.1 }); }, // 붓질
    good() { tone(660, 0.16, 'sine', 0.26); setTimeout(() => tone(988, 0.22, 'sine', 0.26), 90); },
    bad() { tone(180, 0.22, 'sawtooth', 0.16, 120); },
    bell() { tone(523, 1.1, 'sine', 0.3); setTimeout(() => tone(784, 1.2, 'sine', 0.22), 60); }, // 깨달음 종
    intro() { whoosh({ dur: 0.7, f0: 260, f1: 1900, gain: 0.32, q: 0.7 }); }
  };

  /* 사운드 토글 */
  const sBtn = $('#sound-toggle');
  function applyMute() { if (sBtn) { sBtn.textContent = muted ? '🔇' : '🔊'; sBtn.setAttribute('aria-pressed', String(muted)); } }
  applyMute();
  if (sBtn) sBtn.addEventListener('click', () => { muted = !muted; localStorage.setItem('jangja_muted', muted ? '1' : '0'); applyMute(); if (!muted) { ctx(); sfx.drop(); } });
  let kicked = false;
  function kick() { if (kicked) return; kicked = true; ctx(); sfx.intro(); ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach(e => window.removeEventListener(e, kick)); }
  ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach(e => window.addEventListener(e, kick, { passive: true }));

  /* ---------------- 토스트 ---------------- */
  let toastTimer = null;
  function toast(msg) {
    const el = $('#toast'); if (!el) return;
    el.textContent = msg; el.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
  }

  /* ---------------- 도(道)의 길 렌더 ---------------- */
  function renderMeter() {
    const total = DATA.length || 33, done = progress.cleared.length;
    const f = $('#dao-fill'); if (f) f.style.width = (total ? (done / total * 100) : 0) + '%';
    const l = $('#dao-lab'); if (l) l.innerHTML = '<span>소요(逍遙)의 길</span><span><b>' + done + '</b> / ' + total + ' 화</span>';
    const p = $('#prog-count'); if (p) p.innerHTML = '도장 <b>' + done + '</b> / ' + total;
    const firstUn = DATA.find((d) => !isCleared(d.ch));
    const rb = $('#btn-resume');
    if (rb) {
      if (firstUn) { rb.textContent = '▶ 제 ' + firstUn.ch + '화 이어서 풀기'; rb.dataset.ch = firstUn.ch; rb.disabled = false; }
      else { rb.textContent = '✓ 33편 모두 통과'; rb.disabled = true; }
    }
    const cb = $('#complete-banner'); if (cb) cb.classList.toggle('hidden', done < total);
  }
  function renderPath() {
    const host = $('#stones'); if (!host) return;
    if (!DATA.length) { host.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:var(--text-soft); padding:40px">장자 데이터를 불러오지 못했어요. (jangja-data.js)</p>'; return; }
    host.innerHTML = '';
    const SECTION_LBL = {
      '내': '內篇 <small>내편 · 마음의 자유</small>',
      '외': '外篇 <small>외편 · 세상을 보는 눈</small>',
      '잡': '雜篇 <small>잡편 · 장자의 마지막 이야기</small>'
    };
    let lastSection = null;
    DATA.forEach((c) => {
      const sec = c.sec || '내';
      if (sec !== lastSection) {
        lastSection = sec;
        const dv = document.createElement('div');
        dv.className = 'path-divider';
        dv.innerHTML = '<span class="ln"></span><span class="lbl">' +
          (SECTION_LBL[sec] || sec) +
          '</span><span class="ln"></span>';
        host.appendChild(dv);
      }
      const el = document.createElement('button');
      el.className = 'stone' + (isCleared(c.ch) ? ' cleared' : '');
      el.innerHTML =
        '<span class="seal">印</span>' +
        '<span class="num">제 ' + c.ch + ' 화</span>' +
        '<span class="glyph' + (Array.from(c.title || '').length >= 5 ? ' long' : '') + '">' + (c.title || '') + '</span>' +
        '<span class="s-read">' + readOf(c.title || '') + '</span>' +
        '<span class="ko">' + (c.titleKo || '') + '</span>';
      el.addEventListener('click', () => openChapter(c));
      host.appendChild(el);
    });
    renderMeter();
  }

  /* ---------------- 장(章) 플레이 ---------------- */
  const overlay = $('#overlay'), popup = $('#popup');
  function closePopup() { overlay.classList.add('hidden'); popup.innerHTML = ''; }
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closePopup(); });
  document.addEventListener('keydown', (e) => {
    if (overlay.classList.contains('hidden')) return;
    if (e.key === 'Escape') { closePopup(); return; }
    if (/^[1-4]$/.test(e.key)) {
      const ch = popup.querySelectorAll('.choice'); const idx = +e.key - 1;
      if (ch[idx] && ch[idx].style.pointerEvents !== 'none') { ch[idx].click(); e.preventDefault(); }
      return;
    }
    if (e.key === 'Enter') {
      const b = popup.querySelector('.actions .btn:not(.ghost):not([disabled])');
      if (b) { b.click(); e.preventDefault(); }
    }
  });

  function openChapter(c) {
    sfx.brush();
    // 단계 구성: 낭독 → (빈칸) → (짝맞추기) → 풀이 → 물음 → 보상
    const steps = ['recite'];
    const blankLine = (c.lines || []).find(l => c.keyword && l.han && l.han.indexOf(c.keyword.han) !== -1);
    if (blankLine && c.keyword) steps.push('blank');
    if (c.pairs && c.pairs.length >= 2) steps.push('match');
    steps.push('yujin', 'muse', 'reward');

    let idx = 0;
    overlay.classList.remove('hidden');
    function dots() {
      return '<div class="steps-dots">' + steps.map((s, i) =>
        '<i class="' + (i < idx ? 'done' : (i === idx ? 'on' : '')) + '"></i>').join('') + '</div>';
    }
    function frame(inner) {
      popup.innerHTML =
        '<div class="ph-top"><span class="ch-tag">莊子 · ' + (c.src ? c.src + ' · ' : '') + '제 ' + c.ch + ' 화</span>' +
        '<button class="x" aria-label="닫기">✕</button></div>' + dots() + inner;
      const x = $('.x', popup); if (x) x.addEventListener('click', closePopup);
    }
    function next() { idx++; render(); }

    function render() {
      const step = steps[idx];
      if (step === 'recite') renderRecite();
      else if (step === 'blank') renderBlank(blankLine);
      else if (step === 'match') renderMatch();
      else if (step === 'yujin') renderYujin();
      else if (step === 'muse') renderMuse();
      else if (step === 'reward') renderReward();
    }

    function renderRecite() {
      sfx.drop();
      const say = TTS ? '<button class="say" aria-label="독음 듣기" title="독음 듣기">🔊</button>' : '';
      const full = c.full || (window.JANGJA_FULL || {})[c.ch];
      const lines = (c.lines || []).map(l =>
        '<div class="line" data-read="' + (l.read || '') + '"><div class="han">' + l.han + '</div><div class="read">' + (l.read || '') + '</div><div class="ko">' + (l.ko || '') + '</div>' + say + '</div>'
      ).join('');
      frame(
        '<div class="step"><div class="step-head"><div class="kicker">원문 낭독</div>' +
        '<h3 class="serif">' + c.title + '</h3><div class="ko">' + (c.titleKo || '') + '</div></div>' +
        '<div class="recite">' + lines + '</div>' +
        (full ? '<details class="fulltext"><summary>📜 원문 전체(全文) 펼쳐 보기' +
          (full.src ? ' <span class="ft-src">· ' + full.src + '</span>' : '') + '</summary>' +
          '<div class="ft-body"><div class="ft-han serif">' + full.han + '</div>' +
          (full.ko ? '<div class="ft-ko">' + full.ko + '</div>' : '') + '</div></details>' : '') +
        '<div class="actions">' +
        (TTS ? '<button class="btn ghost" id="listen">🔊 전체 듣기</button>' : '') +
        '<button class="btn" id="np">소리 내어 읽었어요 →</button></div></div>'
      );
      $('#np', popup).addEventListener('click', () => { sfx.brush(); next(); });
      if (TTS) {
        popup.querySelectorAll('.line .say').forEach(b => b.addEventListener('click', (e) => {
          e.stopPropagation(); speak(b.parentElement.dataset.read);
        }));
        const lb = $('#listen', popup);
        if (lb) lb.addEventListener('click', () => speak((c.lines || []).map(l => l.read).join(', ')));
      }
    }

    function renderBlank(line) {
      const kw = c.keyword;
      const pool = [kw.han].concat(kw.decoys || []).slice(0, 4);
      // 부족하면 채움
      while (pool.length < 4) pool.push(['天','地','人','水','心','道'][pool.length]);
      shuffle(pool);
      const html = line.han.split('').map(ch =>
        ch === kw.han ? '<span class="blank-box" id="bbox">_</span>' : ch
      ).join('');
      frame(
        '<div class="step"><div class="step-head"><div class="kicker">핵심어 찾기</div>' +
        '<h3>빈칸에 들어갈 글자는?</h3><div class="ko">뜻: ' + (kw.meaning || '') + '</div></div>' +
        '<div class="blank-line serif">' + html + '</div>' +
        '<div class="reveal-read" id="rread" hidden></div>' +
        '<div class="blank-hint">' + (line.ko || '') + '</div>' +
        '<div class="choices">' + pool.map(p => '<button class="choice" data-c="' + p + '"><span class="c-han serif">' + p + '</span><span class="c-read">' + read1(p) + '</span></button>').join('') + '</div>' +
        '<div class="actions"><button class="btn" id="np" disabled>다음 →</button></div></div>'
      );
      const np = $('#np', popup);
      popup.querySelectorAll('.choice').forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.dataset.c === kw.han) {
            btn.classList.add('correct'); sfx.good();
            const box = $('#bbox', popup); if (box) { box.textContent = kw.han; box.classList.add('filled'); }
            const rr = $('#rread', popup); if (rr) { rr.textContent = '🔊 ' + (line.read || ''); rr.hidden = false; }
            popup.querySelectorAll('.choice').forEach(b => b.style.pointerEvents = 'none');
            np.disabled = false;
          } else {
            btn.classList.add('wrong'); sfx.bad();
            setTimeout(() => btn.classList.remove('wrong'), 450);
          }
        });
      });
      np.addEventListener('click', () => { sfx.brush(); next(); });
    }

    function renderMatch() {
      const pairs = c.pairs.slice(0, 4);
      const lefts = pairs.map((p, i) => ({ t: p.left, id: i }));
      const rights = pairs.map((p, i) => ({ t: p.right, id: i }));
      shuffle(rights);
      frame(
        '<div class="step"><div class="step-head"><div class="kicker">구절 짝 맞추기</div>' +
        '<h3>어울리는 짝을 이어요</h3><div class="ko">왼쪽을 고르고 오른쪽 짝을 누르세요</div></div>' +
        '<div class="match"><div class="col" id="colL">' +
        lefts.map(l => '<button class="tile" data-id="' + l.id + '"><span class="t-han serif">' + l.t + '</span><span class="t-read">' + readOf(l.t) + '</span></button>').join('') +
        '</div><div class="col" id="colR">' +
        rights.map(r => '<button class="tile" data-id="' + r.id + '"><span class="t-han serif">' + r.t + '</span><span class="t-read">' + readOf(r.t) + '</span></button>').join('') +
        '</div></div>' +
        '<div class="actions"><button class="btn" id="np" disabled>다음 →</button></div></div>'
      );
      let selL = null, matched = 0;
      const np = $('#np', popup);
      function clearSel() { popup.querySelectorAll('#colL .tile.sel').forEach(t => t.classList.remove('sel')); selL = null; }
      popup.querySelectorAll('#colL .tile').forEach(t => t.addEventListener('click', () => {
        if (t.classList.contains('done')) return;
        clearSel(); t.classList.add('sel'); selL = t; sfx.drop();
      }));
      popup.querySelectorAll('#colR .tile').forEach(t => t.addEventListener('click', () => {
        if (t.classList.contains('done') || !selL) return;
        if (t.dataset.id === selL.dataset.id) {
          t.classList.add('done'); selL.classList.add('done'); selL = null; sfx.good();
          matched++; if (matched === pairs.length) { np.disabled = false; }
        } else {
          t.classList.add('miss'); sfx.bad(); setTimeout(() => t.classList.remove('miss'), 450); clearSel();
        }
      }));
      np.addEventListener('click', () => { sfx.brush(); next(); });
    }

    function renderYujin() {
      frame(
        '<div class="step"><div class="step-head"><div class="kicker">유진이의 풀이</div>' +
        '<h3>이 장은 무슨 뜻일까?</h3></div>' +
        '<div class="yujin"><div class="who">🌸 유진이의 풀이</div>' + (c.yujin || '') + '</div>' +
        (c.deep ? '<div class="deep"><div class="who">🔎 더 깊이 알기</div>' + c.deep + '</div>' : '') +
        '<div class="actions"><button class="btn" id="np">알겠어요 →</button></div></div>'
      );
      $('#np', popup).addEventListener('click', () => { sfx.brush(); next(); });
    }

    function renderMuse() {
      frame(
        '<div class="step"><div class="step-head"><div class="kicker">오늘의 물음</div>' +
        '<h3>잠깐 생각해 볼까요?</h3></div>' +
        '<div class="muse"><div class="q-mark serif">問</div><div class="q">' + (c.question || '') + '</div>' +
        '<div class="hint">정답은 없어요. 마음속으로 천천히 음미해 보세요.</div></div>' +
        '<div class="actions"><button class="btn" id="np">음미했어요 →</button></div></div>'
      );
      $('#np', popup).addEventListener('click', () => { sfx.bell(); next(); });
    }

    function renderReward() {
      const already = isCleared(c.ch);
      if (!already) { progress.cleared.push(c.ch); save(); }
      renderPath();
      if (!already) fxCelebrate();
      frame(
        '<div class="step reward"><div class="seal-big serif">印</div>' +
        '<h3>제 ' + c.ch + '화 도장 획득!</h3>' +
        '<p class="r-title serif">' + c.title + '</p>' +
        '<p class="r-read">' + readOf(c.title) + '</p>' +
        '<p class="r-ko">' + (c.titleKo || '') + '</p>' +
        '<p style="margin-top:10px; color:var(--teal); font-weight:800">소요(逍遙)의 길 ' + progress.cleared.length + ' / ' + (DATA.length || 33) + ' 화</p>' +
        '<div class="actions"><button class="btn ghost" id="again">다시 보기</button><button class="btn" id="done">길로 돌아가기</button></div></div>'
      );
      $('#done', popup).addEventListener('click', () => { closePopup(); if (!already) toast('도장을 받았어요! 🦋'); });
      $('#again', popup).addEventListener('click', () => { idx = 0; render(); });
    }

    render();
  }

  function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  /* 도장 획득 축하 연출 — 먹 번짐 + 꽃잎이 흩날림 */
  function fxCelebrate() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const layer = document.createElement('div');
    layer.className = 'fx-layer';
    const petals = ['🦋', '🌸', '✿', '🍃', '✦'];
    for (let i = 0; i < 20; i++) {
      const s = document.createElement('span');
      const ink = i % 4 === 0;
      s.className = ink ? 'fx-ink' : 'fx-petal';
      if (!ink) s.textContent = petals[i % petals.length];
      s.style.left = (Math.random() * 100) + '%';
      s.style.setProperty('--x', ((Math.random() * 2 - 1) * 140) + 'px');
      s.style.setProperty('--rot', ((Math.random() * 2 - 1) * 360) + 'deg');
      s.style.animationDuration = (2.4 + Math.random() * 1.8) + 's';
      s.style.animationDelay = (Math.random() * 0.5) + 's';
      if (ink) { const z = 8 + Math.random() * 18; s.style.width = z + 'px'; s.style.height = z + 'px'; }
      else { s.style.fontSize = (16 + Math.random() * 18) + 'px'; }
      layer.appendChild(s);
    }
    document.body.appendChild(layer);
    setTimeout(() => layer.remove(), 5200);
  }

  /* 초기화 버튼 */
  const reset = $('#btn-reset');
  if (reset) reset.addEventListener('click', () => {
    if (confirm('장자 진행(도장)을 모두 초기화할까요?')) { progress = { cleared: [] }; save(); renderPath(); toast('초기화했어요.'); }
  });

  const resumeBtn = $('#btn-resume');
  if (resumeBtn) resumeBtn.addEventListener('click', () => {
    const ch = parseInt(resumeBtn.dataset.ch || '1', 10);
    const c = DATA.find((d) => d.ch === ch) || DATA[0];
    if (c) openChapter(c);
  });

  renderPath();
})();
