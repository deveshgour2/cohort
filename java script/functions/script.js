// function add( a, b){
//     return a+b;
// }

// console.log(add(2,3));

// function evenodd(val){
//     if(val % 2 === 0) return "even";
//     return "odd";
// }
// let val = prompt("Enter a Number");
// console.log(evenodd(val));

// function LargestOfThree(a, b, c){
//     if(a>=b && a>=c) return `${a} is greater`;
//     if(b>=a && b>=c) return `${b} is greater`;
//     return `${c} is greater`;
// }
// console.log(LargestOfThree(43,54,23));


// function ReverseString(val){
//     let reversed = ""
//     for(let i = val.length-1 ; i >=0 ; i-- ){
//         reversed = reversed + val[i];
//     }
//     return reversed;
// }

// let val = prompt("enter a string");
// console.log(ReverseString(val));


// function Factorial( num ){
//      let fact = 1;
//     for(let i = 1 ; i<= num ; i++){
//         fact = fact * i;
//     }
//       return fact;
// }

// console.log(Factorial(5));

// function square(num){
//     return  num ** 2;
    
// }
// console.log(square(4));

// function CelsiusToFahrenheit(degree){
//       return (degree * 9/5) + 32;
 
// }
// console.log(CelsiusToFahrenheit(34));

// function vowelcount( string ){
//     let count = 0;
//     for(let i = 0 ; i < string.length; i++){
//         if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u'){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(vowelcount("javascript"));


// function pallindrome( string ){
//     let reverse = "";
//     for(let i = string.length-1; i >= 0 ; i--){
//         reverse = reverse + string[i];
//     }
//     if(reverse === string ) return  true ;
//     else return false;
// }
// console.log(pallindrome("madam"));


// function fibonacci( term ){
//     let a= 0;
//     let b= 1;
//     for(let i = 0; i < term; i++){
//          console.log(a);
//         let c = a+b;
//         a = b;
//         b = c;
//     }
// }

// fibonacci(8);

// alert("hello from sheryians");
// console.log("If HTML is skeleton, CSS is clothes — what is JS")


// function number(num){
//     i = 1;
//     while(i <= num){
//         console.log(i);
//         i++;
//     }
// }
// number(20);

// function Alphabet(){
//     for(let i = 65; i<=90; i++){
//         console.log(String.fromCharCode(i));
//     }
// }
// Alphabet();

// function reverse( num ){
//     let rev = 0
//     while(num>0){
        
//     let digit = num%10;
//     rev =  rev * 10 + digit;
//     num = Math.floor(num/ 10);
//     }
//     return rev;
// }
// console.log(reverse(2341));



// function prime( num ){
//     if(num <= 1){
//         return false;
//     }
//     for (let i = 2; i < num; i++){
//         if(num % i === 0){
//             return false;
//         }
//         return true;
//     }
// }
// console.log(prime(19));

// function sayhello(){
//     console.log("Hello world");
// }

// sayhello();

// function add(a, b){
//     return a+b;
// }
// console.log(add(2,4));

// function hotel(name = "guest"){
//     console.log(`hi ${name}`);
// }
// hotel("devesh");

// function add(...num){
//     let sum = 0;
//   for(let value of num){
//     sum = sum + value ;
//   }
//   console.log(sum);
// }
// console.log(add(2,5,4,6,2));

// (function(){
//     console.log("I run instantly");
// }())

// function outer(){
//     let wish = "hello";
//     function inner(){
//         console.log(wish);
//     }
//     inner();
// }
// outer();

// let arr = ["apple", "Mango", "Banana", "Guava", "Orange"];
// arr.shift();
// console.log(arr);

// let arr =  ["apple", "Mango", "Banana", "Guava", "Orange"];
// for(let value of arr){
//     console.log(value);
// }

// let person = {
//     name: "Devesh",
//     age : 21,
//     city: "Indore",
// };
// console.log(person);

// function greet(){
//     console.log("hello");
// }
// setTimeout(greet, 2000);

// function inner(outer){
//     outer();
//     outer();
// }
// inner(function (){
//     console.log("hello");
// })
// inner();

// function add( x, y){
//     return x + y;
// }
// console.log(add(2,4));

// let counter = 0;
// function impure(num){
//        counter++;
//     return counter + num;
// }

// console.log(impure(4));
// console.log(impure(4));

    // let object = {
    //     name: "Devesh",
    //     age: 21,
    //     city: "Indore",
    // };

    // function destruct({name, age, city}){
    //     console.log(name);
    //     console.log(age);
    //     console.log(city);
    // }

    // destruct(object);

// function greet (){
//     return this;
// }
// console.log(greet());

// let arr = [1,2,3,4,5];
// let newarr = arr.map(function(value){
//     return value * value;
// })
// console.log(newarr);

// let arr = [2,4,5,3,6,8,14];
// let newarr = arr.filter(function(val){
//     return val%2 === 0;
// })
// console.log(newarr);

// let arr = [1000, 2000 , 3000];
// let newarr = arr.reduce((total, num ) => total + num);
// console.log(newarr);

// let arr = ["raj", "shyam","ram","shyam","gopal"];
// let newarr = arr.some((val) => val.length > 3);
// console.log(newarr);


// let arr = ["raj", "shyam","ram","shyam","gopal"];
// let newarr = arr.every((val) => val.length > 3);
// console.log(newarr);

// let user = {
//     name: "Devesh",
//     age: 21,
// }
// Object.freeze(user);
// user.city = "Indore";
// console.log(user);


// let user = {
//     name: "Devesh",
//     age: 21,
// }
// Object.seal(user);
// user.name = "Indore";
// console.log(user);

// let user = {
//     name: "Devesh",
//     address:{
//         city: "Indore",
//     },
// }
// console.log(user.address.city);


// let fact = 1;
// let factorial = (num) =>{
//     for( let i = 1; i <= num; i++){
//         fact = fact * i;
//     }
//    return fact;
// }
// console.log(factorial(5));

// let a = 0;
// let b = 1;
// let c = 0;
// let fibo = (term) => {
//     for( let i = 0 ; i < term ; i++){
//         console.log(a);
//         c = a+b;
//         a = b;
//         b = c;
       
//     }
// }
// fibo(10);

// let arr = ["raj", "shyam","ram","Devesh","gopal"];
// arr.pop();
// arr.shift();
// console.log(arr);

// let arr = ["raj", "shyam","ram","shyam","gopal"];
// arr.push("hemant");
// arr.unshift("Devesh");
// console.log(arr);

// let arr = ["raj", "shyam","ram","shyam","gopal"];
// arr.reverse();
// console.log(arr);

// let arr = [23, 45, 32, 122, 43];
// let max = arr[0];
// for(let i = 0; i < arr.length; i++){
    
//     if( arr[i] > max){
//         max = arr[i];
//     }
// }
//  console.log(max);
   
// let arr = [23, 45, 32, 122, 43];
// let min = arr[0];
// for(let i = 0; i < arr.length; i++){
    
//     if( arr[i] < min){
//         min = arr[i];
//     }
// }
//  console.log(min);
   
// let arr = [23, 45, 32, 122, 43];
// let sum = arr.reduce((acc , num) => {
//     return acc + num;
// }, 0)
// console.log(sum);


  
// let arr = [23, 45, 32, 122, 43];
// let sum = arr.reduce((acc , num) => {
//     return acc + num;
// }, 0)
// console.log(sum / arr.length);


// let arr = [23, 45, 32, 122,244, 64,44, 54, 86, 43];
// let count = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0 ){
//          count++;
//     }
// }
// console.log(count);


// let arr = [23, 45, 32, 122, 244, 64,44, 54, 86, 43];
// let newarr = arr.find((val) => {
//     return val > 50;
// }) 
// console.log(newarr);

// let arr = [23, 45, 32, 122, 244, 64,44, 54, 86, 43];
// let newarr = arr.includes(56);
// console.log(newarr); 

// let arr = [23, 45, 32, 122, 244, 64,44, 54, 23, 86, 44];
// let newarr = [...new Set(arr)];
// console.log(newarr);

// let arr = [23, 45, 32, 122, 244, 64,44, 54, 23, 86, 44];
// arr.sort((a,b) => a-b);
// console.log(arr);


// let arr = [23, 45, 32, 122, 244, 64,44, 54, 23, 86, 44];
// arr.sort((a,b) => b-a);
// console.log(arr);

// let arr1 = [23, 45, 32, 122, 244, 64,44, 54, 23, 86, 44];
// let arr2 = [23, 45, 32, 122, 43];
// let newarr = [[...arr1] + [, ...arr2]];
// console.log(newarr);

// let arr3 = [...arr1];
// console.log(arr3);

// let arr = [23, 45, 32, 122, 43];
// let arr2 = arr.slice();
// console.log(arr2);


// let arr = [23, 45, 32, 122, 43];
// let [first, second, ...rest] = arr;
// console.log(first);
// console.log(second);
// console.log(...rest);

// let student = {
//     name: "Devesh",
//     age: 21,
//     city: "Indore",
// }
// student.course = "Btech";
// delete student.age;
// student.age = 23
// console.log(student["name"]);
// console.log(student["age"]);
// console.log(student["city"]);
// console.log(student.course);

// let student = {
//     name: "Devesh",
//     age: 21,
//     address:{
//         city: "Indore",
//     },
// }
// console.log(student.address.city);
// let greet = ({name, age}) =>{
//     console.log(name , age);
// }
// greet(student);


    let student = {
        name: "Devesh",
        age: 21,
        address:{
            city: "Indore",
        },
    }
    const obj = Object.entries(student);
    console.log(obj);
    let obj1 = Object.fromEntries(obj);
    console.log(obj1);