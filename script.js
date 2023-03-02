const grid = document.querySelector(".grid");
for (let i=0; i<256; i++) {
    const currentDiv = document.createElement("div");
    grid.appendChild(currentDiv);
}

const gridList = grid.childNodes

gridList.forEach(box => box.addEventListener("mouseover", () =>
box.classList.add("colored")));