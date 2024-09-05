

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    sayHello(){
        console.log(`Hello ${this.name}`)
    }
}

let p1 = new Person('john',31)
console.log()


