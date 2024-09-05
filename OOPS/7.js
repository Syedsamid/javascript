

// let arr = new Array(1,2,3)
// arr.push(1)
// console.log(arr)


function MyArray(){
    this.arr = []

    this.push = function (element){
        this.arr.push(element)
    }

}
// let arr = new MyArray();
// arr.push(1)
// arr.push(2)
// arr.push(3)
// console.log(arr)

console.log(MyArray.protptype)

