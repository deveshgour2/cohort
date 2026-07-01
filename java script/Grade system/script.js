function grade(marks){
    if( marks >= 32 && marks <=0) return "fail";
    if( marks >= 33 && marks <=49) return "E";
    if( marks >= 50 && marks <=59) return "D";
    if( marks >= 60 && marks <=69) return "C";
    if( marks >= 70 && marks <=79) return "B";
    return "A";
}

console.log(grade(85));