import React from "react"
import store from "../../../stores/TodoStore/index"
import { TodoFooterContainer } from "./styles"

class TodoFooter extends React.Component {

    onChangeSelectedFilter = (event) => {
        let filter = event.target.value
        store.onChangeSelectedFilter(filter)
    }
    onClearCompletedTodo = () => {
        store.onClearCompleted()
    }
    render() {
        const { todoCount, selectedFilter, todos } = this.props
        console.log(selectedFilter)
        console.log(todos)
        return (
            <div>
            <TodoFooterContainer>
            <div>{todoCount} items</div>
            <div><button onClick={this.onChangeSelectedFilter} value="all">All</button> </div>
            <div><button onClick={this.onChangeSelectedFilter} value="active">Active</button></div>
            <div><button onClick={this.onChangeSelectedFilter} value="completed">Completed</button></div>
            <div><button onClick={this.onClearCompletedTodo}  value="clear">clear Completed</button></div>
            </TodoFooterContainer>
            </div>)
    }
}
export default TodoFooter
