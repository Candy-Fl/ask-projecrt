function closeNav() {
  const nav = document.querySelector('.main-nav');
  const links = document.querySelectorAll('.main-nav__link');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('main-nav--opened');
    });
  });
}

export {closeNav};
