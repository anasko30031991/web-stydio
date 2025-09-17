document.addEventListener('DOMContentLoaded', () => {
  const footerForm = document.querySelector('.footer-form');
  const emailInput = document.querySelector('.footer-form-input');

  if (footerForm && emailInput) {
    footerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();
      if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Будь ласка, введіть правильний email.');
        return;
      }

      alert('Дякуємо за підписку!');
      footerForm.reset();
    });
  }
});
