import React from "react"
import TodoListMobx from "../TodoListMobx/index.js"
import AddTodo from "../AddTodo/index.js"
import { TodoAppContainer, Heading } from "./styles.js"
import { reaction } from "mobx"
class TodoApp extends React.Component {
    // todoListCount = reaction(() => store.todos.map(eachTodo => eachTodo.title),
    //     (name) =>
    //     console.log("todoList titles", name)
    // )

    render() {
        return (
            <div>
            <TodoAppContainer>
            <Heading>todos</Heading>
            <AddTodo/>
            <TodoListMobx/>
            </TodoAppContainer>
            </div>
        )
    }

}
export default TodoApp
