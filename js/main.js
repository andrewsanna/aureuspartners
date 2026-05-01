/* =============================================================
   AUREUS PARTNERS — main.js
============================================================= */

document.addEventListener('DOMContentLoaded', function () {

  // ── NAV: add border when user scrolls down ──────────────────
  const nav = document.getElementById('nav');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 8) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });


  // ── SCROLL REVEAL: fade elements in as they enter view ──────
  // Add class "r" to any element in HTML to make it reveal on scroll.
  // Add "r2" or "r3" alongside "r" for a staggered delay.
  const revealElements = document.querySelectorAll('.r');

  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target); // only animate once
      }
    });
  }, { threshold: 0.08 });

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });


  // ── CONTACT FORM: handle submission ─────────────────────────
  // To connect a real form backend, replace the contents of this
  // function with a fetch() call to your endpoint (e.g. Formspree,
  // Netlify Forms, or a custom API).
  const form = document.getElementById('contact-form');

  
  }

});
