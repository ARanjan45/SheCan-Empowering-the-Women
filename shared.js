/* ============================================================
   She Can Foundation — Shared JavaScript
   Used across all pages via <script src="shared.js">
   ============================================================ */

/* ── NAV SCROLL SHADOW ── */
const navbar = document.getElementById('navbar');
const bttBtn = document.getElementById('btt');

window.addEventListener('scroll', () => {
  // Add shadow to nav on scroll
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  // Show / hide back-to-top button
  if (bttBtn) bttBtn.classList.toggle('show', window.scrollY > 400);
});

/* ── MOBILE MENU TOGGLE ── */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

/* ── SCROLL REVEAL ── */
// Observe all .reveal elements and add .visible when they enter viewport
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // fire once
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── COUNTER ANIMATION ── */
// Animates [data-target] elements from 0 to their target value
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = (current >= target ? target : Math.floor(current)) + '+';
    if (current >= target) clearInterval(timer);
  }, 16);
}

const counterDone = new Set();
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !counterDone.has(entry.target)) {
      counterDone.add(entry.target);
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

/* ── BACK TO TOP ── */
if (bttBtn) {
  bttBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── ACTIVE NAV LINK ── */
// Highlight the nav link matching current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
});