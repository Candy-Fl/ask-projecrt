function toggleNav() {
  const navBlock = document.querySelector('.main-nav');
  const toggleButton = document.querySelector('.main-nav__toggle');
  const body = document.querySelector('body');
  const footer = document.querySelector('footer');
  const main = document.querySelector('main');

  navBlock.classList.remove('.main-nav--nojs');

  toggleButton.addEventListener('click', () => {
    navBlock.classList.toggle('main-nav--opened');
    body.classList.toggle('scroll-lock');
    main.style.display = (main.style.display === 'none') ? 'block' : 'none';
    footer.style.display = (footer.style.display === 'none') ? 'block' : 'none';
  });
}

export {toggleNav};
