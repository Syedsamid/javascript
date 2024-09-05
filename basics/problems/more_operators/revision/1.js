/*
arr: collection of elements
*/

/*
let arr = [1,2,3,4,5]

console.log(arr)
*/

//print your name 8 times

/*
let n = "samid";
let time = 8;
for (let i = 1; i <= time; i--) {
    console.log(n);*/

// //let n = " ";
// for (let i = 101; i >= 99 ; i--) {
//     //console.log(i);
//     console.log("samid")

// }

//let arr =['rida','irfan','samid','manas']

//sum of array
/*let arr = [1,2,3,4,5]
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]


    console.log("ele",arr[i],"sum",sum);
}

console.log(sum)

*/

/*
let arr = [1, 2, 3, 4, 5];
let product = 1; 

for (let i = 0; i < arr.length; i++) {
    product *= arr[i]; 
}
console.log(product); 
*/

/*
let arr=[1,2,3,4]
let mul=1
for(i=0;i< arr.length ;i++){
    mul=mul*arr[i]
    console.log(mul)
}
    */

/*
let arr = ['rida', 'irfan', 'samid', 'manas'];
let Join_String = 'join';

for (let i = 0; i < arr.length; i++) {
    Join_String += arr[i];
}

console.log(Join_String);
*/

/*
let arr=['rida','samid','manas']
let conc=' '
for(let i=0;i<arr.length;i++){
    conc+=arr[i] + ' '
    
}
console.log(conc)
*/

//-------------------------------------

//print all even numbers in the range 1 -10

//console.log('print all even num from 2 - 10')
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// range 1 - 10
//even mumber push to even array
//odd number push to odd array


let  Even_numbers = [];
let Odd_numbers = [];

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        Even_numbers.push(i);
    } else 
    {
        Odd_numbers.push(i);
    }
}
       /*
console.log("Even numbers:", Even_numbers);
console.log("Odd numbers:", Odd_numbers);
}
*/




/*
for (let i = 1 ;i <=5; i++){
    console.log('-------------------')
    for (let j =1; j<= 5; j++){
        console.log("i loop", i, "j loop",j)
}
        console.log('-------------------')
}*/

//5 * 5 =25



/*

for (let i = 1; i <= 5; i++) {
  console.log("-------------------");
  for (let j = 1; j <= 5; j++) {
    console.log("i loop", i, "j loop", j);
  }
  console.log("-------------------");
}
*/


for (i=0; i<=10; i++){
    console.log('samid')
}