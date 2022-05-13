import {sendData} from './send-form';

function validate() {
  const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  function check(item, rule) {
    if (rule.test(item.value)) {
      item.style.outline = '1px solid #4BB543';
      return true;
    } else {
      item.style.outline = '1px solid red';
      return false;
    }
  }

  const formButton = document.querySelector('.form__btn');
  const tel = document.querySelector('.form__input--tel');
  const email = document.querySelector('.form__input--email');
  const checkbox = document.querySelector('.booking__checkbox ');
  const name = document.querySelector('.form__input--name');

  function checkboxCheck() {
    if (checkbox.checked) {
      checkbox.style.outline = '1px solid #4BB543';
      return;
    }
    checkbox.style.outline = '1px solid red';
  }

  tel.addEventListener('keyup', () => {
    check(tel, regex);
  });

  email.addEventListener('keyup', () => {
    check(email, re);
  });

  formButton.addEventListener('click', (e) => {
    checkboxCheck();
    if (checkbox.checked && check(tel, regex) && check(email, re)) {
      e.preventDefault();
      sendData({
        name: name.value,
        email: email.value,
        phone: tel.value,
      });
      name.value = '';
      email.value = '';
      tel.value = '';
      checkbox.checked = false;
    }
  });
}

export {validate};
