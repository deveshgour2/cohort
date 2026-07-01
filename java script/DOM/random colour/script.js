let div = document.querySelector("#div");
let btn = document.querySelector("#button");
let h1 = document.querySelector("h1");
let arr = [
    {
        team: "Chennai super Kings",
        jerseycolour: "Yellow",
        captain: "Ruturaj",
    },
    {
        team: "Mumbai indians",
        jerseycolour: "Blue",
        captain: "Rohit",
    },
    {
        team: "Royal challenger Banglore",
        jerseycolour: "Red",
        captain: "Rajat",
    },
    {
        team: "Punjab Kings",
        jerseycolour: "Red",
        captain: "Shreyas",
    }
]

btn.addEventListener("click",function(){
    let winner = Math.floor(Math.random()* arr.length);
    div.style.backgroundColor = `${arr[winner].jerseycolour}`
   h1.innerHTML = `${arr[winner].team} <br>
                   ${arr[winner].captain}`;
})