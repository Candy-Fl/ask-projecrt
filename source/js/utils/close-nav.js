function closeNav() {
  const nav = document.querySelector('.main-nav');
  const links = document.querySelectorAll('.main-nav__link');
  const overlay = document.querySelector('.main-nav__list-overlay');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('main-nav--opened');
    });
  });
  overlay.addEventListener('click', () => {
    nav.classList.remove('main-nav--opened');
  });
}

export {closeNav};
