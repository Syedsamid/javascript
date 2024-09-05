


/*
let count=1;
function print(){
    console.log('hello')
    console.log(++count)
    print()
}
    */


/*
//method 1
let count = 1;
function print() {
    if (count <= 5) {
        console.log(count);
        count++;
        print(); 
    }
}

print();
*/
/*
// method 2
let count = 1;
function print(){
    if (count >= 6) return; //greater than
    console.log(count++)
    print()
}
print() //function enokvokation

*/

// function fun(n){
//     console.log(n)
//     if(n == 4) return n;
//     else return fun(n + 1)

// }
// let r = fun (2)
// console.log(r)

/*
2
3
4
4
*/


/*
function fun(n){
    console.log(n)
    if(n == 4) return n;
    else return 2 * fun(n + 1)

}
let r = fun (2)
console.log(r)
*/

/*
function fun(x,y) {
    if(x == 0) return y;

    return fun(x -1, x +y);

}
let r = fun (4, 3)
console.log(r)
*/

/*
function fun(x,y){
    if(y==0) return 0

    return x + fun(x,y - 1);

}
let r= fun(5,2);
console.log(r)

*/

function fun(x,y){
    if(y==0) return 0

    return x + fun(x,y - 1);

}
function fun2(a,b){
    if(b==0) return 1;

    
    return fun(a,fun2(a,b -1))
}
let r = fun2(3,2);
console.log(r)  



