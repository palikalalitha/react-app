import React from "react"
import { withRouter } from "react-router-dom"

import authStore from "../../stores/index"

class SignOutPage extends React.Component {

    onSignOut = () => {
        authStore.userSignOut()
        const { history } = this.props
        history.replace("/signin")
    }
    render() {
        return (
            <div className="text-center">
            <button type="button" onClick={this.onSignOut}>Sign out</button>
            </div>)
    }
}
export default withRouter(SignOutPage)
