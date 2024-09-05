

//error in this code

Array.prototype.something = function(){
   // console.log('something')

    for(let i=0; i< this.length; i+=2){
        console.log(this[i])
    }
}
let arr = new Array(1,2,3,4,5)
//arr.push(1)
// console.log(arr)
//arr.something()

arr.alternate()






