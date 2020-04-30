import React, { Component } from "react"
import { observer } from "mobx-react"
import { inject } from "mobx-react"
//import stores from "../../stores"
//import userStore from "../../stores/UserStore"
import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure"

import NoDataView from "../common/NoDataView"
//const userStore = stores.userStore

@inject("userStore")
@observer
class UsersPage extends Component {

    componentDidMount() {
        this.doNetworkCalls()
    }
    getUserStore = () => {
        return this.props.userStore
    }
    doNetworkCalls = () => {
        this.getUserStore().getUsersAPI()
    }

    renderUsersList = () => {

        const { users } = this.getUserStore()
        console.log(users)
        if (users.length === 0) {
            return <NoDataView/>
        }
        return users.map(eachUser =>
            <div key={eachUser}>{eachUser} Chandrika</div>)
    }
    render() {
        const { getUsersApiStatus, getUserApiError } = this.getUserStore();

        return (
            <LoadingWrapperWithFailure apiStatus={getUsersApiStatus}
            apiError={getUserApiError} onRetryClick={this.doNetworkCalls}
            renderSuccessUI={this.renderUsersList}/>)
    }
}
export default UsersPage
