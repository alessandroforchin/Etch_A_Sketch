const container = document.getElementById('container');
let gridContainer = document.getElementById('grid-container');
const resizeSection = document.createElement('div');
const sizeButton = document.createElement('button');
const resetButton = document.createElement('button');
const randomColorButton = document.createElement('button');
let singleSquareDiv;

container.appendChild(resizeSection);
resizeSection.appendChild(sizeButton);
resizeSection.appendChild(resetButton);
resizeSection.appendChild(randomColorButton);

sizeButton.innerText = 'Resize';
resetButton.innerText = 'Reset Grid';
randomColorButton.innerText = 'Random Color';

resizeSection.className = 'resize-section';
sizeButton.className = 'size-btn';
resetButton.className = 'reset-btn';
randomColorButton.className = 'random-color-btn';

function makeGrid(size) {
    gridContainer.style.setProperty('grid-template-rows', `repeat(${size}, ${(1 / size) * 600}px)`);
    gridContainer.style.setProperty('grid-template-columns', `repeat(${size}, ${(1 / size) * 650}px)`);

    for (let i = 0; i < (size * size); i++) {
        let singleSquareDiv = document.createElement('div');
        gridContainer.appendChild(singleSquareDiv);
        singleSquareDiv.className = 'square-div';
    }
}

makeGrid(16);

function resetGrid() {
    gridContainer.innerHTML = '';
    
    makeGrid(16);
}

function generateRandomColor() {
    let red = Math.floor(Math.random() * (255 + 1));
    let green = Math.floor(Math.random() * (255 + 1));
    let blue = Math.floor(Math.random() * (255 + 1));
    return `rgb(${red},${green},${blue})`;
}

sizeButton.addEventListener('click', () => {
    let size = prompt('Please, enter the number of pixel you want:');
    
    gridContainer.innerHTML = '';
    makeGrid(size);
})

resetButton.addEventListener('click', () => {
    resetGrid();
})

randomColorButton.addEventListener('click', () => {
    let cells = document.querySelectorAll('.square-div');
    cells.forEach(function(singleSquareDiv){
        singleSquareDiv.addEventListener('mouseover', () => {
            singleSquareDiv.style.backgroundColor = generateRandomColor();
        })
    })
})
