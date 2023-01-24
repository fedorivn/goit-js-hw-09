import Notiflix, {Notify} from 'notiflix';
const formEl = document.querySelector('.form');
const formDelay = document.querySelector('[name="delay"]');
const formStep = document.querySelector('[name="step"]');
const formAmount = document.querySelector('[name="amount"]');

let promiseDelay = 0
let amount = 0;
let step = 0;
let firstStep = 0;

// formEl.addEventListener('submit', onBtnClick)

// function onBtnClick(event){
//   event.preventDefault()

// amount =+formAmount.value;
// step = +formStep.value;
// firstStep = +formDelay.value;

// console.log(' -->', amount, step, firstStep  );



// for (let i=0; i < amount; i++){
  // promiseDelay = step * i + firstStep 

//   createPromise( i+1,  promiseDelay )
//   .then(data => Notiflix.Notify.success(data))
//   .catch(error => Notiflix.Notify.failure(error))
// }
// }



// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       if (shouldResolve) {
//        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
//       } else {
//        reject(`❌ Rejected promise ${position} in ${delay}ms`)
//       }
//     }, delay)
//   })
 
// }
import Notiflix, {Notify} from 'notiflix';

const formEl = document.querySelector('.form');

const formDelay = document.querySelector('[name="delay"]');

const formStep = document.querySelector('[name="step"]');

const formAmount = document.querySelector('[name="amount"]');



let promiseDelay = 0

let amount = 0;

let step = 0;

let firstStep = 0;



formEl.addEventListener('submit', onBtnClick)



function onBtnClick(event){

  event.preventDefault()



amount = +formAmount.value;

step = +formStep.value;

firstStep = +formDelay.value;



console.log(' -->', amount, step, firstStep  );







for (let i=0; i < amount; i++){

  promiseDelay = step * i + firstStep 

  

  createPromise( i+1,  promiseDelay )

  .then(data => Notiflix.Notify.success(data))

  .catch(error => Notiflix.Notify.failure(error))

}

}







function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject)=>{

    setTimeout(()=>{

      if (shouldResolve) {

       resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)

      } else {

       reject(`❌ Rejected promise ${position} in ${delay}ms`)

      }

    }, delay)

  })

 

}