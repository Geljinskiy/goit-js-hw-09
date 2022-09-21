import getRandomHexColor from './randomColor';
('./randomColor');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const fullSize = document.querySelector('.full-size');
fullSize.style.height = window.innerHeight;

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerId = null;

stopBtn.setAttribute('disabled', '');

startBtn.addEventListener('click', onStartBtnCLick);

stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnCLick() {
  if (!startBtn.hasAttribute('disabled')) {
    startBtn.setAttribute('disabled', '');
    stopBtn.removeAttribute('disabled');
    timerId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
}

function onStopBtnClick() {
  stopBtn.setAttribute('disabled', '');
  startBtn.removeAttribute('disabled');
  clearInterval(timerId);
}
