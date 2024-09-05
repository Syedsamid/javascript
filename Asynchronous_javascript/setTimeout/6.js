console.time('timer')
console.log('start')

setTimeout(()=>{
    console.log("timer 3")
    setTimeout(()=> {
        console.log("timer 1")
            setTimeout(()=>{
                console.log("timer 7")

            },7000)      
         
    },1000)
},3000)
console.log('end')


//which is small number than it will print
