// Grid creation and resize

const grid = document.querySelector(".grid");

function createGrid(rowsAndCols) {
    if (rowsAndCols > 64) rowsAndCols = 64;    

    if (rowsAndCols < 1) rowsAndCols = 1;
    
    if (isNaN(rowsAndCols)) rowsAndCols = 16;

    const gridSize = rowsAndCols;
    grid.innerHTML="";

    for (let i=0; i<(gridSize * gridSize); i++) {
        const currentDiv = document.createElement("div");
        grid.appendChild(currentDiv);
    };

    grid.style.gridTemplateColumns = `repeat(${rowsAndCols}, auto`;
    grid.style.gridTemplateRows = `repeat(${rowsAndCols}, auto`;

    makeGridColorable(grid);
    updateSizeInfo(rowsAndCols);
};

function updateSizeInfo (size) {
    const para = document.querySelector("#size-info");
    para.textContent = `Current grid size is ${size}x${size}`;
}

function makeGridColorable(grid) {
    let gridList = grid.childNodes;
    gridList.forEach(box => box.addEventListener("mouseover", () =>
    box.classList.add("colored")));
  
};

createGrid(16);

const resizeButton = document.querySelector("#size-prompt");
resizeButton.addEventListener("click", () => createGrid(prompt("How many rows/columns? (between 1-64)")));

// Resetting grid colors

function resetGridColor(grid) {
    gridList = grid.childNodes;
    gridList.forEach(box => box.classList.remove("colored"));
};

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => resetGridColor(grid));


