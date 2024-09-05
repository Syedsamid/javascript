/*
set 

use case:
when you want to store unique elements and avoid duplicates
*/

/*
var newSet = Set([1,2])
console.log(newSet)

newSet.add(3)
console.log(newSet)

newSet.add(3)
console.log(newSet)

// newSet.clear()
// console.log(newSet)

console.log(newSet.has(3))

console.log('--------------')
console.log(newSet.size)
console.log('--------------')

newSet.forEach((ele)=>)
    */

    /*

map:
key value pair

storing complex keys:
you can store boolean, number, objects as a key in map
store in order
    */

let obj = {
    age:21,
    true: 'op'
    //1: 'ui'
}
console.log(obj)

let map = new Map();
map.set('age',21)
map.set(true,'op')
map.set(1,'ui')

console.log(map)

console.log('------------------')
console.log(map.has('9'))
console.log('------------------')

console.log(map.size)
console.log('------------------')

console.log(map.keys())
console.log(map.values())

console.log('------------------')
for (let ele of map.values()){
    console.log(ele)
}

map.forEach((ele) => {
    console.log(ele)
})