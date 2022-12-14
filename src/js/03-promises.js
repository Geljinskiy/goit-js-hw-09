import { Notify } from 'notiflix/build/notiflix-notify-aio';

const amount = document.querySelector('input[name=amount');
const firstDelay = document.querySelector('input[name=delay]');
const delay = document.querySelector('input[name=step]');
const submitBtn = document.querySelector('button[type=submit]');

submitBtn.addEventListener('click', onSubmit);

function onSubmit(ev) {
  ev.preventDefault();

  for (let i = 0; i < Number(amount.value); i += 1) {
    const innerDelay = i * Number(delay.value) + Number(firstDelay.value);
    createPromise(i + 1, innerDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
