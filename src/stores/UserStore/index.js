import { observable, action } from "mobx"
import { API_INITIAL, API_FETCHING, API_FAILED, API_SUCCESS } from "@ib/api-constants"

import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"
import { create } from "apisauce"
import { networkCallWithApisauce } from "../../utils/APIUtils"
import { apiMethods } from "../../constants/APIConstants"

//import UserService from "../../services/UserService/index.fixture"
import UserFixtureService from "../../services/UserService/index.fixture"

class UserStore {
    @observable getUsersApiStatus
    @observable getUserApiError
    @observable users
    userService
    constructor(userService) {
        this.userService = userService
        this.init()
    }

    @action
    init() {

        this.getUsersApiStatus = API_INITIAL
        this.getUserApiError = null
        this.users = []
    }

    @action.bound
    setUsersApiResponse(usersResponse) {
        //this.getUsersApiStatus = API_SUCCESS
        this.users = usersResponse.map(user =>
            user.name)
        //this.users = []
    }

    @action.bound
    setUsersApiError(error) {
        //this.getUsersApiStatus = API_FAILED
        this.getUserApiError = error;
    }

    @action.bound
    setUsersApiStatus(apiStatus) {
        this.getUsersApiStatus = apiStatus
    }
    @action.bound
    getUsersAPI() {
        // const api = create({
        //     baseURL: "https://jsonplaceholder.typicode.com"
        // })
        // const userPromise = networkCallWithApisauce(
        //     api,
        //     "users/", {},
        //     apiMethods.get)

        //const userPromise1 = fetch("https://jsonplaceholder.typicode.com/users")
        const userPromise = this.userService.getUsersApi()
        return bindPromiseWithOnSuccess(userPromise)
            .to(this.setUsersApiStatus, this.setUsersApiResponse)
            .catch(this.setUsersApiError) //this.getUsersApiStatus = API_FETCHING
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(response => response.json())
        //     .then(this.setUsersApiResponse)
        //     .catch(this.setUsersApiError)
    }

    @action
    clearStore() {
        this.init()
    }

}
//const userService = new UserFixtureService()
//const userStore = new UserStore(userService)
export default UserStore
