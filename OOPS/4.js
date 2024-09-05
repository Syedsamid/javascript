

 const bootcamp = { // object 1
    fname: "john",
    lname:"wick",
    print: function (){
        return{ // object2
            age: 21,
            print2: function(){
                console.log('print2 normal functions',this)
            }
        }
    },
    print3: function () {
        return { // object2
            age: 21,
            print4: () => {
                console.log('print4.arrow functions',this)
            }
        }
    }
}


//bootcamp.print().print2()

bootcamp.print3().print4()


/*
Arrow functions does't bind to it's own this, it will look for parent object (naormal function)

Normal Function binds to it's own to this key word object
*/







