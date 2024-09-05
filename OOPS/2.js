


 const bootcamp = {
    fname: "john",
    lname:"wick",
    print1: function (){
        console.log("print1",this)
    },
    print2: () => {
        console.log("print2",this)
    }
 }

 bootcamp.print1()
 bootcamp.print2()

 /*
  arrow functions doesn't bind to this (current object)
  
 */
