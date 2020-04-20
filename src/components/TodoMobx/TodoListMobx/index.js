import React from "react"
import { observer } from "mobx-react"
import store from "../../../stores/TodoStore/index.js"
import TodoFooter from "../TodoFooter/index.js"
import Todo from "../Todo/index.js"

@observer
class TodoListMobx extends React.Component {
    render() {
        const todos = store.filteredTodos
        const count = todos.length
        const selectedFilter=store.selectedFilter
        return (
            <div>
            {todos.map(item=>
            <Todo todo={item} key={item.id}/>)}
            {count?<TodoFooter todos={todos} selectedFilter={selectedFilter} todoCount={count}/>:""}
            </div>)
    }
}
export default TodoListMobx
