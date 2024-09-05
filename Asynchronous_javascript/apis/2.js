
//const { default: axios } = require("axios")

const axios = require('axios')
const fs = require('fs/promises')

async function getData(){
    try {
        const url = "https://jsonplaceholder.typicode.com/users"
        let res = await axios.get(url);
        let data = res.data  
    
    let completed = [], pending = [];
    data.forEach(todo => {
        todo.completed ? completed.push(todo) : pending.push(todo)
    })
    await fs.writeFile('./completed.json',JSON.stringify(completed));
    await fs.writeFile('./pending.json',JSON.stringify(pending));
 } catch (error) {
    console.log(error);
 }
}

getData();

