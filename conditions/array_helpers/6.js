/*

every
array .every(callbackFn)

if the condition is passed for all elements it will return true


*/

var arr = [2, 3, 4, 6]
var result = arr.every(n=> n % 2 == 0)
console.log(result)