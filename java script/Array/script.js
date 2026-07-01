// let fruits = ["Apple", "Mango", "Banana"];
// for( let i = 0 ; i < fruits.length; i++){
//     console.log(fruits[i]);
// }


//largest Element in array
// let arr = [10, 34, 24, 54, 30];
//   let largest = arr[0];
// for(let i = 0; i < arr.length; i++){
//       if(largest < arr[i]){
//         largest = arr[i];
//     }
// }
//   console.log("Largest Element is: " ,largest);

//Sum of array
// let arr = [10, 34, 24, 54, 30];
// let total = arr.reduce((acc, val)=>{
//     return acc + val;
// },0)
// console.log(total );

// reverse an array
// let arr = [10, 34, 24, 54, 30];
// let rev = arr.reverse();
// console.log(rev);


//Remove duplicates from array
// let arr = [34,24,24,10,64,36,43];
// let newarr = [...new Set(arr)];
// console.log(newarr);

//Remove duplicates from array
 let arr = [34,24,24,10,54,64,43,64,36,43];
let newarr = [];
for( let i = 0; i < arr.length; i++){
    if(!newarr.includes(arr[i])){
        newarr.push(arr[i]);
    }
}
console.log(newarr);
