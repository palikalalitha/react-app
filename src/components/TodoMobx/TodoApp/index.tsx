import * as React from "react"
//import { reaction } from "mobx"
import TodoListMobx from "../TodoListMobx/index"
import AddTodo from "../AddTodo/index"
import { TodoAppContainer, Heading } from "./styles.js"

class TodoApp extends React.Component {
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
