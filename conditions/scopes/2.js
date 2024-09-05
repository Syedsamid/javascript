/*

scope: availablity of a variable
three scopes:
1. function scope
2. block scope
3. blobal scope

*/

function abc(){
    var a = 3; //function scope
    console.log("function scope",a)
}

//var a = 3 //global scope
console.log('global scope',a)

{
    //var a = 3; //block scope
    console.log('block scope',a)
}

abc()

/*
1. variable that has been declared using var in function scope,
always stays within the function
2. variable that has been declared using var in blobal scope, block scope 
is available everywhere.
*/
