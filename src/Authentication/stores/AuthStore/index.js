import AuthStore from "./AuthStore"
import AuthAPI from "../../services/AuthService/AuthAPI.js"
const authService = new AuthAPI()
const authStore = new AuthStore(authService)
export default authStore
