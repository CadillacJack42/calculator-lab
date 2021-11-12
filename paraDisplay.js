const newDisplay = document.getElementById('display');

let count = 1;

export const paraDisplay = () => {
    if (count === 0 || count % 2 === 1){
        newDisplay.textContent += '(';
    } else {
        newDisplay.textContent += ')';
    }
    count++;
};

