/* ============================================
   THEJA REDDY — PORTFOLIO
   animations.js — Typing Effect & Visual FX
   ============================================ */

'use strict';

/* ─── Typed Text Effect ─── */
(function initTyped() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const phrases = [
    'Python Full Stack Developer',
    'AI Enthusiast',
    'Frontend Developer',
    'Problem Solver',
    'Flask & Django Dev',
    'Networking Curious'
  ];

  let phraseIndex = 0;
  let charIndex   = 0;
  let isDeleting  = false;
  let isPaused    = false;

  const TYPING_SPEED   = 60;
  const DELETING_SPEED = 35;
  const PAUSE_AFTER    = 1800;
  const PAUSE_BEFORE   = 300;

  function tick() {
    const current = phrases[phraseIndex];

    if (isPaused) return;

    if (!isDeleting) {
      // Typing
      charIndex++;
      el.textContent = current.slice(0, charIndex);

      if (charIndex === current.length) {
        isPaused = true;
        setTimeout(() => {
          isPaused    = false;
          isDeleting  = true;
          schedule();
        }, PAUSE_AFTER);
        return;
      }
    } else {
      // Deleting
      charIndex--;
      el.textContent = current.slice(0, charIndex);

      if (charIndex === 0) {
        isDeleting  = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        isPaused    = true;
        setTimeout(() => {
          isPaused = false;
          schedule();
        }, PAUSE_BEFORE);
        return;
      }
    }

    schedule();
  }

  function schedule() {
    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const jitter = Math.random() * 20 - 10;
    setTimeout(tick, speed + jitter);
  }

  // Start after hero loads
  setTimeout(schedule, 1200);
})();

/* ─── Parallax on Hero Orbs (subtle, mouse-based) ─── */
(function initParallax() {
  const orbs = document.querySelectorAll('.orb');
  if (!orbs.length) return;

  let rafId = null;
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  document.addEventListener('mousemove', e => {
    targetX = (e.clientX / window.innerWidth  - 0.5) * 20;
    targetY = (e.clientY / window.innerHeight - 0.5) * 20;
  });

  function lerp(a, b, t) { return a + (b - a) * t; }

  function updateParallax() {
    currentX = lerp(currentX, targetX, 0.06);
    currentY = lerp(currentY, targetY, 0.06);

    orbs.forEach((orb, i) => {
      const factor = (i + 1) * 0.4;
      orb.style.transform = `translate(${currentX * factor}px, ${currentY * factor}px)`;
    });

    rafId = requestAnimationFrame(updateParallax);
  }

  updateParallax();

  // Pause on mobile (performance)
  if (window.innerWidth < 768) {
    cancelAnimationFrame(rafId);
  }
})();

/* ─── Active nav section highlight via scroll ─── */
(function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a[data-section]');

  if (!sections.length || !navItems.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(a => {
          a.classList.toggle('active', a.dataset.section === entry.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => io.observe(s));
})();

/* ─── Section number counter animation ─── */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-count]');
  if (!counters.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1400;
      const start    = performance.now();

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => io.observe(c));
})();
