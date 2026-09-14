// function greet(val,cb){
//     setTimeout(() => {
//         console.log(cb(val))
//     }, 1000);
// }


// greet("hello Devesh",function(value){
//     return value.toUpperCase()
// })


// function calculate(a,b,cb){
//      let result = a+b
//      cb(result)
// }

// calculate(10,20,function(res){
//     console.log(res)
// })


// function multiply(a,b,cb){
//     let result = a*b
//     cb(result)
// }
// function cb(val){
//     console.log(val * 2)
// }
// multiply(10,7,cb)

// function subtraction(a,b,cb){
//     let result= a-b
//     cb(result)
// }
// subtraction(20,5,function(val){
//     console.log(val);

// })

// function checkNo(a,cb){
//     let result;
//     if(a % 2 === 0) result = "even"
//     else result = "odd"
//     cb(a,result)
// }
// checkNo(21,function(val,res){
//     console.log(val + " is " +res);
// })

// let students = [
//     { name: "Devesh", marks: 85 },
//     { name: "Rahul", marks: 35 },
//     { name: "Aman", marks: 72 },
//     { name: "Alice", marks: 28 }
// ];

// function processStudent(students,cb){
//      students.forEach(student=> {
//      if(student.marks >= 40){
//       let  result = student.name
//         cb(result)
//     }
//    });
// }
// processStudent(students,function(res){
//     console.log(res)

// })

// let arr = [2,5,6,23,67,34]

// function filter(arr,cb){
//     let result = [];
//     arr.forEach(element => {
//         if(cb(element)){
//             result.push(element)
//         }
//     });
//     return result;
// }

// let evenNo = filter(arr,function(res){
//     return res % 2 === 0
// })

// console.log(evenNo);

// let marks = Math.floor(Math.random() * 100)
// function checkResult(marks, cb){
//     let result;
//     if(marks >= 40){
//         result = "Pass";
//     }
//     else{
//         result = "Fail";
//     }
//     cb(result)
// }
// checkResult(marks,function(res){
//     console.log(res)
// })


// function userLogin(username, password, callback) {
//     let  result;
//     if(username === "Devesh" && password === "dev@123"){
//         result = "Login successfully"
//         callback(result)
//     }
//     else{
//         result = "Invalid Login"
//         callback(result)
//     }
// }

// userLogin("Devesh", "dev@123" ,function(res){
//     console.log(res);

// })

// function discount(amount, percentage, callback){
//     let  dis;
//     dis = amount - (percentage/ 100) * amount
//     callback(dis)
// }

// discount(1000, 20, function(res){
//     console.log(res);

// })


// function Login(username, password, success, failure){
//      if(username === "Devesh" && password === "Dev@123"){
//         success()
//      }
//      else{
//         failure()
//      }
// }

// Login("Devesh", "Dev@123", function(){
//      console.log("Login Successfully")
// }, function(){
//      console.log("Invalid Login")
// })



// function getUser(user, userid, callback){
//     setTimeout(() => {
//         console.log("User Received")
//         callback();
//     }, 1000);
// }
// function getPosts(userid, callback) {
//     setTimeout(() => {
//         console.log("Posts Received");
//         callback();
//     }, 1000);
// }
// function displayPosts(){
//     console.log("Posts displayed");
// }

// getUser("Devesh", "dev123", function(){
//     getPosts("dev123",function(){
//         displayPosts()
//     })
// })

// function login(userid, password, callback) {
//     setTimeout(() => {
//         if (userid === "Dev123" && password === "dev222") {
//             console.log("Login Successful");
//             callback();
//         }
//         else {
//             console.log("Invalid Login");
//         }
//     }, 1000);
// }

// function getUser(callback) {
//     setTimeout(() => {
//         console.log("User Received");
//         callback()
//     }, 1000);
// }
// function getProducts(callback) {
//     setTimeout(() => {
//         console.log("Products Received");
//         callback()
//     }, 1000);
// }
// function placeOrder(callback) {
//     setTimeout(() => {
//         console.log("Order Placed");
//         callback()
//     }, 1000);
// }
// function makePayment() {
//     setTimeout(() => {
//         console.log("Payment Successful");

//     }, 1000);
// }

// login("Dev123", "dev222", function () {
//     getUser(function () {
//         getProducts(function () {
//             placeOrder(function () {
//                 makePayment();
//             })
//         })
//     })
// })



// function selectFood(name, callback) {
//     setTimeout(() => {
//         console.log("Food Selected");
//         callback();
//     }, 1000);
// }

// function prepareFood(callback) {
//     setTimeout(() => {
//         console.log("Food Prepared");
//         callback();
//     }, 1000);
// }

// function packFood(callback) {
//     setTimeout(() => {
//         console.log("Food Packed");
//         callback();
//     }, 1000);
// }
// function deliverFood() {
//     setTimeout(() => {
//         console.log("Food Delivered");
//     }, 1000);
// }
// selectFood("Burger", function () {
//     prepareFood(function () {
//         packFood(function () {
//             deliverFood()
//         })
//     })
// })


function login(username, password, callback) {
    setTimeout(() => {
        if (username === "Devesh" && password === "1234") {
            console.log("Login successful");
            callback();
        }
        else{
            console.log("Invalid Login");
        }
    }, 1000);
}
function getUser(callback) {
    setTimeout(() => {
        console.log("User Received");
        callback();
    }, 1000);
}
function getAddress(callback) {
    setTimeout(() => {
        console.log("Address Received");
        callback();
    }, 1000);
}
function getProducts(callback) {
    setTimeout(() => {
        console.log("Products Received");
        callback();
    }, 1000);
}
function addToCart(callback) {
    setTimeout(() => {
        console.log("Products Added to Cart");
        callback();
    }, 1000);
}
function placeOrder(callback) {
    setTimeout(() => {
        console.log("Order Placed");
        callback();
    }, 1000);
}
function makePayment(callback) {
    setTimeout(() => {
        console.log("Payment Successful");
        callback();
    }, 1000);
}
function sendConfirmation(callback) {
    setTimeout(() => {
        console.log("Confirmation sent");
        callback();
    }, 1000);
}


login("Devesh", "1234", function () {
    getUser(function () {
        getAddress(function () {
            getProducts(function () {
                addToCart(function () {
                    placeOrder(function () {
                        makePayment(function () {
                            sendConfirmation(function () {
                                console.log("All done");
                            });
                        })
                    })
                })
            })
        })
    })
})