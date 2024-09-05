

const axios = require('axios')
const fs = require('fs/promises')

async function main(){
    try{
        const url = 'https://jsonplaceholder.typicode.com/users'
        let response = await axios.get(url)
        
        await fs.writeFile('./users.json',JSON.stringify(response.data))
    } catch (error){
        console.log(error)
    }
}

main()


