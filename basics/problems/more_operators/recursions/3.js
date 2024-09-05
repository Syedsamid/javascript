/*

factorial of a number

4! => 4 * 3 * 2 * 1
 
=>



fibonacci series


*/

/*
function fact(n){



}
let r = fact(4)
console.log(r);
*/


/*
function fact(n) {
   
    let result = 1;

    
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

let r = fact(4);
console.log(r); 
*/

//Recursive Approach


function   fact(n) {
    if (n === 0) {
    return 1;
       }
return n * fact(n - 1);   
}

console.log(fact(5));



