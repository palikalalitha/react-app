import React from "react"
import { observable, action } from "mobx"
//import { observer } from "mobx-react"
import store from "../../../stores/TodoStore/index"


class AddTodo extends React.Component {
    @observable todoTitle
    @action.bound
    onChangeInput(event) {
        if (event.keyCode === 13) {
            let userInput = event.target.value
            store.onAddTodo(userInput)
            event.target.value = ""
        }
        this.todoTitle = event.target.value
    }
    render() {
        return (
            <input type="text" onKeyDown={this.onChangeInput} className="w-64 h-10 text-3xl bg-red-300 text-center"/>
        )
    }
}
export default AddTodo
