// let fruits = ["mango","apple","orange","peach"]
// // forEach mathod
// fruits.forEach((item)=>{
//     console.log(item) // it does't return values
// })

// let num = [1,2,3,4,5,6,7,8,9]
// let newNums = []
//  num.forEach((item)=>{
// if(item>5){
//     newNums.push(item)
// }
// })

// console.log(newNums)

// let numbers  = [1,2,3,4,3,5,6]
// let result = numbers.filter((item)=> item > 3) // fitler methods return value
// console.log(result)

// let books = [
//     {
//         title: "bookNAME",genere: "history",date: 1990
//     },
//     {
//         title: "bookNAME",genere: "fictions",date: 1920
//     },
//     {
//         title: "bookNAME",genere: "none fictions",date: 1890
//     },
//     {
//         title: "bookNAME",genere: "future",date: 2010
//     },
//     {
//         title: "bookNAME",genere: "past",date: 1790
//     },
//     {
//         title: "bookNAME",genere: "future",date: 2011
//     }
// ]

// let results = books.filter((bk)=> bk.genere === "future" && bk.date > 2000)
// console.log(results)


// map -------------- return values

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let sum = arr.map((item)=> {
//     return item + 5;
// })
// console.log(sum) // map method retur values

// using forEch  
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let newr = []
// let newarr = arr.forEach((curELEM)=>{
//     if(curELEM){
//         newr.push(`${curELEM + 10}`)
//     }
// })
// console.log(newr)