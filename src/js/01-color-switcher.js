const startBtnEl = document.querySelector('[data-start]');
const stoptBtnEl = document.querySelector('[data-stop]');

let timerId = 0
console.log(' -->', stoptBtnEl );

stoptBtnEl.setAttribute('disabled', true);

startBtnEl.addEventListener('click',(evt) => {
    evt.preventDefault();
    evt.target.setAttribute('disabled', 'disabled');
    stoptBtnEl.removeAttribute('disabled', 'disabled')
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });
  

stoptBtnEl.addEventListener('click', (evt) => {
    clearInterval(timerId);
    startBtnEl.removeAttribute('disabled', 'disabled')
    evt.target.setAttribute('disabled', 'disabled');
  });


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
