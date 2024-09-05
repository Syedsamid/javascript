/*
filter

syntax:
.filter(callbackFn)
*/

var arr =[6, 7, 8, 10, 12, 11]

//extract/filter the data whose value is greater or equal to 8

//Method 1:
/*
var output = arr.filter(n => n>=8)
console.log(output)*/

//Method 2:

var output = arr.filter(checkNumber)
function checkNumber(n){
    return n<=8
    return true
    return false

    // if(n == 8) return false
    // return true
}
console.log(output)


// var admins = ['rida','manas']

// var users = ['irfan','samid','manas','rida','bhuvan','serrknath']
// //filter out the admins from users array

// var output = users.filter(user => {
//     return (user == 'manas' || user == 'rida') ? true : false
//    // return admins.includes(user) ? true : false
// })
// console.log(output)



