import React from "react"
import { observer } from "mobx-react"
import Todo from "../Todo/index.js"

@observer
class TodoListMobx extends React.Component {

    render() {
        const { todos } = this.props
        return (
            <div>
               {todos.map(item=>
            <Todo todo={item} key={item.id}/>)}
   </div>)
    }


}
export default TodoListMobx
