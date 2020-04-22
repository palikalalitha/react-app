import { create } from "apisauce";

import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { networkCallWithApisauce } from "../../utils/APIUtils";
import { apiMethods } from "../../constants/APIConstants";

class UserService {
    api
    constructor() {
        this.api = create({
            baseURL: "https://jsonplaceholder.typicode.com"
        })
    }

    getUsersApi() {
        return networkCallWithApisauce(
            this.api,
            "users/", {},
            apiMethods.get)

        // return bindPromiseWithOnSuccess(userPromise)
        //     .to(this.setUsersApiStatus, this.setUsersApiResponse)
        //     .catch(this.setUsersApiError)


    }
}
export default UserService
