const container = document.querySelector('.container')

for(let i=1; i<1025; i++) {
    const div = document.createElement('div')
    div.setAttribute("class", "box")
    container.append(div)
}


function changeCanvasSize() {
    container.innerHTML = ""
    let newSize;
    let message = "Enter number of squares per side of new grid: "
    do {
        newSize = Number(prompt(`${message}`));

        if (!Number.isInteger(newSize) || newSize < 1 || newSize > 100) {
            message = "Invalid input. Enter a number ≤ 100: ";
        }

    } while (!Number.isInteger(newSize) || newSize < 1 || newSize > 100);

    for(let i=0; i<(newSize*newSize); i++) {
    const div = document.createElement('div')
    div.setAttribute("class", "box")
    container.append(div)
    }

    const boxes = document.querySelectorAll(".box")
    let newWidth = container.clientWidth/newSize
    boxes.forEach(box => {
        box.style.width = `${newWidth}px`
        box.style.height = `${newWidth}px`
    })
}


const sizeChangeBtn = document.querySelector("#sizeChangeBtn")
sizeChangeBtn.addEventListener('click', () => {
    changeCanvasSize()
})


container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("box")) {
        e.target.style.backgroundColor = "black";
    }
});

