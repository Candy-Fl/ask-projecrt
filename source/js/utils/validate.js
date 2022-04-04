function validate() {
  const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  function check(item, rule) {

    item.addEventListener('input', () => {
      if (rule.test(item.value)) {
        item.classList.remove('form__input--error');
        item.classList.add('form__input--good');
      } else {
        item.classList.remove('form__input--good');
        item.classList.add('form__input--error');
      }
    });
  }

  const tel = document.querySelector('.form__input--tel');
  const email = document.querySelector('.form__input--email');
  const buttonSumbit = document.querySelector('.form__btn');
  const checkbox = document.querySelector('.booking__checkbox ');
  const checkboxContainer = document.querySelector('.form__checkbox--container');

  buttonSumbit.addEventListener('click', (e) => {
    if (checkbox.checked) {
      checkboxContainer.classList.remove('form__checkbox--container-good');
      return;
    }
    e.preventDefault();
    checkboxContainer.classList.add('form__checkbox--container-good');
  });

  check(tel, regex);
  check(email, re);
}

export {validate};
