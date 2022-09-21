import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  minDate: 'today',

  onClose(selectedDates) {
    if (new Date() > selectedDates[0]) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    startBtn.removeAttribute('disabled');
    leftTime = selectedDates[0] - new Date();
  },
};

const timePicker = document.querySelector('#datetime-picker');
flatpickr(timePicker, options);

const startBtn = document.querySelector('[data-start]');

const dateFields = {
  daysField: document.querySelector('[data-days'),
  hoursField: document.querySelector('[data-hours'),
  minutesField: document.querySelector('[data-minutes'),
  secondsField: document.querySelector('[data-seconds'),
};
const arrOfFieldsValue = Object.values(dateFields);

let leftTime = 0;
let clicked = false;

startBtn.setAttribute('disabled', '');

startBtn.addEventListener('click', startTimeCallback);

function startTimeCallback() {
  if (clicked) {
    return;
  }
  clicked = true;
  const timeInterval = setInterval(() => {
    if (leftTime < 1000) {
      clearInterval(timeInterval);
      clicked = false;
      startBtn.setAttribute('disabled', '');
    }
    for (let i = 0; i < arrOfFieldsValue.length; i += 1) {
      arrOfFieldsValue[i].textContent = addLeadingZero(
        Object.values(convertMs(leftTime))[i]
      );
    }
    leftTime -= 1000;
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
