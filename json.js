/*

JSON: javascript object Notation

JSON Serialization
JSON Deserilaization

Valid JSON:
1. object

*/

let obj = {
    key: "value"
}


let json = {
    age: "21"
}

//Service A
console.log("------------Service A")
let jsonSerialized = JSON.stringify(json)//serialization
console.log(jsonSerialized)
console.log(typeof jsonSerialized)
//jsonSerialized.name = 'code'

//Service B
console.log("--------------Service B")
let originalForm = JSON.parse(jsonSerialized)//Deserilaization
console.log(originalForm)
console.log(typeof originalForm)
originalForm.name = 'code'
console.log(originalForm)



