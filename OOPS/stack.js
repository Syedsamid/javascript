/*
Stack: First in Last Out

methods:
push
pop
size
isEmpty
peak
show


*/

class stack{
    constructor(size){
        this.s = []
       // this.size = size
    }
    insert(value){
        this.s.push(value)

        return this
    }
    remove(){
        if(this.s.length == 0){
            console.log("Stack is already empty")
            return
        }
        this.s.pop()
    }
    show(){
        this.s.reverse().forEach(e => console.log(`| ${e} | `))
    }
    size(){
        console.log(this.s.length)

    }
    isEmpty(){
        return this.s.lenght == 0 ? true : false
    }
}

let s1 = new stack();
s1.insert(1).show()
s1.insert(2)
s1.insert(3)
s1.insert(4)
s1.remove()
s1.show()
s1.size()

console.log(s1.isEmpty)

