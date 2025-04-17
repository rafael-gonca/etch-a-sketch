for (let i = 1; i <= 16; i++) {
    const container = document.querySelector(".container")
    const newContainer = document.createElement("div")
    newContainer.classList.add("newContainer")
    container.appendChild(newContainer)
    for (let j = 1; j <= 16; j++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("square");
        newContainer.appendChild(newDiv);
    };
};

const squares = document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = 'black';
    });
});

const btn = document.querySelector("#btn");
const btnClick = btn.addEventListener("click", () => {
    let num = 0;
    while (num < 2 || num > 100) {
        num = parseInt(prompt("Enter the number of squares per side (up to 100):", 16));
        const container = document.querySelector(".container");
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        for (let i = 1; i <= num; i++) {
            const container = document.querySelector(".container")
            const newContainer = document.createElement("div")
            newContainer.classList.add("newContainer")
            container.appendChild(newContainer)
            for (let j = 1; j <= num; j++) {
                const newDiv = document.createElement("div");
                newDiv.classList.add("square");
                newContainer.appendChild(newDiv);
                const squareSize = 480 / num;
                newDiv.style.width = `${squareSize}px`;
                newDiv.style.height = `${squareSize}px`;
                newDiv.addEventListener("mouseover", () => {
                    newDiv.style.backgroundColor = 'black';
                });
            };
        };
        
    };
});