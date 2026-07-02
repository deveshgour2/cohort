let btn = document.querySelector("button")
let h4 = document.querySelector("h4")
let flag = 0

btn.addEventListener("click",()=>{
   if(flag == 0){
     h4.innerHTML = "Friend Added!";
    btn.innerHTML = "Remove Friend";
    h4.style.color = "green";
    flag = 1;
   }
   else{
    h4.innerHTML = "Friend Removed!";
    btn.innerHTML = "Add Friend";
    h4.style.color = "red";
    flag = 0;
   }
})
