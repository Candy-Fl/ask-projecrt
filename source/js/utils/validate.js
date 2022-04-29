function validate() {
  const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  function check(item, rule) {
    if (rule.test(item.value)) {
      item.classList.remove('form__input--error');
      item.classList.add('form__input--good');
      return true;
    } else {
      item.classList.remove('form__input--good');
      item.classList.add('form__input--error');
      return false;
    }
  }

  const name = document.querySelector('.form__input--name');
  const form = document.querySelector('.booking__form');
  const tel = document.querySelector('.form__input--tel');
  const email = document.querySelector('.form__input--email');
  const buttonSumbit = document.querySelector('.form__btn');
  const checkbox = document.querySelector('.booking__checkbox ');
  const checkboxContainer = document.querySelector('.form__checkbox--container');
  const alertWrapper = document.querySelector('.alert');

  buttonSumbit.addEventListener('click', () => {
    if (checkbox.checked) {
      checkboxContainer.classList.remove('form__checkbox--container-good');
      return;
    }
    checkboxContainer.classList.add('form__checkbox--container-good');
  });

  form.addEventListener('submit', (e) => {
    check(tel, regex);
    check(email, re);
    if (checkbox.checked && check(tel, regex) && check(email, re)) {
      tel.value = '';
      email.value = '';
      name.value = '';
      alertWrapper.style.display = 'block';
      alertWrapper.style.display = 'block';
      setTimeout(() => {
        alertWrapper.style.display = 'none';
      }, 1000);
    }
    e.preventDefault();
  });
}

export {validate};
