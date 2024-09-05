//closure 
//a function can return a function
/*
function outerFunction(x){
    let n = 100
    return(y) => {
        console.log('incoming param',y)
        console.log('outerFunction',x)
        console.log('coming from outerfunction',a)
    }
}

const newFunction = outerFunction(10)
newFunction('inside')*/


//
/*
.reduce

    syntax

*/


let arr = [1,2,3,4]
/*
//var acc = 0
var initialValue = 10
let res = arr.reduce((acc,curr)=>{
    console.log(acc,curr)
    console.log('-------------------')
   return acc += curr
}, initialValue)
console.log(res)
*/


let res = arr.reduce((acc.curr) => {
   /* console.log(acc)
    if(curr % 2 == 0){
        acc.puch(curr)
    }
    return acc
    */

    curr % 2 == 0 ?  acc.push(curr) :""
    return acc

}, [])

console.log(res)





