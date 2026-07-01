let main = document.querySelector("main")
let btn = document.querySelector("button")

let quotes = ["Prove them wrong.","Dream big. Start small.","Action over excuses.","Done is better than perfect.","Be here now.","No guts, no glory.","Know thyself.","This too shall pass."]

btn.addEventListener("click",()=>{

    let h1 = document.createElement("h1")
    let qts = Math.floor(Math.random() * quotes.length)
    h1.innerHTML = quotes[qts]

    let x = Math.random() * 100  // right position variable
    let y = Math.random() * 100  // left position variable
    let rot = Math.random() * 360 //rotate variable
    let scl = Math.random() * 3 //scale variable
    let c1 = Math.floor(Math.random() * 256)
    let c2 = Math.floor(Math.random() * 256)
    let c3 = Math.floor(Math.random() * 256)
    
    h1.style.position = "absolute"
    h1.style.top = x + "%"
    h1.style.left = y + "%"
    h1.style.rotate = rot + "deg"
    h1.style.scale = scl
    h1.style.color = `rgb(${c1},${c2},${c3})`
    main.appendChild(h1)
})