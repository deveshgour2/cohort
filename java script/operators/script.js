// let a = 10;
// let b = 3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// let a = 5;
// console.log(a += 3);
// console.log(a -= 3);
// console.log(a *= 3);
// console.log(a /= 3);
// console.log(a %= 3);

// let count = 5;
// console.log(count++);
// console.log(count); 
// console.log(--count); 


// let a = 10;
// if(a>5 && a<20 && a === 10){
//     console.log("true");
// }

// let age = prompt("enter age");
// if(age > 18)console.log( "adult");
// else console.log( "Minor");

// let marks = prompt("Enter the marks");
// if(marks <= 49 && marks >= 0) console.log("Fail");
// else if(marks <= 74 && marks >= 50 ) console.log("Grade C")
// else if(marks <= 89 && marks >= 75 ) console.log("Grade B")
// else console.log("Grade A");


// let city = prompt("enter city name");
// if(city === "indore"){
//     console.log("Madhya pradesh");
// }
// else if (city === "delhi"){
//     console.log("capital of India");
// }
// else{
//     console.log("Unknown City");
// }


    // let score = prompt("enter score");
    // (score >= 35)? console.log("Pass") : console.log("Fail")


// let age = prompt("Enter age");
// let country = prompt("Enter country");
// if(age >= 18 && country === "india"){
//     console.log("Eligible for vote");
// }
// else{
//     console.log("Not Eligible for vote");
// }

let choice = prompt(" Enter your number from 1-7");
switch(choice){
    case "1":
        console.log("Sunday");
        break;
    
    case "2":
        console.log("Monday");
        break;
    
    case "3":
        console.log("Tuesday");
        break;
    
    case "4":
        console.log("Wednesday");
        break;
    
    case "5":
        console.log("Thursday");
        break;
    
    case "6":
        console.log("Friday");
        break;
    
    case "7":
        console.log("Saturday");
        break;
    
    default:
        console.log("Invalid Choice");
}