// Grid creation 

const grid = document.querySelector(".grid");

function createGrid(rowsAndCols) {
    if (rowsAndCols > 48) {
        rowsAndCols = 48;
    };

    if (rowsAndCols < 1) {
        rowsAndCols = 1;
    };
    
    const gridSize = rowsAndCols;
    grid.innerHTML="";

    for (let i=0; i<(gridSize * gridSize); i++) {
        const currentDiv = document.createElement("div");
        grid.appendChild(currentDiv);
    };

    grid.style.gridTemplateColumns = `repeat(${rowsAndCols}, auto`;
    grid.style.gridTemplateRows = `repeat(${rowsAndCols}, auto`;

    makeGridColorable(grid);    
};

function makeGridColorable(grid) {
    let gridList = grid.childNodes;
    gridList.forEach(box => box.addEventListener("mouseover", () =>
    box.classList.add("colored")));
    return
};

createGrid(16);

const resizeButton = document.querySelector("#size-prompt");
resizeButton.addEventListener("click", () => createGrid(prompt("How many rows/columns? (between 1-48)")));

// Resetting grid colors

function resetGridColor(grid) {
    gridList = grid.childNodes;
    gridList.forEach(box => box.classList.remove("colored"));
};

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => resetGridColor(grid));


