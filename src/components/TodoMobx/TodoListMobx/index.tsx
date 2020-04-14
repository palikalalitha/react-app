import React from "react"
import { observer } from "mobx-react"
import store from "../../../stores/TodoStore/index"
import TodoFooter from "../TodoFooter/index"
import Todo from "../Todo/index"

@observer
class TodoListMobx extends React.Component {
    render() {
        const count = store.getActiveTodoCounts()
        const todos = store.filtere: { target: { value: any } }: { target: { value: any } }: { target: { value: any } }: { target: { value: any } }: { target: { value: any } }: { target: { value: any } }: { target: { value: any } }: { target: { value: any } }: { target: { value: any } }: { target: { value: any } }: { target: { value: any } }dTodos
        return (
            <div>
            {todos.map(item=>
            <Todo todo={item} key={item.id}/>)}
            {count?<TodoFooter todoCount={count}/>:""}
            </div>)
    }
}
export default TodoListMobx
