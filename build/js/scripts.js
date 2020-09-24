"use strict";

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  mask('[name="user_tel"]');
  scrolling(".pageup"); // Call Modal

  bindModal(".js-contactUs", ".js-popupCall", ".js-popupCall_close", 'faded', 'fadeOut'); //    Calc Modal
  // Step 1

  bindModal(".js-calc", ".js-popupCalc_first", ".js-popupCalc_firstClose", 'faded', 'fadeOut'); // Step 2

  bindModal(".js-next_first", ".js-popupCalc_second", ".js-popupCalc_second--close", 'faded', 'fadeOut', false); // Step 3

  bindModal(".js-next_second", ".js-popupCalc_third", ".js-popupCalc_second--third", 'faded', 'fadeOut', false); // Step 4

  bindModal(".js-next_third", ".js-popupCalc_fourth", ".js-popupCalc_second--fourth", 'faded', 'fadeOut', false);
});
"use strict";

//   Burger menu screen <= 768
var burger = document.querySelector('#burger');
var burgerMenu = document.querySelector('.burger-menu');

burger.onclick = function () {
  burger.classList.toggle('burger_active');
  burgerMenu.classList.toggle('is-active');
};

burgerMenu.onclick = function () {
  burger.classList.toggle('burger_active');
  burgerMenu.classList.toggle('is-active');
};
"use strict";

// Open Messenger button
var triggersButton = document.querySelector('.js-call-btn');
var messengerButtons = document.querySelectorAll('[name="messenger_bnt"]');

triggersButton.onclick = function () {
  messengerButtons.forEach(function (item) {
    item.classList.toggle('is-open');
  });
};

document.body.addEventListener('click', function (e) {
  if (e.target !== triggersButton && messengerButtons[0].classList.contains("is-open")) {
    messengerButtons.forEach(function (item) {
      return item.classList.remove('is-open');
    });
  } else {
    return;
  }
});
"use strict";

function bindModal(triggerSelector, modalSelector, closeSelector, animationOpen, animationClose) {
  var closeClickOverlay = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
  var triggers = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      modals = document.querySelectorAll('.popup');
  console.dir(modals);
  triggers.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      hideAllModals();
      handelOpenModal();
    });
  }); // Function close modal

  close.addEventListener('click', function (e) {
    modal.classList.add(animationClose);
    handelCloseModal(modal);
  });
  modal.addEventListener('click', function (e) {
    if (e.target === e.currentTarget && closeClickOverlay) {
      modal.classList.add(animationClose);
      handelCloseModal(modal);
    }
  });

  function handelCloseModal(modal) {
    document.body.style.overflow = "";
    modal.classList.remove('is-open');
    modal.classList.remove(animationOpen);
  } // Function hide all modal


  function hideAllModals() {
    modals.forEach(function (item) {
      console.log("скрываю");
      handelCloseModal(item);
    });
  } // Function open modal


  function handelOpenModal() {
    document.body.style.overflow = "hidden";
    modal.classList.add('is-open');
    modal.classList.add(animationOpen);
    modal.classList.remove(animationClose);
  }
}
"use strict";

var scrolling = function scrolling(upSelector) {
  // Add and remove upPage button
  var upElem = document.querySelector(upSelector);
  window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > document.documentElement.clientHeight) {
      upElem.classList.add("is-active", 'faded');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('faded', "is-active");
    }
  }); // Scrolling with requestAnimationFrame

  var links = document.querySelectorAll('[href^="#"]'),
      speed = 0.3;
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var widthTop = document.documentElement.scrollTop,
          hash = this.hash,
          toBlock = document.querySelector(hash).getBoundingClientRect().top,
          start = null;
      console.log(widthTop);
      console.log(toBlock);
      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        var progress = time - start,
            r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
};
"use strict";

var mask = function mask(selector) {
  var setCursorPosition = function setCursorPosition(pos, elem) {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  function createMask(event) {
    var matrix = '+38 (___) ___ __ __',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  var inputs = document.querySelectorAll(selector);
  inputs.forEach(function (input) {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};