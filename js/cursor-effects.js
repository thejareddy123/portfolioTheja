/* ============================================
   THEJA REDDY — PORTFOLIO
   cursor-effects.js — Custom Cursor & Glow
   ============================================ */

'use strict';

(function initCursor() {
  // Only on non-touch devices
  if (window.matchMedia('(hover: none)').matches) {
    document.body.style.cursor = 'auto';
    return;
  }

  /* ── Build cursor elements ── */
  const dot  = document.createElement('div');
  const ring = document.createElement('div');

  dot.id  = 'cursor-dot';
  ring.id = 'cursor-ring';

  Object.assign(dot.style, {
    position:        'fixed',
    width:           '6px',
    height:          '6px',
    borderRadius:    '50%',
    background:      'var(--accent-primary)',
    pointerEvents:   'none',
    zIndex:          '99999',
    transform:       'translate(-50%, -50%)',
    transition:      'transform 0.1s ease, opacity 0.2s ease',
    mixBlendMode:    'normal',
    top:             '-20px',
    left:            '-20px',
  });

  Object.assign(ring.style, {
    position:        'fixed',
    width:           '32px',
    height:          '32px',
    borderRadius:    '50%',
    border:          '1.5px solid rgba(123,110,246,0.5)',
    pointerEvents:   'none',
    zIndex:          '99998',
    transform:       'translate(-50%, -50%)',
    transition:      'width 0.25s ease, height 0.25s ease, border-color 0.25s ease, opacity 0.25s ease',
    top:             '-40px',
    left:            '-40px',
  });

  document.body.appendChild(dot);
  document.body.appendChild(ring);

  /* ── Track position ── */
  let mouseX = -100, mouseY = -100;
  let ringX  = -100, ringY  = -100;
  let rafId  = null;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.top  = mouseY + 'px';
    dot.style.left = mouseX + 'px';
  });

  function lerp(a, b, t) { return a + (b - a) * t; }

  function animateRing() {
    ringX = lerp(ringX, mouseX, 0.14);
    ringY = lerp(ringY, mouseY, 0.14);
    ring.style.top  = ringY + 'px';
    ring.style.left = ringX + 'px';
    rafId = requestAnimationFrame(animateRing);
  }

  animateRing();

  /* ── Hover states ── */
  const hoverTargets = 'a, button, .btn, .project-card, .freelance-card, .glass-card, .skill-item, .social-link, .contact-card, .nav-logo';

  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverTargets)) {
      dot.style.transform     = 'translate(-50%, -50%) scale(2.5)';
      dot.style.background    = 'var(--accent-cyan)';
      ring.style.width        = '48px';
      ring.style.height       = '48px';
      ring.style.borderColor  = 'rgba(78,205,196,0.6)';
    }
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverTargets)) {
      dot.style.transform    = 'translate(-50%, -50%) scale(1)';
      dot.style.background   = 'var(--accent-primary)';
      ring.style.width       = '32px';
      ring.style.height      = '32px';
      ring.style.borderColor = 'rgba(123,110,246,0.5)';
    }
  });

  /* ── Click pulse ── */
  document.addEventListener('mousedown', () => {
    dot.style.transform  = 'translate(-50%, -50%) scale(0.6)';
    ring.style.transform = 'translate(-50%, -50%) scale(0.85)';
  });

  document.addEventListener('mouseup', () => {
    dot.style.transform  = 'translate(-50%, -50%) scale(1)';
    ring.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  /* ── Hide when leaving window ── */
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });

})();
