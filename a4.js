//join

var address = ['A',"charminar",'Hydreabad']
console.log(address.join(";"));


//splice :(start index, deleteCount, insert Element)

var alphabets = ['a','b','c','d']
/*alphabets.splice(0,1)
console.log(alphabets)

var alphabets = ['a','b','c','d']
var returnElement = alphabets.splice(0,1)
console.log(returnElement)
console.log(alphabets)*/
/*
alphabets.splice(1,2,"z","o")
console.log(alphabets)
*/



//concat
/*
var personalConstacts = ['john','alex']
var workContacts = ['deve']

var allContacts1 = personalContacts.concat(workContacts);
var allContacts2 = workContacts.concat(workContacts);
console.log(allcontacts1,allContacts2)
*/

//copywithin

var alpha = ['a','b','c','d','e','f']
//alpha.copyWithin(0,1)
//console.log(alpha)

//flat

var arr2 = [
    [1,2],
    [3,4]
]
console.log(arr2.flat())


//reverse

console.log(alpha.reverse())

//includes

var authorizedRoles = ['manager','supperviser','accountant' ]
var currentRole = 'user'

var isAuthorized = authorizedRoles.includes(currentRole) ? "allow" :"deny";
//console.log(role.includes("manager"))
console.log(isAuthorized)


//Array helper methods




