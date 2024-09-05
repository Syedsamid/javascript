
const { error } = require('console')
const fs = require('fs')// internal module built into node


//const readlineSync = require('readline-sync')//external module
/*
npm init
npm install readline-sync
*/

console.log('start')

//Asynchronous task
// fs.readFile('./sample.txt',(arr, data) => {
//     console.log(String (data))
// })


//Synchronous task
let fileData  = fs.readFileSync('./sample.txt')
console.log(String(fileData))
console.log('end')


