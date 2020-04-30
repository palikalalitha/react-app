import { observable, action } from "mobx"

import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"
import { API_INITIAL } from "@ib/api-constants"
import { setAccessToken, clearUserSession, getAccessToken } from "../../utils/StorageUtils.js"
class AuthStore {
    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError

    authAPIService
    constructor(authService) {
        this.authAPIService = authService
        this.init()
    }
    init() {
        this.getUserSignInAPIStatus = API_INITIAL
        this.getUserSignInAPIError = null
    }

    @action.bound
    userSignIn() {
        const userResponse = this.authAPIService.signInAPI()
        return bindPromiseWithOnSuccess(userResponse)
            .to(this.setGetUserSignInAPIStatus, this.setUserSignInAPIResponse)
            .catch(this.setGetUserSignInAPIError)
    }

    @action.bound
    setUserSignInAPIResponse(response) {
        let token = response.map(eachItem => eachItem.access_token);
        setAccessToken(token)
    }

    @action.bound
    setGetUserSignInAPIError(error) {
        this.getUserSignInAPIError = error
    }

    @action.bound
    setGetUserSignInAPIStatus(status) {
        this.getUserSignInAPIStatus = status
    }

    @action.bound
    userSignOut() {
        clearUserSession()
    }
}
export default AuthStore
