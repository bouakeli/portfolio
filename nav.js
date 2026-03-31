/* nav.js — shared navigation behaviour */
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('open');
}

/* Mobile dropdown tap support */
document.addEventListener('DOMContentLoaded', () => {
  const dd = document.getElementById('ddProjects');
  if (!dd) return;
  const toggle = dd.querySelector('a');
  if (toggle) {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dd.classList.toggle('open');
      }
    });
  }
});
