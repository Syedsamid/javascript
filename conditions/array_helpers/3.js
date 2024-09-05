/*

map:

syntax:
.map(callback function)
*/


// var arr =['irfan','bhunav','sreekanth']
// var result = arr.map((ele) => {
//     return ele.toUpperCase()
// })

// //var result = arr.map((ele) => ele.toUpperCase())
// console.log(arr)
// console.log(result)



//-------------------------

// Q var nums = [2,3,9,5,13]
//   output =["even",'odd,'odd','odd',..]


// var num = [2, 4, 9, 8, 13];
// var result = num.map(num => {
//   return num % 2 == 0 ? 'even' : 'odd';
// })
// console.log(result);

// Output: ["even", "odd", "odd", "odd", "odd"]



//manas is the admin

 var user =['irfan','samid','manas','rida']

// output:
// [
//     {name:"irfan", isAdmin: false},
//     {name:"samid", isAdmin: false},
//     {name:"manas", isAdmin: true},
//     {name:"rida", isAdmin: false},
// ]
// iterate over the users array
// check for name
// return object



 var output user.map((user)=>){
    if(user == 'manus'){
        return {
            name: user,
            isAdmin: true
        }
    }
    else{
        return{
            name:user,
            isAdmin: false
        }
    }
}


console.log(Math.floor(0.7))
console.log(Math.floor(1.7))
console.log(Math.floor(1.9))

// console.log('---------------------')


// console.log(Math.ceil(0.7))
// console.log(Math.ceil(1.7))
// console.log(Math.ceil(1.9))
// console.log(Math.ceil(1.1))

// console.log('-------------------')
// console.log(Math.abs(-5))  //|-5|


// console.log('---------------------')

// console.log(Math.round(0.1))
// console.log(Math.round(0.5))
// console.log(Math.round(0.9))
// console.log(Math.round(1.1))