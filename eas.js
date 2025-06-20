const container = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    container.appendChild(square);
}

container.addEventListener("mouseover", (e) => {
    e.target.classList.add("painted");
});