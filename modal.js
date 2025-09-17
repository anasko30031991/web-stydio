document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.querySelector('.hero-button');
  const modal = document.querySelector('.modal');
  const closeModalBtn = document.querySelector('.modal-close-btn');

  const body = document.body;

  if (openModalBtn && modal && closeModalBtn) {
    openModalBtn.addEventListener('click', () => {
      modal.classList.add('is-open');
      body.classList.add('no-scroll');
    });

    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('is-open');
      body.classList.remove('no-scroll');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('is-open');
        body.classList.remove('no-scroll');
      }
    });
  }
});
