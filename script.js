const grid = document.querySelector(".grid");
for (let i=0; i<256; i++) {
    const currentDiv = document.createElement("div");
    currentDiv.textContent = `${i}`;
    currentDiv.height = 10;
    grid.appendChild(currentDiv);
}