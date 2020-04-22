import { observable, action, computed } from "mobx"

import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"

import { API_INITIAL, API_FAILED, API_SUCCESS, API_FETCHING } from "@ib/api-constants"
import TodoModel from "../Model/TodoModel.js"
import TodoService from "../../services/TodoService/index.api.js"
class TodoStore {
    @observable todos
    @observable selectedFilter
    @observable getTodoListAPIError
    @observable getTodoListAPIStatus
    todosAPIService

    constructor(userService) {
        this.todosAPIService = userService
        this.init()
    }

    init() {
        this.todos = [];
        this.selectedFilter = "all"
        this.getTodoListAPIError = null
        this.getTodoListAPIStatus = API_INITIAL
    }
    @action.bound
    setTodoListAPIError(error) {
        this.getTodoListAPIError = error
    }
    @action.bound
    setTodoListAPIStatus(status) {
        this.getTodoListAPIStatus = status
    }
    @action.bound
    setTodoListResponse(userResponse) {
        userResponse.map(user => this.onAddTodo(user.title, user.completed))

    }

    @action.bound
    getTodoList() {
        const userPromise = this.todosAPIService.getTodos()
        return bindPromiseWithOnSuccess(userPromise)
            .to(this.setTodoListAPIStatus, this.setTodoListResponse)
            .catch(this.setTodoListAPIError)
    }
    @action.bound
    onAddTodo(userInput, isCompleted) {
        let todoObj1 = {
            id: Math.random(),
            title: userInput,
            isCompleted: isCompleted
        }
        let todoObj = new TodoModel(todoObj1)
        this.todos.push(todoObj)
    }

    @action.bound
    onRemoveTodo = (removeTodo) => {
        let index = this.todos.indexOf(removeTodo)
        //if (window.confirm("Do you want to delete this todo?..")) {
        this.todos.splice(index, 1)
        //}
    }
    @action.bound
    onChangeSelectedFilter(filter) {
        this.selectedFilter = filter
    }

    @action.bound
    onClearCompleted() {
        this.todos = this.todos.filter(eachTodo => !eachTodo.isCompleted)
    }

    @computed get getTodoCount() {
        // return this.todos.length
        return (this.todos.filter(eachTodo => !eachTodo.isCompleted).length)
    }
    @computed get filteredTodos() {
        switch (this.selectedFilter) {
            case "all":
                return this.todos
            case "active":
                return this.todos.filter(eachTodo => eachTodo.isCompleted === false)
            case "completed":
                return this.todos.filter(eachTodo => eachTodo.isCompleted === true)
        }
    }




}
const todoService = new TodoService()
const store = new TodoStore(todoService);
export default store;
