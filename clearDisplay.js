// Grab dispaly from DOM and clear input
const clearDisplay = document.getElementById('display');

//  Set display input to blank string
export const clear = () => {
    clearDisplay.textContent = '';
};