import { observable, action, computed } from "mobx"
import TodoModel from "../Model/TodoModel.js"
class TodoStore {
    @observable todos
    @observable selectedFilter
    @observable isLoading
    @observable isNetworkError

    constructor() {
        this.init()
        this.isLoading = false
        this.isNetworkErr = false
        console.log("in constructor")
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(data => data.json())
            .then(todoData => this.getTodos(todoData))
            .catch(error => { this.isNetworkErr = true, console.log("error") })

    }
    @action.bound
    getTodos(data) {
        setTimeout(() => this.isLoading = true, 2000)
        data.forEach(eachItem => {
            this.onAddTodo(eachItem.title, eachItem.completed)
        })
    }

    init() {
        this.todos = [];
        this.selectedFilter = "all"
    }

    @action.bound
    onAddTodo(userInput, isCompleted) {
        if (this.selectedFilter === "all") {
            let todoObj1 = {
                id: Date.now(),
                title: userInput,
                isCompleted: isCompleted
            }
            let todoObj = new TodoModel(todoObj1)
            this.todos.push(todoObj)
            //console.log(this.todos)
        }
    }

    @action.bound
    onRemoveTodo = (removeTodo) => {
        const { todos } = this
        let index = todos.indexOf(removeTodo)
        //if (window.confirm("Do you want to delete this todo?..")) {
        todos.splice(index, 1)
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
    // @action.bound
    // getActiveTodoCounts() {
    //     return this.todos.length
    // }
    // @computed get getTodoCount() {
    //     return this.todos.length
    // }
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
const store = new TodoStore();
export default store;
