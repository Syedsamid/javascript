
//Inheritance
class Animal {//parent class
    constructor(name){
        this.name = name
 
    }
    speak(){
        console.log(`${this.name} from Animal`)
    }
}
class Lion extends Animal {//child class
    constructor(name){
        super(name)//call the parent class constructor
        this.breed = this.breed
}
getBreed(){
    console.log(`breed is ${thsi.breed}`)
}
speak(){ //method overridding
    console.log(`${this.name} from Lion Class`)
}
}


let a = new Lion('bob',"xyzz")
a.speak()

