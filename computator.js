//  import operators
// import { add, sub, multiply, divide } from './utils.js';

//  grab DOM elements
const display = document.getElementById('display');

export const computator = () => {

    // console.log(eval(display.textContent));

    display.textContent = eval(display.textContent);
    
};