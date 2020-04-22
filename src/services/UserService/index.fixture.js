import { create } from "apisauce";

import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { networkCallWithApisauce } from "../../utils/APIUtils";
import { apiMethods } from "../../constants/APIConstants";
import usersResponse from "../../fixtures/getUsersResponse.json"
class UserFixtureService {

    getUsersApi() {
        return new Promise((resolve, reject) => {
            resolve(usersResponse)
        })

    }
}
export default UserFixtureService
