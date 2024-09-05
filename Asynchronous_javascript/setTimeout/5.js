console.log('start')
function abc(){
    console.log('abc')
}
abc()
setTimeout(()=>{
    console.log('hello from timer 2')
    console.timeLog('timer')
    console.log("       ")
},2000)

setTimeout(()=>{
    console.log('hello from timer 3')
    console.timeLog('timer')
    console.log("--------------------")
},3000)
setTimeout(()=> {
    console.log('hello from timer 5')
    console.timeLog('timer')
    console.log('-------------------------')
    setTimeout(()=> {
        console.log("hello i am last")
        console.timeEnd('timer')
    },5000)
},5000)
console.log('end')

