
/*
function abc(){
    let a = 3; //function scope
    console.log("function scope",a)
}
abc()

//let a = 3 //global scope
console.log('global scope',a)

{
    //let a = 3; //block scope
    console.log('block scope',a)
}

//let a = 3 //global scope
console.log('global scope',a)

*/




//using const


const a = 3 //global scope
console.log('global scope',a)

function abc(){
    //const a = 3; //function scope
    console.log("function scope",a)
}
abc()

{
    //const a = 3; //block scope
    console.log('block scope',a)
}


/*
G: global
B: Block
F: function

scopes     Global    Block   Function
---------------------------------------
var         GBF       GBF      F
let         GBF        B       F
const       GBF        B       F


*/



