
console.time('timer')
console.log("start")


function abc(){
    console.log('abc')
}

setTimeout(()=>{
    console.log('hello from timer 2')
    console.timeLog('timer')
    console.log('-------------------')
},2000)

setTimeout(()=> {
    console.log('hello from timer 3')
    console.timeLog('timer')
    console.log('-------------------')
},3000)

setTimeout(()=> {
    console.log('hello from timer 5')
    console.timeEnd('timer')
    console.log('-------------------')
},5000)

console.log("end")