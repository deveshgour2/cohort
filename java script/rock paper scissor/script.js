function rps(user , computer){
    if(user === computer) return "draw";
    if( user === "rock" && computer === "scissor") return "user";
    if( user === "paper" && computer === "rock") return "user";
    if( user === "scissor" && computer === "paper") return "user";

    return "computer";
}

console.log(rps("paper", "scissor"));