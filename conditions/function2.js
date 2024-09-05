



/*
function print(){
    console.log("hii")
}


//fat arrow functions
/*var fun_name = => {
    statement
     ....
}
*/

/*

var sum =(a,b) =>{
    return a + b;

}
    */

    /*
var output = sum(1,2);
console.log(output)
*/

/*
//------------------------------
print();
function print(){
    console.log("hii")
}*/

/*
var print = () => {
    console.log("hii")
}
print()
*/



//short arrow function
/*
var functio_name = () => statement
*/
/*
var sum = (a,b) => a + b;
var output = sum(2,3)
console.log(output)
*/

/*
var print = () => "hello"
var output = print()
console.log(output)
*/

/*
//note: when writing {} return is must
// if you are not using {} by default it will return the values
//var print = () => {"hello"}
var print = () => {return "hello"}
var output = print()
console.log(output)
*/

//-------------------------------------
/*
First Class function
1. A function can be assigned to a variable
2. A function can be passed as a argument/parameter to another function (callback function)
3. A function can return a function, 
*/

/*
function greetings(str,cb){
    console.log(cb(str))
}
function sayHello(str){
    return `${str}, Hi how are you?`

}
greetings ('samid',sayHello)
*/

/*
function print(cb){
    cb()
}

function log(){
    console.log("Welcome to callbacks")
}
print(log)
*/

//----------------------------------
/*
create a function that will take 3 parameters 
1st parameter: 0 or 1
2nd parameter: function A
3rd  parameter: functionB

if the 1st parameter is 0 call function A
if it is 1 call function B
*/

/*
//practic

function A(){
    console.log("A")
    if(fun == 0){
        else if(fun == 1){
            function B(){
                console.log("B")
                else{

                }
            } 
        }
    }
}

function B(){
    console.log("B")
}
    */

/*
function A(){
console.log("A")
}
function B(){
    console.log("B")
}

function something(value, cb1, cb2){
    if (value){
        cb2()
    }
    else{
        cb1()
    }
}
something(1, A, B)
*/


//------------------------------------
//3. A function can return a function

function sayHello(){
    return() => {
        return "hello"
    }
}
//var outputFunction = sayHello()
//console.log(outputFunction());

//console.log(sayHello()())

//---------------------------------
//IIFE: Immdiately Invoked Function Expression

(function print(){
    console.log('hello')
})()






