//  Import DOM element to update
const newDisplay = document.getElementById('display');


export const display = (arg) => {
    //  Take in  newDisplay.innerText and display DIV update
    newDisplay.textContent += arg;
};