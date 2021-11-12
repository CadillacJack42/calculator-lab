//  import display
import { display } from './display.js';
import { clear } from './clearDisplay.js';
import { computator } from './computator.js';
import { paraDisplay } from './paraDisplay.js';

// Grab all numbered buttons
// console.log(document.getElementById('btn-0').innerText);
const btn0 = document.getElementById('btn-0');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');
const btn7 = document.getElementById('btn-7');
const btn8 = document.getElementById('btn-8');
const btn9 = document.getElementById('btn-9');

//  Grab all operator buttons

const addBtn = document.getElementById('btn-add');
const subBtn = document.getElementById('btn-sub');
const mulBtn = document.getElementById('btn-mul');
const divBtn = document.getElementById('btn-div');

//  Grab other buttons

const equalBtn = document.getElementById('btn-equal');
const modBtn = document.getElementById('btn-mod');
const delBtn = document.getElementById('btn-del');
const paraBtn = document.getElementById('btn-para');
const deciBtn = document.getElementById('btn-decimal');


btn0.addEventListener('click', () => {
  display(btn0.innerText);
});

btn1.addEventListener('click', () => {
  display(btn1.innerText);
});

btn2.addEventListener('click', () => {
  display(btn2.innerText);
});

btn3.addEventListener('click', () => {
  display(btn3.innerText);
});

btn4.addEventListener('click', () => {
  display(btn4.innerText);
});

btn5.addEventListener('click', () => {
  display(btn5.innerText);
});

btn6.addEventListener('click', () => {
  display(btn6.innerText);
});

btn7.addEventListener('click', () => {
  display(btn7.innerText);
});

btn8.addEventListener('click', () => {
  display(btn8.innerText);
});

btn9.addEventListener('click', () => {
  display(btn9.innerText);
});

addBtn.addEventListener('click', () => {
  display(addBtn.innerText);
});

subBtn.addEventListener('click', () => {
  display(subBtn.innerText);
});

mulBtn.addEventListener('click', () => {
  display(mulBtn.innerText);
});

divBtn.addEventListener('click', () => {
  display(divBtn.innerText);
});

modBtn.addEventListener('click', () => {
  display(modBtn.innerText);
});

delBtn.addEventListener('click', () => {
  clear();
});

paraBtn.addEventListener('click', () => {
  paraDisplay();
});

deciBtn.addEventListener('click', () => {
  display(deciBtn.innerText);
});

equalBtn.addEventListener('click', () => {
  computator();
});




