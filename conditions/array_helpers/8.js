/*

Math.random
0.0000-0.9999999
*/


// for(let i=0; i<=20; i++){
// console.log(Math.random())
// }


//N =6
// range 0 - 5
function getRandom(min,max){
   // console.log(Math.random() * n)
   //console.log(Math.floor(Math.random() * n + 1))
   console.log(Math.random() * (max - min) + min);
   //console.log(Math.floor(Math.random() * (max - min) + min));
}
// for(let i = 0; i <= 20; i++){
//     getRandom(0,7)
//     getRandom(6)
// }
    


var arr = ['irfan', 'samid', 'rida','manas','sreeknath']

for(let i = 0; i <= 20; i++){

let rIdx = MAth.floor(Math.random() *arr.length)// 0-4
console.log(arr[rIdx])
}


