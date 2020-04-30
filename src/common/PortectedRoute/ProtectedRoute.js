import React from "react"
import { Route } from "react-router-dom";

import {
    SIGN_IN_PATH
}
from "../constants/RouteConstants";
import { Redirect } from "react-router-dom";


import { getAccessToken } from "../utils/StorageUtils.js"

import { isLoggedIn } from "../utils/authUtils.js"
import { observer } from "mobx-react"
// export const ProtectedRoute = (props) => {
//     const { component: Component, path } = props
//     console.log(isLoggedIn())
//     if (isLoggedIn()) {
//         <Route  component={Component} exact path={path}/>
//         //return Component
//     }
//     else {
//         return <Redirect to={SIGN_IN_PATH}/>
//     }
// }

class ProtectedRoute extends React.Component {
    render() {
        const { component: Component, path } = this.props;
        if (getAccessToken()) {
            <Route exact path={path} component={Component}/>
        }
        return <Redirect to={SIGN_IN_PATH}/>
    }
}
export { ProtectedRoute }
