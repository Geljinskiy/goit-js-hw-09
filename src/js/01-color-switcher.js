import getRandomHexColor from './randomColor';
('./randomColor');

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

stopBtn.setAttribute('disabled', '');

startBtn.addEventListener('click', () => {
  if (!startBtn.hasAttribute('disabled')) {
    startBtn.setAttribute('disabled', '');
    stopBtn.removeAttribute('disabled');
    timerColorChange = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
});

stopBtn.addEventListener('click', () => {
  stopBtn.setAttribute('disabled', '');
  startBtn.removeAttribute('disabled');
  clearInterval(timerColorChange);
});

const fullSize = document.querySelector('.full-size');
fullSize.style.height = window.innerHeight;
