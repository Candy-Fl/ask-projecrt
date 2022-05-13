/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_toggle_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/toggle-nav */ "./js/utils/toggle-nav.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/validate */ "./js/utils/validate.js");
/* harmony import */ var _utils_close_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/close-nav */ "./js/utils/close-nav.js");
/* harmony import */ var _utils_focus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/focus */ "./js/utils/focus.js");



 // ---------------------------------

window.addEventListener('DOMContentLoaded', function () {
  // Utils
  // ---------------------------------
  Object(_utils_toggle_nav__WEBPACK_IMPORTED_MODULE_0__["toggleNav"])();
  Object(_utils_validate__WEBPACK_IMPORTED_MODULE_1__["validate"])();
  Object(_utils_close_nav__WEBPACK_IMPORTED_MODULE_2__["closeNav"])();
  Object(_utils_focus__WEBPACK_IMPORTED_MODULE_3__["focus"])(); // Modules
  // ---------------------------------
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
}); // ---------------------------------
// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.
// привязывайте js не на классы, а на дата атрибуты (data-validate)
// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✔️
// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.
// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();
// используйте .closest(el)

/***/ }),

/***/ "./js/utils/close-nav.js":
/*!*******************************!*\
  !*** ./js/utils/close-nav.js ***!
  \*******************************/
/*! exports provided: closeNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeNav", function() { return closeNav; });
function closeNav() {
  var nav = document.querySelector('.main-nav');
  var links = document.querySelectorAll('.main-nav__link');
  var overlay = document.querySelector('.main-nav__list-overlay');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('main-nav--opened');
    });
  });
  overlay.addEventListener('click', function () {
    nav.classList.remove('main-nav--opened');
  });
}



/***/ }),

/***/ "./js/utils/focus.js":
/*!***************************!*\
  !*** ./js/utils/focus.js ***!
  \***************************/
/*! exports provided: focus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focus", function() { return focus; });
var buttons = document.querySelectorAll('.cruises__btn');
var cards = document.querySelectorAll('.cruises__item'); // buttons.forEach((button) => {
//   button.addEventListener('focus', () => {
//     console.log('1');
//   });
// });

function focus() {
  var _loop = function _loop(i) {
    buttons[i].addEventListener('focus', function () {
      cards[i].classList.add('cruises__item--opened');
    });
    buttons[i].addEventListener('blur', function () {
      cards[i].classList.remove('cruises__item--opened');
    });
  };

  for (var i = 0; i < cards.length; i++) {
    _loop(i);
  }
}



/***/ }),

/***/ "./js/utils/send-form.js":
/*!*******************************!*\
  !*** ./js/utils/send-form.js ***!
  \*******************************/
/*! exports provided: sendData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendData", function() { return sendData; });
var sendData = function sendData(body) {
  var alertWrapper = document.querySelector('.alert');
  console.log(JSON.stringify(body));
  fetch('https://echo.htmlacademy.ru/', {
    method: 'POST',
    body: body
  }).then(function (response) {
    if (response.ok) {
      alertWrapper.style.display = 'block';
      alertWrapper.style.display = 'block';
      setTimeout(function () {
        alertWrapper.style.display = 'none';
      }, 1000);
    }
  }).catch(function (err) {
    console.log(err);
  });
};



/***/ }),

/***/ "./js/utils/toggle-nav.js":
/*!********************************!*\
  !*** ./js/utils/toggle-nav.js ***!
  \********************************/
/*! exports provided: toggleNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleNav", function() { return toggleNav; });
function toggleNav() {
  var navBlock = document.querySelector('.main-nav');
  var toggleButton = document.querySelector('.main-nav__toggle');
  var body = document.querySelector('body');
  var footer = document.querySelector('footer');
  var main = document.querySelector('main');
  navBlock.classList.remove('.main-nav--nojs');
  toggleButton.addEventListener('click', function () {
    navBlock.classList.toggle('main-nav--opened');
    body.classList.toggle('scroll-lock');
    main.style.display = main.style.display === 'none' ? 'block' : 'none';
    footer.style.display = footer.style.display === 'none' ? 'block' : 'none';
  });
}



/***/ }),

/***/ "./js/utils/validate.js":
/*!******************************!*\
  !*** ./js/utils/validate.js ***!
  \******************************/
/*! exports provided: validate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony import */ var _send_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-form */ "./js/utils/send-form.js");


function validate() {
  var regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  function check(item, rule) {
    if (rule.test(item.value)) {
      item.style.outline = '1px solid #4BB543';
      return true;
    } else {
      item.style.outline = '1px solid red';
      return false;
    }
  }

  var formButton = document.querySelector('.form__btn');
  var tel = document.querySelector('.form__input--tel');
  var email = document.querySelector('.form__input--email');
  var checkbox = document.querySelector('.booking__checkbox ');
  var name = document.querySelector('.form__input--name');

  function checkboxCheck() {
    if (checkbox.checked) {
      checkbox.style.outline = '1px solid #4BB543';
      return;
    }

    checkbox.style.outline = '1px solid red';
  }

  tel.addEventListener('keyup', function () {
    check(tel, regex);
  });
  email.addEventListener('keyup', function () {
    check(email, re);
  });
  formButton.addEventListener('click', function (e) {
    checkboxCheck();

    if (checkbox.checked && check(tel, regex) && check(email, re)) {
      e.preventDefault();
      Object(_send_form__WEBPACK_IMPORTED_MODULE_0__["sendData"])({
        name: name.value,
        email: email.value,
        phone: tel.value
      });
      name.value = '';
      email.value = '';
      tel.value = '';
      checkbox.checked = false;
    }
  });
}



/***/ })

/******/ });
//# sourceMappingURL=main.js.map