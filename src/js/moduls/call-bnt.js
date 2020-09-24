// Open Messenger button

const triggersButton = document.querySelector('.js-call-btn');
const messengerButtons = document.querySelectorAll('[name="messenger_bnt"]');

triggersButton.onclick = function () {
  messengerButtons.forEach(item => {
    item.classList.toggle('is-open');
  });
};

document.body.addEventListener('click', e => {
  if (e.target !== triggersButton && messengerButtons[0].classList.contains("is-open")) {
    messengerButtons.forEach(item => item.classList.remove('is-open'));
  }
  else {
      return;
  }
});
