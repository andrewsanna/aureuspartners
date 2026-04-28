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

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const btn = form.querySelector('.cf-submit');
      btn.textContent = 'Message Sent';
      btn.style.opacity = '0.5';
      btn.disabled = true;

      // Example: to use Formspree, set your form action to:
      // <form id="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
      // and remove this JS submit handler — Formspree handles it.
    });
  }

});
