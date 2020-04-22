import UserStore from "./UserStore"
import UserService from "../services/UserService/index.api"
//import TodoService from "../services/TodoService"
//import TodoStore from "./TodoStore"
//import CounterStore from './CounterStore'


const userService = new UserService()
const userStore = new UserStore(userService)
// const todoService = new TodoService
// const store
//const counterStore = new CounterStore()

export default {
    //counterStore,
    userStore
}
