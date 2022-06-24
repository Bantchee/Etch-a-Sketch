// Get canvas
const canvas = document.querySelector('.canvas');
let rainbow = false;

// Function Updates canvas
function updateCanvas(gridSize) {
    depopulateCanvas();
    populateCanvas(gridSize);
    mouseOver();
    updateTitle(gridSize);
}

// Function populates canvas with pixels
// IN > OUT : Int > NOTHING
function populateCanvas(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        const column = document.createElement('div');
        column.classList.add("column");
        for(let j = 0; j < gridSize; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add("pixel");
            column.appendChild(pixel);
        }
        canvas.appendChild(column);
    }
}

// Function removes pixels from canvas
function depopulateCanvas() {
    const columns = canvas.querySelectorAll('.column');
    columns.forEach((column) => {
        canvas.removeChild(column);
    });
}

// Add mouse over event to each pixel
function mouseOver() {
    const pixels = document.querySelectorAll('.pixel');
    // Adds brushColor to the background-color of pixels when mousing over
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', event => {
            if (rainbow) {
                event.target.style.cssText = `background-color: ${randomHexColor()};`;
            } else {
                event.target.style.cssText = `background-color: ${brushColor};`;
            }
        })
    });
}

// Function updates the title of header section
function updateTitle(gridSize) {
    const title = document.querySelector('.title');
    title.textContent = `Etch-a-Sketch : ${gridSize} x ${gridSize}`;
}

// Function generates a random between 0 and max
// IN > OUT: Int > Int
// call math.random()
// multiple math.random() by max
// return result
function randomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

// Function generates a random array of ints representing rgb color
function randomRgbColor() {
    let r = randomInt(255);
    let g = randomInt(255);
    let b = randomInt(255);
    return [r, g, b];
}

// Generate random hex color value
function randomHexColor() {
    let [r,g,b] = randomRgbColor();

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    return "#" + hr + hg + hb;
}

updateCanvas(16);

// Variable declarations
const btns = document.querySelectorAll('button');

const paintBtn = document.querySelector('.paint');
const randomColorBtn = document.querySelector('.random-color');
const rainbowBtn = document.querySelector('.rainbow');
const eraseBtn = document.querySelector('.erase');
const clearBtn = document.querySelector('.clear');
const changeGridSizeBtn = document.querySelector('.change-grid-size');

let brushColor = "black";

// Sets brush color to black
paintBtn.addEventListener('click', () => {
    rainbow=false;
    brushColor="black";
});

// Sets brush color to random color
randomColorBtn.addEventListener('click', () => {
    rainbow=false;
    brushColor=randomHexColor();
});

// Add random color to pixel
rainbowBtn.addEventListener('click', () => rainbow=true);

// Sets brush color to white color
eraseBtn.addEventListener('click', () => {
    rainbow=false;
    brushColor="white"
});

// Clears canvas by setting background-color of pixels to white 
clearBtn.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach(pixel => {
        pixel.style.cssText = "background-color: white;"
    })
});

// Changes grid size
changeGridSizeBtn.addEventListener('click', () => {
    let gridSize = prompt("Enter a number between 1 and 64");
    (gridSize > 0) && (gridSize <= 65) ? updateCanvas(gridSize) : alert("Number too big or too small.")
});