

function Bootcamper (fname,lname){
    this.fname = fname;
    this.lname = lname;
    
    this.getName = function (){
        console.log(this.fname + this.lname)
    }
    // console.log(this)

   // return this
}
//Bootcamper('john','wick').getName


let s1 = new Bootcamper('john', 'wick');
console.log(s1)
s1.getName()

