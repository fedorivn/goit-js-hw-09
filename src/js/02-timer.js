// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";


// const datePickerEl = document.querySelector('#datetime-picker')
// const btnEl = document.querySelector('button[data-start]')
// const day = document.querySelector("[data-days]");
// const hour = document.querySelector("[data-hours]");
// const minute = document.querySelector("[data-minutes]");
// const second = document.querySelector("[data-seconds]");

// let timer = null

// function convertMs(ms) {
  
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;


//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);
//   return { days, hours, minutes, seconds };
// }


// function viewOfTimer({ days, hours, minutes, seconds }) {
// day.textContent = `${days}`;
// hour.textContent = `${hours}`;
// minute.textContent = `${minutes}`;
// second.textContent = `${seconds}`;
// }
// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }


// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
   
//     if(selectedDates[0] < new Date()) {
//       btnEl.disabled = true;
//       Notiflix.Notify.failure(`Please choose a date in the future`);
//       return;
//       } else  {
//       btnEl.disabled = false;
//     }
//     btnEl.addEventListener('click', () => {
//      timer = setInterval(() => {
//         const differenceInTime = selectedDates[0] - new Date();
//         if (differenceInTime < 1000) {
//           clearInterval(timer);
//         }
//         const result = convertMs(differenceInTime);
//         viewOfTimer(result);
//       }, 1000);
//     });
//   },
// };
// flatpickr (input, options);


import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

  const input =  document.querySelector('#datetime-picker')
  const btnEl = document.querySelector('button[data-start]')
  const day = document.querySelector('[data-days]')
  const hour = document.querySelector('[data-hours]')
  const min = document.querySelector('[data-minutes]')
  const sec = document.querySelector('[data-seconds]')

let intervalId = null;
btnEl.disabled = false;

function viewOfTimer({ days, hours, minutes, seconds }) {
day.textContent = `${days}`;
hour.textContent = `${hours}`;
min.textContent = `${minutes}`;
sec.textContent = `${seconds}`;
}
function remainingTime(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = remainingTime(Math.floor(ms / day));
  const hours = remainingTime(Math.floor((ms % day) / hour));
  const minutes = remainingTime(Math.floor(((ms % day) % hour) / minute));
  const seconds = remainingTime(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if(selectedDates[0] < new Date()) {
      btnEl.disabled = true;
      Notiflix.Notify.failure("Please choose a date in the future");
      return;
      }
    if (selectedDates[0] > new Date()) {
      btnEl.disabled = false;
    }
    btnEl.addEventListener('click', () => {
      intervalId = setInterval(() => {
        const differenceInTime = selectedDates[0] - new Date();
        if (differenceInTime < 1000) {
          clearInterval(intervalId);
        }
        const result = convertMs(differenceInTime);
        viewOfTimer(result);
      }, 1000);
    });
  },
};
flatpickr (input, options);