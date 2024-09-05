//for each


/*
syntax 
*/


//var arr = [1, 2, 3]

//Method 1:
// var arr = [1, 2, 3]
// arr.forEach(cb)
// function cb(element){
//     console.log(element)
// }

//Method 2:
// var arr = [1, 2, 3, 4, 5, 6]
// arr.forEach((element,index)=> {
//     console.log(index,element)
// })


//Method 2.1

// var arr =[1,2,3,4,5,6]
// arr.forEach((element,index)=> {
//     console.log(`index:${index} element:${element}`)
// })



var arr =['Irfan','Bhunav','Sreekanth']
arr.forEach((ele) => {
console.log(ele.toUpperCase())
})

console.log('----------')

var arr =['Irfan','Bhunav','Sreekanth']
arr.forEach((ele) => {
console.log(ele.toLowerCase())
})

