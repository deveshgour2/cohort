let img  = document.querySelector("img")
let body = document.body
body.addEventListener("mousemove",function(dets){
    img.style.left = dets.x + "px"
    img.style.top = dets.y + "px"
})