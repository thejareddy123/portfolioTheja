/* =====================================================
   B Theja Reddy Portfolio — script.js
   =====================================================
   Features:
   - Sticky navbar scroll behavior
   - Mobile nav toggle
   - Active nav link on scroll
   - Scroll reveal animations
   - Contact form handler
   ===================================================== */

// ========================
// NAVBAR — scroll behavior
// ========================
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });
handleNavbarScroll(); // run on load


// ========================
// MOBILE NAV TOGGLE
// ========================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = navToggle.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

// Close mobile nav on link click
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = navToggle.querySelectorAll('span');
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});


// ========================
// ACTIVE NAV LINK ON SCROLL
// ========================
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link[href^="#"]');

function updateActiveLink() {
  const scrollPos = window.scrollY + 100;
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionH = section.offsetHeight;
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionH) {
      current = section.getAttribute('id');
    }
  });

  navLinkEls.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });


// ========================
// SCROLL REVEAL
// ========================
function setupRevealAnimations() {
  // Add reveal class to key elements
  const revealSelectors = [
    '.about-text-block',
    '.about-card',
    '.skill-category',
    '.exp-card',
    '.project-featured',
    '.project-card',
    '.edu-card',
    '.cert-card',
    '.contact-item',
    '.contact-form-wrap',
    '.resume-cta-card',
  ];

  revealSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('reveal');
      if (i === 1) el.classList.add('reveal-delay-1');
      if (i === 2) el.classList.add('reveal-delay-2');
      if (i === 3) el.classList.add('reveal-delay-3');
    });
  });

  // Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // fire once
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Respect prefers-reduced-motion
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setupRevealAnimations();
}


// ========================
// CONTACT FORM HANDLER
// ========================
function handleContactForm(e) {
  e.preventDefault();

  const name    = document.getElementById('cf-name').value.trim();
  const email   = document.getElementById('cf-email').value.trim();
  const subject = document.getElementById('cf-subject').value.trim();
  const message = document.getElementById('cf-message').value.trim();

  if (!name || !email || !message) return;

  // Build mailto link as fallback (replace with actual API/form service)
  const mailtoLink = `mailto:theja@example.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
  window.location.href = mailtoLink;

  // Optional: show success state
  const btn = e.target.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = '✓ Message sent!';
  btn.style.background = '#22C55E';
  btn.style.boxShadow = '0 4px 16px rgba(34,197,94,0.3)';

  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    btn.style.boxShadow = '';
  }, 3000);
}


// ========================
// SMOOTH SCROLL POLYFILL
// (for browsers that need it)
// ========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


// ========================
// PROFILE IMAGE FALLBACK
// ========================
// Already handled inline via onerror in HTML,
// but we ensure the initials placeholder is styled correctly.
window.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('profileImg');
  const initials = document.getElementById('profileInitials');
  if (img) {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      if (initials) initials.style.display = 'flex';
    });
    // If already broken (cached error)
    if (!img.complete || img.naturalWidth === 0) {
      img.style.display = 'none';
      if (initials) initials.style.display = 'flex';
    }
  }
});


// ========================
// CONSOLE BRANDING
// ========================
console.log('%c B Theja Reddy Portfolio ', 'background:#0F2B5B;color:#fff;font-family:monospace;font-size:14px;padding:8px 16px;border-radius:6px;');
console.log('%c Python Developer | Backend Developer | Aspiring AI Engineer', 'color:#1A6BF0;font-family:monospace;font-size:11px;');
