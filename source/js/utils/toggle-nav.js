function toggleNav() {
  const navBlock = document.querySelector('.main-nav');
  const toggleButton = document.querySelector('.main-nav__toggle');
  const body = document.querySelector('body');

  navBlock.classList.remove('.main-nav--nojs');

  toggleButton.addEventListener('click', () => {
    navBlock.classList.toggle('main-nav--opened');
    body.classList.toggle('scroll-lock');
  });
}

export {toggleNav};
