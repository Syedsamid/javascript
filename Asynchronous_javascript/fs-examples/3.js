
/*
// let fileData  = fs.readFileSync('./sample.txt')
// console.log(String(fileData))
// console.log('end')


let fs = require('fs')
fs.readFile('./sample.txt','Learn',(err) => {
    
})

fs.writeFileSync('/.sample.text','async javascript')


*/

const fs = require('fs');

fs.readFile('./sample.txt', (err, data) => {
        console.log(String(data));

    const newdata = 'async javascript';
    const result = data + newdata;

    fs.writeFile('sample.txt', result,(err) =>{
        
    } )
})



//Method: 2 using synchronous methods from fs module








