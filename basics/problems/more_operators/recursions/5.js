

/*
function fun(n){
    var i = 1;
    if(n >= 5) return n;

    n = n + i;
    i++;
    return fun(n)

}

console.log(fun(1))

*/

/*
function count(n){
    let a = 1;
    console.log(a)
    console.log(n)
    a++;
    if(n > 1) count(n - 1)
}
count(3)
*/


function robot(n, a, b){
    if(n<=0) return;

    robot(n-1, a,  b + n)
    console.log(n, a, b)

    robot(n -1, b, a + n)

}
robot(2, 5, 2)


