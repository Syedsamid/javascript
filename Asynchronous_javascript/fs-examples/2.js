const fs = require('fs')

fs.writeFile('./sample.txt','code',(err) => {
    if(err) console.log(err)
})

fs.writeFileSync('/.sample.text','code1')






//read the file 
//append the data
//write to file
//ex: 
/*
Learn:
Learn: async javascript

just use fs.readfile and fs.writeFile
*/