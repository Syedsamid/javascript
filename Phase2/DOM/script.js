
//html table
//make a axios api call GET request https://jsonplaceholder.typicode.com/users 
//get the data 
//render it

async function fetchAndRender() {
    try {
        const url = "https://jsonplaceholder.typicode.com/users"
        let response = await axios.get(url);
        render(response.data)
    } catch (error) {
        console.log(error);
    }
}

function render(data) {
    let tbody =  document.querySelector('tbody');
    data.forEach(row => {
        let tr = document.createElement('tr');

        let { name, email, address: { geo: {lat, lng} }, company:{name:cname} } = row
        let arr = [name, email, lat, lng, cname]

        arr.forEach(col => {
            let td = document.createElement('td');
            td.innerText = col

            tr.appendChild(td)
        })

        tbody.appendChild(tr);

    })
}

fetchAndRender()





//---------------------------------------------------
// nested objected destructuring
// let obj = {
//     "id": 6,
//     "name": "Mrs. Dennis Schulist",
//     "username": "Leopoldo_Corkery",
//     "email": "Karley_Dach@jasper.info",
//     "address": {
//         "street": "Norberto Crossing",
//         "suite": "Apt. 950",
//         "city": "South Christy",
//         "zipcode": "23505-1337",
//         "geo": {
//             "lat": "-71.4197",
//             "lng": "71.7478"
//         }
//     },
//     "phone": "1-477-935-8478 x6430",
//     "website": "ola.org",
//     "company": {
//         "name": "Considine-Lockman",
//         "catchPhrase": "Synchronised bottom-line interface",
//         "bs": "e-enable innovative applications"
//     }
// }

let { name, email, address: { geo: {lat, lng} }, company:{name:cname} } = obj;
// console.log(lng)
let arr = [name, email, lat, lng, cname]
console.log(arr)
