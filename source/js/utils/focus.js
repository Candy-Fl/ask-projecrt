const buttons = document.querySelectorAll('.cruises__btn');
const cards = document.querySelectorAll('.cruises__item');
// buttons.forEach((button) => {
//   button.addEventListener('focus', () => {
//     console.log('1');
//   });
// });

function focus() {
  for (let i = 0; i < cards.length; i++) {
    buttons[i].addEventListener('focus', () => {
      cards[i].classList.add('cruises__item--opened');
    });
    buttons[i].addEventListener('blur', () => {
      cards[i].classList.remove('cruises__item--opened');
    });
  }
}

export {focus};
