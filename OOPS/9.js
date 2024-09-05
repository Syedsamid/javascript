


function Person(name,age){
    this.name = name
    this.age = age
    this.sayHello = function (){
        console.log(`hello ${this.name}`)
    }

}

Person.prototype.printAge = function(){
    console.log(`age is ${this.age}`)
}

let p1 = new Person('john',31)
    p1.sayHello()
    p1.printAge()


