/* =========================================================================
 * 천자문 어드벤처 — 연출 엔진 (의존성 없는 캔버스 파티클)
 *   fxBurst(x, y)   : (x,y) 지점에서 마법 스파클 폭발 (정답/카드 획득)
 *   fxConfetti()    : 화면 상단에서 컨페티 쏟아짐 (사자성어 콤보)
 *   fxAura(el)      : 요소 주변 짧은 오라 링 (선택)
 * RAF 루프는 파티클이 있을 때만 돈다.
 * ======================================================================= */

(function () {
  'use strict';

  const canvas = document.createElement('canvas');
  canvas.id = 'fx-canvas';
  Object.assign(canvas.style, {
    position: 'fixed', inset: '0', width: '100%', height: '100%',
    pointerEvents: 'none', zIndex: '300'
  });
  document.addEventListener('DOMContentLoaded', () => document.body.appendChild(canvas));

  const ctx = canvas.getContext('2d');
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let particles = [];
  let running = false;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(innerWidth * dpr);
    canvas.height = Math.floor(innerHeight * dpr);
  }
  window.addEventListener('resize', resize);
  resize();

  const PALETTE = ['#6366f1', '#a855f7', '#f59e0b', '#fbbf24', '#22c55e', '#ec4899'];

  function rand(a, b) { return a + Math.random() * (b - a); }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.vy += p.g;
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 1;
      p.rot += p.vr;
      const alpha = Math.max(0, p.life / p.maxLife);

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(p.x * dpr, p.y * dpr);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      if (p.shape === 'star') {
        drawStar(p.size * dpr);
      } else if (p.shape === 'rect') {
        ctx.fillRect(-p.size * dpr / 2, -p.size * dpr / 2, p.size * dpr, p.size * dpr * 0.6);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size * dpr / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      if (p.life <= 0 || p.y > innerHeight + 40) particles.splice(i, 1);
    }
    if (particles.length > 0) {
      requestAnimationFrame(loop);
    } else {
      running = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  function drawStar(r) {
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const a = (i * 4 * Math.PI) / 5 - Math.PI / 2;
      const x = Math.cos(a) * r, y = Math.sin(a) * r;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
  }

  function start() {
    if (!running) { running = true; requestAnimationFrame(loop); }
  }

  window.fxBurst = function (x, y) {
    const count = 26;
    for (let i = 0; i < count; i++) {
      const ang = rand(0, Math.PI * 2);
      const speed = rand(2, 8);
      particles.push({
        x, y,
        vx: Math.cos(ang) * speed,
        vy: Math.sin(ang) * speed - rand(0, 2),
        g: 0.12, drag: 0.96,
        size: rand(4, 9),
        color: PALETTE[(Math.random() * PALETTE.length) | 0],
        shape: Math.random() < 0.6 ? 'star' : 'circle',
        rot: rand(0, Math.PI), vr: rand(-0.3, 0.3),
        life: rand(36, 64), maxLife: 64
      });
    }
    start();
  };

  window.fxConfetti = function () {
    const count = 140;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: rand(0, innerWidth),
        y: rand(-innerHeight * 0.3, -10),
        vx: rand(-2.5, 2.5),
        vy: rand(2, 6),
        g: 0.08, drag: 0.995,
        size: rand(6, 12),
        color: PALETTE[(Math.random() * PALETTE.length) | 0],
        shape: Math.random() < 0.5 ? 'rect' : 'star',
        rot: rand(0, Math.PI), vr: rand(-0.25, 0.25),
        life: rand(120, 200), maxLife: 200
      });
    }
    start();
  };
})();
