//  for(let i = 1; i<21; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
//  }

// for (let  i = 10; i>0; i--){
//     console.log(i);
// }

// for(let i = 1; i<11; i++){
//     if(i % 2 === 0 ){
//         console.log(`${i} = even`);
//     }
//     else {
//         console.log(`${i} = odd`);
//     }
// }

// for (let i= 1; i < 11; i++){
//     console.log(`5 x ${i} = ${i * 5}`);
// }



// let count = 0;
// for(let i = 1; i < 16; i++){
//     if(i > 8){
//         count++;
//     }
// }
//     console.log(count);


// let password = prompt("Enter your Password");
// let pass = "xyz@123";
// if(pass === password){
//     console.log("login successfully");
// }
// else{
//     console.log("Wrong Password");
// }


// let user_password = "admin@123";
// for( let i = 0; i < 3; i++){
//     let password = prompt("Enter your password");
//     if(password === user_password){
//         console.log("login successfully");
//         break;
//     }
//     else{
//         if(i === 2){
//             console.log("ID is Locked");
//         }
//         else{
//             console.log("Wrong password");
//         }
//     }
// }


// let count = 0;
// while(true){
//     let input = prompt("enter a word, choose stop to end");
//     if( input === "yes"){
//         count++;
//     }
//     else if(input === "stop"){
//         break;
//     }
// }

// console.log(`${count} times yes is entered`);



// for( let i=1; i <=50; i++ ){
//     if( i % 7 === 0){
//         console.log(i);
//     }
// } 

// let sum = 0;
// for( let i = 1; i <=30; i++){
//     if( i % 2 !== 0){
//         sum += i;
//     }
// }
// console.log(sum);

// while(true){
//     let number = +prompt("Enter a number");
//     if(number % 2 === 0 ){
//         console.log("even number entered loop stopped");
//         break;
//     }
//     else{
//         console.log("odd number, try again")
//     }
// }


// let start = +prompt("Enter a starting number ");
// let end = +prompt("Enter a ending number ");

// if(start > end){
//     let temp = start;
//     start = end;
//     end = temp;
// }
// for(let i = start; i <= end; i++){
//     console.log(i);
// }



// let count = 0; 
// for( let i = 1; i<=20; i++){
//     if( i % 2 !== 0){
//         count++;
//         console.log(i);
//     }
//     if(count === 3){
//         break;
//     }
// }

// let count = 0;
// for( let i = 1; i <= 5; i++){
//     let number = parseInt(prompt("Enter a number"));
//     if(number > 0){
//         count++;
//     }
// }
// console.log("Positive number = ",count);

let age =  prompt("Enter the age");
if(age === null){
    console.error("you canceled it");
}


else{
    if(age.trim() === ""){
        console.error("please enter something");
    }
    age = number(age);
    else{
        if(isNaN(age)){
            console.error("please enter a number");
        }
        else{
            console.log(`your age is ${age}`);
        }
    }
}