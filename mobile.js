document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.menu-open-btn');
  const closeBtn = document.querySelector('.menu-close-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const body = document.body;

  if (openBtn && closeBtn && mobileMenu) {
    openBtn.addEventListener('click', () => {
      mobileMenu.classList.add('is-open');
      body.classList.add('no-scroll');
    });

    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      body.classList.remove('no-scroll');
    });
  }
});