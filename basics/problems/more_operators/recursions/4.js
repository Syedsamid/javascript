/*

Fibnocci Series : sum of preceding two numbers

0 1 1 2 3 ...

0 1_

n = (n - 1) + (n - 2)


*/


function fibonacci(n){

    if(n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2)

}
let nthTerm = fibonacci(4)
//console.log(nthTerm)



function fibSeries(n){


}
let output = fibSeries(4)
//console.log(output) //[0, 1, 1, 2, 3]





/*
function fact(n) {
    let res = 1;
    return n == 1 || n == 0 ? 1 : fact2(n, res);
  }
  
  function fact2(n, res) {
    while(n>0) {
        console.log(`n:${n} res:${res}`)
      return fact2(n-1, n * res);
    };
    return res;
  }
  
  let r = fact(5);
  console.log(r);
*/


