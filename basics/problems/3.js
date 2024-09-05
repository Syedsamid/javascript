/*

given a number N, print sum of all elements
N=5;
1+2+3+4+5
*/

// let num = 5;
// let sum = 0;

// for (let i = 1; i <= num; i++) {
//     sum += i;
// }
// console.log(sum)


/*
given a arry, print mean

input: [1,2,3,4,5]
output: 1+2+3+4+5 / 5=> 15/5
*/

// function Mean(array) {
//     let sum = array.reduce((a, b) => a + b, 0);
//     let mean = sum / array.length;
//     let expression = array.join
//     console.log(expression);
// }

// let arr = [1, 2, 3, 4, 5];
// Mean(arr);



 
/*
arr = [1,2,3,4,5]
find (), min(), and avg() value

*/

/*
given and array, each element should multiply with 2
input: [1,2,3,4,5]
output:[2,4,6,8,10]

*/

function number(arr) {
    return arr.map(element => element * 2);
  }
  
  let inputArray = [1, 2, 3, 4, 5];
  let outputArray = number(inputArray);
  
  console.log(outputArray);
  

  /*
  write a function that finds the factors for a number
  input : 4
  output: [1,2,4]
  */

/*
  function factor(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) 
        factors.push(i);
    }
    return factors;
  }
  
  console.log(factor(4));
  */


  /*
  find wheather the number is a prime or not

  prime number?
  the number div by 1 and itself
    input: 9
  */


    function isPrime(n) {
        if (n <= 1) 
            return false
        
       // for (let i = 2; i < n; i++) {
        for (let i = 2; i < Math.sqrt; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    let res = isPrime(8)
    console.log(res)
  

  
  



