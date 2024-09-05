/*
1. Object oriented
2. Functional Programming


this keyword: It's a reference to a current object

*/

let arr = [1, 2, 3]
 const bootcamp = {
    fname: "john",
    lname:"wick",
    print: function (){
        console.log(this.fname)
    }
 }

 bootcamp.print()

