
//copy by refrence (shallow copy)
/*
var arr = [1, 2, 3]
var arr2 = arr;

arr2.push(4)

console.log(arr)
console.log(arr2)
console.log(arr == arr2)
*/


// copy by value (deep copy)

const arr1 = [1,2,3]
const arr2 =  arr1.slice(0)

arr1.push(4)

console.log(arr1)
console.log(arr2)
console.log(arr1 == arr2)
console.log('--------------------')
console.log([1,2,3] == [1,2,3])

