const container = document.querySelector(".container");
const button = document.querySelector("button");

generateGrid(16);

function generateGrid(dim) {
    dim = Math.min(dim, 100);

    container.innerHTML = '';

    for (let i = 0; i < dim * dim; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.style.flexBasis = (100/dim) + "%";
        container.appendChild(square);
    }
}

container.addEventListener("mouseover", (e) => {
    e.target.classList.add("painted");
});

button.addEventListener("click", () => {
    generateGrid(+prompt("What size grid would you like? (max 100)", "16"));
})