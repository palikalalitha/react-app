import { observable, action } from "mobx"

import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"
import { API_INITIAL } from "@ib/api-constants"

import { setAccessToken, clearUserSession } from "../../utils/StorageUtils.js"
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
    userSignIn(requestObject, onSuccess, onFailure) {
        const userResponse = this.authAPIService.signInAPI(requestObject)
        return bindPromiseWithOnSuccess(userResponse)
            .to(this.setGetUserSignInAPIStatus, response => {
                this.setUserSignInAPIResponse(response);
                onSuccess();
            })
            .catch(error => {
                this.setGetUserSignInAPIError(error);
                onFailure();
            })
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
        this.init();
    }
}
export default AuthStore
