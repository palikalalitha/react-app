import { create } from "apisauce"
import { networkCallWithApisauce } from "../../../utils/APIUtils"
import { apiMethods } from "../../../constants/APIConstants"

import { URL } from "../../constants/SignInPageConstants.js"
import endPoints from "../endPoints.js"

class AuthAPI {
    api
    constructor() {
        this.api = create({
            baseURL: URL
        });
    }
    signInAPI() {
        return networkCallWithApisauce(
            this.api,
            endPoints.signInEndPoint, {},
            apiMethods.get

        );
    }
}
export default AuthAPI
