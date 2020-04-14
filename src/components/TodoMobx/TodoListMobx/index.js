import React from "react"
import { observer } from "mobx-react"
import store from "../../../stores/TodoStore/index.js"
import TodoFooter from "../TodoFooter/index.js"
import Todo from "../Todo/index.js"

@observer
class TodoListMobx extends React.Component {
    render() {
        const count = store.getActiveTodoCounts()
        const todos = store.filteredTodos
        let c;
        return (
            <div>
    
            <p>{c}</p>
            {todos.map(item=>
            <Todo todo={item} key={item.id}/>)}
            {count?<TodoFooter todoCount={count}/>:""}
            </div>)
    }
}
export default TodoListMobx
