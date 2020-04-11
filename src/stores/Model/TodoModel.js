import React from "react"
import { observable, action } from "mobx"
import { observer } from "mobx-react"
class TodoModel {
    id
    @observable title
    @observable isCompleted = false
    constructor(todo) {
        this.id = todo.id
        this.title = todo.title
        this.isCompleted = todo.isCompleted
    }
    @action.bound
    onCompleteTodo() {
        this.isCompleted = !this.isCompleted
    }

    @action.bound
    onUpdateTodoTitle(newTitle) {
        console.log("In model", newTitle)
        this.title = newTitle
    }

}
export default TodoModel
