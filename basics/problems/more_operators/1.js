/*

rest and spread operator
array and object destructuring
default params
optional chaining


*/
//----------------------- Rest operator
function sum(...numbers) {
    console.log(numbers);
    console.log("------------------")
    let res = 0;
    for(let i = 0; i< numbers.length; i++){
        res += numbers[i]
    }
    return res

}

// let output = sum([1,2,3,4])
// console.log(output)


// --------------------------spread operator
// let arr = [1, 2, 3, 4]
// let arr1 = [...arr,5, 6, 7] //1,2,3,4,5,6,7
// console.log(arr1)



// let obj1 = {a: 1, b:2}
// let obj2 = {...obj1, c: 3}
// console.log(obj2)



//-------------------------Array object destucturing

// let [a,b] = [1,2,3];
// console.log(a,b)

// let {cohort} = {age: 21, cohort:"c24" }
// console.log(cohort)

// let sampleData = [
//     {
//         age: 18, cohort: "c24"
//     },
//     {
//         age: 21, cohort: "c24"
//     },
//     {
//         age: 25, cohort: "c24"
//     }
// ]
// const isAllowed = sampleData.filter(({age}) => age > 18)
// //const isAllowed = sampleData.filter((ele) => console.log(ele))
// //console.log(isAllowed)


//--------------------------destructing with rest operator

// let [a,b,...c] = [1,2,3,4,5];
// console.log(a,b)
// console.log(c)

// let {cohort, ...something} = {age: 21, cohort:"c24", gender:"male" }
// console.log(cohort)
// console.log(something)





// let [a,b,...c] = [1,2,3,4,5];
// console.log(a,b)
// console.log(c)

// let {cohort: mycohort, ...something} = {age: 21, 
//     cohort:"c24",
//     gender:"male"
// }
// console.log(mycohort)
// console.log(something)



//--------------------------------default parameters

function greet(name = 'Guest'){
    console.log(`Hello ${name}`);

}
//greet()


//----------------------optional chaining


let sampleData = [
    {
        age: 18, cohort: "c24",
         coord :{
            lat: 17.7,
            long: 89
        }
    },
    {
        age: 21, cohort: "c24" , 
        coord :{
            lat: 17.7,
            long: 89
        }
    },
    {
         cohort: "c24", 
         coordr :{
            lat: 17.7,
           
        }
    }
]

console.log(sampleData[0].coord.lat)
//console.log(sampleData[2].coord.long)//It will give you an error
console.log(sampleData[2]?.coord?.long) //it will execute the code and prevent the error





