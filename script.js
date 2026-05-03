const container = document.querySelector('.container')

for(let i=1; i<1025; i++) {
    const div = document.createElement('div')
    div.setAttribute("class", "box")
    container.append(div)
}

const boxes = document.querySelectorAll(".box")
boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "black"
    })
})