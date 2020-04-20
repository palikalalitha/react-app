import * as React from "react"
//import { reaction } from "mobx"
import TodoListMobx from "../TodoListMobx/index"
import { observer } from "mobx-react"
import AddTodo from "../AddTodo/index"
import store from "../../../stores/TodoStore/index.js"
import { TodoAppContainer, Heading, Loader, NetworkError, RetryButton } from "./styles.js"
import { GoSync } from "react-icons/go"


@observer
class TodoApp extends React.Component {
    // async componentDidMount() {
    //     try {
    //         let response = await fetch("https://todo-list-2.getsandbox.com/todos")
    //         let data = await response.json()
    //         console.log(data.length)
    //         data.forEach(item => {
    //             store.onAddTodo(item.title, item.isCompleted)
    //         })
    //     }
    //     catch (error) {
    //         alert("Loading error")
    //     }
    // }
    onClickLoadAgain = () => {
        store.isLoading = false
        console.log(store.isNetworkErr)

    }
    render() {
        const { isNetworkErr, isLoading } = store
        return (
            <div>
        
            <TodoAppContainer>
            <Heading>todos</Heading>
            {isLoading? 
                 <TodoAppContainer>
                     <AddTodo/>
                     <TodoListMobx/>
                 </TodoAppContainer>
                 :
                 <Loader><GoSync/><h1>Loading</h1> </Loader>}
            </TodoAppContainer>
            </div>
        )
    }

}
export default TodoApp
// { isNetworkErr && isLoading &&
//         <NetworkError>
//             <p>Network error</p>
//             <RetryButton onClick={this.onClickLoadAgain}>Retry</RetryButton>
//         </NetworkError>}
