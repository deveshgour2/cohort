let h4 = document.querySelector("h4");
let inc = document.getElementById("increase");
let dec = document.getElementById("decrease");
let reset = document.getElementById("reset");
let counter = 0;
inc.addEventListener("click",function(){
    counter++;
    h4.innerHTML = counter;
})

dec.addEventListener("click",function(){
    counter--;
    h4.innerHTML = counter;
})

reset.addEventListener("click",function(){
    counter = 0;
    h4.innerHTML = counter;
})