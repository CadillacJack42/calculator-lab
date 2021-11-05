// import functions and grab DOM elements
import { add, sub, multiply, divide } from './utils.js';
// Grab all elements that need to be manipulated
// All addition elements
const addNum1 = document.getElementById('add-num-1');
const addNum2 = document.getElementById('add-num-2');
const addButton = document.getElementById('add-button')
const addDisplay = document.getElementById('add-display')

// All subtraction elements
const subNum1 = document.getElementById('sub-num-1');
const subNum2 = document.getElementById('sub-num-2');
const subButton = document.getElementById('sub-button')
const subDisplay = document.getElementById('sub-display')

// All multiplication elements
const multiplyNum1 = document.getElementById('multiply-num-1');
const multiplyNum2 = document.getElementById('multiply-num-2');
const multiplyButton = document.getElementById('multiply-button')
const multiplyDisplay = document.getElementById('multiply-display')

// All division elements
const divideNum1 = document.getElementById('divide-num-1');
const divideNum2 = document.getElementById('divide-num-2');
const divideButton = document.getElementById('divide-button');
const divideDisplay = document.getElementById('divide-display');


// set event listeners 
addButton.addEventListener( 'click', () => {
  addDisplay.textContent = add(+addNum1.value, +addNum2.value)
});

subButton.addEventListener( 'click', () => {
  subDisplay.textContent = sub(+subNum1.value, +subNum2.value)
});

multiplyButton.addEventListener( 'click', () => {
  multiplyDisplay.textContent = multiply(+multiplyNum1.value, +multiplyNum2.value)
});

divideButton.addEventListener( 'click', () => {
  divideDisplay.textContent = divide(+divideNum1.value, +divideNum2.value)
});