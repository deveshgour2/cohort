let p = document.querySelector("p")
const text = p.innerText
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?`~"

let iteration = 0
function random(){
    const str = text.split("").map((char, index) => {
        if(index < iteration){
            return char
        }
        return characters.split("")[Math.floor(Math.random() * characters.length)]
    }).join("")
    
    p.innerText = str 

    iteration += 0.6
   }

   setInterval(random, 100)