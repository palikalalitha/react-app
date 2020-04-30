import * as React from "react"
import { observer } from "mobx-react"

import store from "../../../stores/TodoStore/index.js"

import LoadingWrapperWithFailure from "../../../components/common/LoadingWrapperWithFailure"

import NoDataView from "../../common/NoDataView"


import TodoListMobx from "../TodoListMobx/index"
import AddTodo from "../AddTodo/index"

import TodoMain from "../TodoMain/index"

@observer
class TodoApp extends React.Component {
    componentDidMount() {
        this.doNetworkCalls()
    }
    doNetworkCalls = () => {
        store.getTodoList()
    }
    renderSuccessUI() {
        const { todos } = store
        return (<TodoMain  store={store}/>);
    }
    render() {
        const { getTodoListAPIStatus, getTodoListAPIError } = store;
        return (
            <LoadingWrapperWithFailure apiStatus={getTodoListAPIStatus}
            apiError={getTodoListAPIError} onRetryClick={this.doNetworkCalls}
            renderSuccessUI={this.renderSuccessUI}/>
        )
    }
}
export default TodoApp
