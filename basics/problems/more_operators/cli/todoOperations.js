

/*

todo name: string
inCompleted: boolean(true/false)

[
    {
    title: "lerrn CLI"
    iscompelted: false
    },

    {
    title: "Learn frontend"
    iscompelted: false
    },

    {
    title: "Learn Backend"
    iscompelted: false
    },
    ...
]

Array of objects

CRUD operations
Create
Read
Update
Delete

Operations


1. Add todo
2. View todo
3. Mark todo as done (isCompleted -> true)
4. Delete todo


*/
// function addTodo(key, completed = false) {
//     let t = key;
//     todos.push({ title: t, isCompleted: completed}):
// }

var readline - requestAnimationFrame

let todos = []

//create
function addTodo(){
    let t = readlineSync.question("Enter new todo");
    if (t != ''){
    todos.push({ title: t, isCompleted: false})
    console.log("todo added successfully");
}
{
    else {
        addTodo()
    }
}

//read
/*
[ ] learn CLI 
[X] learn Backend

isCompleted is true show "X", if false show " "
*/
function viewTodo(){
    console.log('----------to do--------------------------')
    todos.forEach(todo => {
        console.log(`[${todo.isCompleted ? 'x' : " "}] : ${todo.title} `)
    })
}
/*
UpDATE
show the list
take the index from user
update that specific index value (isCompleted => true)

*/

  //update
  function updateTodo(){
    todos.forEach((todo,index) => {
        console.log(`${index}. ${todo.title}`)
    })
    let idx = readlineSync.questionInt('Enter the index of todo, you want to');
    todos[idx].inCompleted = true
  }  

  //delete
  
  function deleteTodo(){
    todos.forEach((todo,index) => {
        console.log(`${index}. ${todo.title}`)
    })
    let idx = readlineSync.questionInt('Enter the index of todo, you want to');
    todos.splice(idx,1)

}




  //----------------------

  addTodo,
  addTodo
  addTodo,
  updateTodo,
  updateTodo,
  viewTodo

   //-------------------------------

   
