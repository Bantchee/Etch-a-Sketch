// Get canvas
const canvas = document.querySelector('.canvas');

// Populates canvas with pixels
for(let i = 0; i < 16; i++) {
    const column = document.createElement('div');
    column.classList.add("column")
    for(let j = 0; j < 16; j++) {
        const pixel = document.createElement('div');
        pixel.classList.add("pixel");
        column.appendChild(pixel)
    }
    canvas.appendChild(column)
}

// Variable declarations
const pixels = document.querySelectorAll('.pixel');

const clearBtn = document.querySelector('.clear');
const paintBtn = document.querySelector('.paint');
const rainbowBtn = document.querySelector('.rainbow');
const eraseBtn = document.querySelector('.erase');
const btns = document.querySelectorAll('button');

let brushColor = "black";

// Adds brushColor to the background-color of pixels when mousing over
pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', event => {
        event.target.style.cssText = `background-color: ${brushColor};`;
    })
});

// Clears canvas by setting background-color of pixels to white 
clearBtn.addEventListener('click', () => {
    pixels.forEach(pixel => {
        pixel.style.cssText = "background-color: white;"
    })
});

// Turns brush color to black
paintBtn.addEventListener('click', () => brushColor="black");

// Turns brush color to white
eraseBtn.addEventListener('click', () => brushColor="white");

// adds button-selected class to clicked button
// removes button-selected class from other button
/* tns.forEach(button => {
    button.addEventListener('click', () => {
        btns.
        button.classList.add(button-selected))
}) */
