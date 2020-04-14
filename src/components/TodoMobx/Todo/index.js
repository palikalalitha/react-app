import React from "react"
import store from "../../../stores/TodoStore/index.js"
import { observer } from "mobx-react"
import { TodoListContainer, CheckBoxElement, StikeTextBox, NormalTextBox } from "./styles.js"
@observer class Todo extends React.Component {
    constructor(props) {
        super(props)
    }
    onCompleteTodo = () => {
        const { todo } = this.props
        todo.onCompleteTodo()
    }
    onRemoveTodo = () => {
        const { todo } = this.props
        store.onRemoveTodo(todo)

    }
    onUpdateTodoTitle = (event) => {
        const { todo } = this.props
        let newTitle = event.target.value
        todo.onUpdateTodoTitle(newTitle)
    }
    render() {
        const { todo } = this.props
        const checkedId = todo.isCompleted
        return (
            <div>
            <TodoListContainer>
                <input type="checkbox" onClick={this.onCompleteTodo} defaultChecked={checkedId} />
                <input type="text" defaultValue={todo.title} style={checkedId?stikeTextStles:normalText} onKeyDown={this.onUpdateTodoTitle}/>
                <button style={close} onClick={this.onRemoveTodo}>&times;</button>
            </TodoListContainer>
            </div>)

    }
}
export default Todo
const stikeTextStles = {
    textDecoration: "line-through",
    backgroundColor: "lightgrey",
    fontSize: "25px",
    textAlign: "center"
}
const normalText = {
    fontSize: "25px",
    textAlign: "center",
    textDecoration: "none"
}
const close = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "red"
}
