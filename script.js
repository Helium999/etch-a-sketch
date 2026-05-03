const container = document.querySelector('.container')

for(let i=1; i<1025; i++) {
    const div = document.createElement('div')
    div.setAttribute("class", "box")
    container.append(div)
}
