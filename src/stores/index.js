import UserStore from "./UserStore"
import UserService from "../services/UserService/index.api"
//import TodoService from "../services/TodoService"
//import TodoStore from "./TodoStore"
//import CounterStore from './CounterStore'

import ProductStore from "../ECommerceApp/stores/ProductStore"
import ProductService from "../ECommerceApp/services/ProductService/ProductServiceAPI.js"

import AuthStore from "../Authentication/stores/AuthStore"
import AuthAPI from "../Authentication/services/AuthService/AuthAPI.js"

import  CartStore  from "../ECommerceApp/stores/CartStore"

const userService = new UserService()
const userStore = new UserStore(userService)


const authService = new AuthAPI()
const authStore = new AuthStore(authService)


const productService = new ProductService()
const productStore = new ProductStore(productService)

const cartStore = new CartStore(productStore)

// const todoService = new TodoService
// const store
//const counterStore = new CounterStore()

export default {
    //counterStore,
    userStore,
    productStore,
    authStore,
    cartStore
}
