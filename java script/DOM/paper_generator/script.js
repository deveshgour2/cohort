var main = document.querySelector("main")
var btn = document.querySelector("button")

btn.addEventListener("click",()=>{
    let div = document.createElement("div")
    
    let x = Math.random() * 100
    let y = Math.random() * 100
    let rot = Math.random() * 360
    let c1 = Math.floor(Math.random() * 256)
    let c2 = Math.floor(Math.random() * 256)
    let c3 = Math.floor(Math.random() * 256)

    div.style.height = "100px"
    div.style.width = "100px"
    div.style.position = "absolute"
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`

      main.appendChild(div)

    div.style.top = x + "%"
    div.style.left = y + "%"
    div.style.rotate = rot + "deg"
})

  