/* =========================================================================
 * 유진이의 한자교실 — 랜딩 페이지 인터랙션
 *  · "스르륵" 사운드 (Web Audio로 합성, 오디오 파일 불필요)
 *  · 스크롤 등장 애니메이션 (IntersectionObserver)
 *  · 히어로 일러스트 마우스 패럴럭스(기울임)
 *  · 사운드 켜기/끄기 토글 (localStorage 기억)
 * ======================================================================= */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- 사운드 (Web Audio) ---------------- */
  let actx = null, master = null;
  let muted = localStorage.getItem('yj_muted') === '1';

  function ensureCtx() {
    if (actx) return actx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    actx = new AC();
    master = actx.createGain();
    master.gain.value = 0.5;
    master.connect(actx.destination);
    return actx;
  }

  function noiseBuffer(dur) {
    const len = Math.max(1, Math.floor(actx.sampleRate * dur));
    const buf = actx.createBuffer(1, len, actx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    return buf;
  }

  /* 필터된 노이즈 스윕 = "스르륵" 휘익 소리 */
  function whoosh(opts) {
    if (muted) return;
    const ctx = ensureCtx();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();

    const o = Object.assign({ dur: 0.55, f0: 380, f1: 2600, gain: 0.5, q: 0.8 }, opts || {});
    const t = ctx.currentTime;

    const src = ctx.createBufferSource();
    src.buffer = noiseBuffer(o.dur + 0.05);

    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.Q.value = o.q;
    bp.frequency.setValueAtTime(o.f0, t);
    bp.frequency.exponentialRampToValueAtTime(o.f1, t + o.dur * 0.6);
    bp.frequency.exponentialRampToValueAtTime(Math.max(80, o.f0 * 0.8), t + o.dur);

    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(o.gain, t + o.dur * 0.28);
    g.gain.exponentialRampToValueAtTime(0.0001, t + o.dur);

    src.connect(bp); bp.connect(g); g.connect(master);
    src.start(t);
    src.stop(t + o.dur + 0.05);
  }

  /* 짧고 가벼운 "사르륵" — 카드 호버/책장 넘김 느낌 */
  function flip() { whoosh({ dur: 0.3, f0: 620, f1: 1900, gain: 0.3, q: 1.3 }); }

  /* ---------------- 사운드 토글 ---------------- */
  const btn = document.getElementById('sound-toggle');
  function applyMuted() {
    if (!btn) return;
    btn.textContent = muted ? '🔇' : '🔊';
    btn.setAttribute('aria-pressed', String(muted));
  }
  applyMuted();
  if (btn) {
    btn.addEventListener('click', function () {
      muted = !muted;
      localStorage.setItem('yj_muted', muted ? '1' : '0');
      applyMuted();
      if (!muted) { ensureCtx(); whoosh({ dur: 0.42, gain: 0.4 }); }
    });
  }

  /* ---------------- 첫 상호작용 시 인트로 "스르륵" ----------------
   * 브라우저는 사용자 동작 전 오디오 자동재생을 막으므로,
   * 첫 클릭/스크롤/키 입력 때 오디오를 깨우고 인트로 사운드를 재생. */
  let kicked = false;
  function kick() {
    if (kicked) return;
    kicked = true;
    ensureCtx();
    whoosh({ dur: 0.72, f0: 300, f1: 3000, gain: 0.45, q: 0.6 });
    ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach(function (ev) {
      window.removeEventListener(ev, kick);
    });
  }
  ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach(function (ev) {
    window.addEventListener(ev, kick, { passive: true });
  });

  /* ---------------- 스크롤 등장 ---------------- */
  const reveals = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        const el = e.target;
        const delay = parseInt(el.dataset.delay || '0', 10);
        setTimeout(function () {
          el.classList.add('in');
          if (el.hasAttribute('data-reveal')) whoosh({ dur: 0.4, f0: 360, f1: 2100, gain: 0.22, q: 0.9 });
        }, delay);
        io.unobserve(el);
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------------- 카드 호버 / CTA 사운드 ---------------- */
  let lastHover = 0;
  document.querySelectorAll('.menu-card').forEach(function (c) {
    c.addEventListener('pointerenter', function () {
      const now = Date.now();
      if (now - lastHover > 110) { lastHover = now; flip(); }
    });
  });
  document.querySelectorAll('.cta, .cta-ghost, .scroll-hint').forEach(function (a) {
    a.addEventListener('click', function () { whoosh({ dur: 0.5, f0: 500, f1: 2800, gain: 0.5, q: 0.7 }); });
  });

  /* ---------------- 히어로 패럴럭스(기울임) ---------------- */
  const art = document.querySelector('.hero-art');
  const heroEl = document.querySelector('.hero');
  if (art && heroEl && !prefersReduced && window.matchMedia('(pointer:fine)').matches) {
    heroEl.addEventListener('pointermove', function (e) {
      const r = heroEl.getBoundingClientRect();
      const cx = (e.clientX - r.left) / r.width - 0.5;
      const cy = (e.clientY - r.top) / r.height - 0.5;
      art.style.transform = 'perspective(1000px) rotateY(' + (cx * 5).toFixed(2) + 'deg) rotateX(' + (-cy * 5).toFixed(2) + 'deg)';
    });
    heroEl.addEventListener('pointerleave', function () { art.style.transform = ''; });
  }
})();
