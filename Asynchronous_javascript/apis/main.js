

const axios = require('axios')

async function main(){
    try{
        const url = 'https://jsonplaceholder.typicode.com/users'
        let response = await axios.get(url)
        console.log(response.headers.server)
        console.log(response)
    } catch (error){
        console.log(error)
    }
}

main()
