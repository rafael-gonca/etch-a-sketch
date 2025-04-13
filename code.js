for (let i = 1; i <= 16; i++) {
    const container = document.querySelector(".container")
    const newContainer = document.createElement("div")
    newContainer.classList.add("newContainer")
    container.appendChild(newContainer)
    for (let i = 1; i <= 16; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("square");
        newContainer.appendChild(newDiv);
    };
};

