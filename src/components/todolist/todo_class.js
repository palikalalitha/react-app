//import {todolist }
function Todosapp() {
    return <h1>
<UserInput/>
<Todolist/>
<TodoFooter/>
</h1>
}
//create  todolist component
//->todo
//checkbox
//userInput
//id
const todoProps = {
    id: 1,
    content: 'random',
    isChecked: true,

}
const todo = () => {
    const { id, content, isChecked } = todo
    return (
        <div>
         <input type="checkbox" value={isChecked}/>
         <input type="text" value={content}/>
         </div>)
}
const todoListProps = {
    todos: [{}],

}
const Todolist = () => {
    return (<div>
    todo</div>)
}
/*todofooter.js*/
const todoFooterProps = {}
const TodoFooter = () => {
    return (<div>
    <ActiveTodosCount/>
    <AllButton/>
    <ActiveButton/>
    <CompletedButton/>
    <ClearCompleted/>
    </div>)
}







/*userInput.js*/

const userInputProps = {}

const UserInput = () => {
    return <input type="text"/>
}


const ActiveTodosCount = () => {

}
