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
        square.style.backgroundColor = '#c17ee0';
    });
});


const btn = document.querySelector("#btn");
const btnClick = btn.addEventListener("click", () => {
    let num = 0;
    while (num < 1 || num > 100 || isNaN(num)) {
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
                    newDiv.style.backgroundColor = '#c17ee0';
                });
            };
        };
        const circle = document.querySelector('#color-picker')
        const colorPicker = document.querySelector('#colorPicker')
        circle.addEventListener('click', () => {
            let a = colorPicker.click()
        })

        colorPicker.addEventListener('input', (e) => {
            const customText = document.querySelector('.custom-color')
            const currentColor = e.target.value;
            circle.style.backgroundColor = currentColor;
            customText.style.color = currentColor;

            squares.forEach(square => {
                square.addEventListener("mouseover", () => {
                square.style.backgroundColor = currentColor;
                });
            });
        })
    };
});

const rgbBtn = document.querySelector('#rgb-btn')
const rgbBtnClick = rgbBtn.addEventListener('click', () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
        square.style.backgroundColor = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
        });
    });
})

const eraseBtn = document.querySelector('#erase-btn')
const eraseBtnClick = eraseBtn.addEventListener('click', () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
        square.style.backgroundColor = 'white';
        });
    });
})

// const pickerBtn = document.querySelector('#color-btn')
// const pickerBtnClick = pickerBtn.addEventListener('click', () => {
//     const color = document.querySelector('#colorPicker')
//     const squares = document.querySelectorAll(".square");
//     let currentColor = color.value
//     color.addEventListener('input', (e) => {
//         currentColor = e.target.value; 
//     });
//     squares.forEach(square => {
//         square.addEventListener("mouseover", () => {
//         square.style.backgroundColor = currentColor;
//         });
//     });
// })

const circle = document.querySelector('#color-picker')
const colorPicker = document.querySelector('#colorPicker')
circle.addEventListener('click', () => {
    let a = colorPicker.click()
})

colorPicker.addEventListener('input', (e) => {
    const customText = document.querySelector('.custom-color')
    const currentColor = e.target.value;
    circle.style.backgroundColor = currentColor;
    customText.style.color = currentColor;

    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
        square.style.backgroundColor = currentColor;
        });
    });
})