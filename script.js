const grid = document.querySelector(".grid");
for (let i=0; i<256; i++) {
    const currentDiv = document.createElement("div");
    // currentDiv.textContent = `${i}`;
    // currentDiv.height = 10;
    grid.appendChild(currentDiv);
}

const gridList = grid.childNodes

gridList.forEach(box => box.addEventListener("mousedown", () =>
box.classList.add("colored")));

function resetGrid() {
    gridList.forEach(box => box.classList.remove("colored"))
};

const resetButton = document.querySelector("#reset")
resetButton.addEventListener("click", () => resetGrid())