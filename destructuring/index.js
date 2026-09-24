// let obj = {
//     name: "ali",
//     age: 34,
//     marks: 596
// }

// // destructuring

// const {name, age,marks} = obj
// console.log(name)
// console.log(age)
// console.log(marks)

// // example no 02

// const fruits = ["apple","mango","banana"]

// const [first,second,third] = fruits

// console.log(first,second,third)

// // spread operators

// let arr = [1,2,4]
// let arr2 = [...arr]
// console.log(arr2)


// // combining array two

// let arr1 = [1,2,3]
// let arr3 = [4,5,6]
// let arr4 = [...arr1 ,...arr3]
// console.log(arr4)


// // object sprread

// let obj1 = {
//     name: "uamir",
//     age: 23,
// }

// let obj2 = {
//     ...obj,
//     city: "peshawar"
// }
// console.log(obj2)


// // rest operators
// // Multiple values ko collect karke ek array mein rakhna.

// function add(...number){
//     console.log(typeof number)

// }
// add(1,2,3,4,5,6)

// perform calculations

// function add(...number){
//     let total = 0 
//     number.forEach((num)=>{
//         total += num
//     })
//     console.log(total)
// }
// add(1,2,3,4,5)


// function sum(...number){
//     let total = 0
//     number.forEach((num)=>{
//         total += num
//     })
//     console.log(total)
// }
// sum(1,2,3,4,5,6,7,8,9,10) // 55


// project 
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

let arr3 = [...arr1,...arr2]
console.log(arr3)
// REMOVE DUBLICATE VALUE FROM THE ARRAYS
let uniqueArr = [...new Set(arr3)]
console.log(uniqueArr)