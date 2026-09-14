// let prm = new Promise(function(resolve, reject){
//     let result = "task completed";
//      resolve(result);
// })
// prm.then((res) => {
//     console.log(res);
// })

// let prm = new Promise((resolve, reject) => {
//     let num = Math.floor(Math.random() * 10);
//     if( num % 2 === 0){
//         resolve(`${num} is even`);
//     }
//     else{
//         reject(`${num} is odd`);
//     }
// })

// prm
// .then((message) =>{
//     console.log(message);
// })
// .catch((error) =>{
//      console.log(error);
// })

// function login(username, password) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (username === "Devesh" && password === "Dev@123") {
//                 resolve("Login successful");
//             }
//             else {
//                 reject("Invalid login");
//             }
//         }, 1000);
//     })
// }
// async function main(){
//     try{
//        let result = await login("Devesh", "Dev@123");
//        console.log(result);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// main();


async function getWeather(city) {

    try{
        let apikey = `16ebcad4ac939304bcfe0c3cb53101dd`;
        let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
        if (!raw.ok) {
            throw new Error("City not found or Something went wrong");
        }
        let real = await raw.json();
        if(real.main.temp > 40){
            console.log(`extreme hot condition ${real.main.temp}`);
        }
        else if(real.main.temp < 0 ){
            console.log(`extreme cold condition ${real.main.temp}`);
        }
        else{
            console.log(real);
        }
    }
    catch (err) {
        console.log(err.message);
    }
}

getWeather("London")