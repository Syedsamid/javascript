//functions



/*
function print(){
    console.log("hii")
}

print()
*/

//function parameters
/*
function sum(a,b){ //a and b is parameter
    console.log(a + b)
}
sum (4,5)  //4 and 5 is argument
sum("hii","everyone")
*/


/*
//creater a function that will take a single parameter string
//_______, How are you?
//ex 'abdul' => abdul, How are you?


function greetings(str){

}

*/

//..................return

//1. return is the end of function
/*
var arr = [1,2,3]
var output = arr.pop() //3
console.log(output)
*/



function sum1(a,b) {
    return a + b;
}
//var output = sum1(2,3)
//console.log(output)


function sample(){
    // return [1,2,3]
    return{a:"b"}

}
//assigning function to a variable

var getResult = function(){
    return true
}

//console.log(getResult())


 function a(){
    return{
        a:"hello",
        c: function(){
            return {
                arr:[1,2],
                arr1:["irfan","bhuvan",["rida","samid"]]
            }
        }
        b:["A","B"]
    }
}
//console.log(a().b[1])
console.log(a().c().arr1[2,1])





