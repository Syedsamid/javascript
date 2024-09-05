/*
if



*/



/*
syntax:

*/
/*
var a=2, b=4;

if(a>b) {
    console.log('a is greater')
}

if([]){
    console.log("object is truely value")
}
*/


/*
var indox = 0;
console.log(indox)
if (indox) {
    console.log("you got new unread messages")
}
else {
    console.log("There are no messages")
}*/



//console.log(typeof([]))

//console.log(typeof NaN)


/*
var role='user'

if(role =='admin'){
    console.log('admin')

}
else if (role =='manager') {
    console.log('manager')

}
else if(role =='supervisor'){
    console.log("supervisor")
}
else {
    console.log("non of the above")

}*/

//switch
/*
var role = 'admin'

switch(role) {
    case 'admin':
        console.log('admin')
        break;

    case 'manager':
    console.log('manager')
    break;

    case 'supervisor':
        console.log ('supervisor')
        break;

    default:
            console.log("non of the above")
}*/


//nasted if else

var a = 9, b = 4, c = 7;


if(a>b){
    if(a>c){
        console.log("a is largest")
    }
    else{
        console.log('c is largest')
    }
}
else{
     if(a >c){
         console.log("")

     }
}