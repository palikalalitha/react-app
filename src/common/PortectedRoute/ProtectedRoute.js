import React from "react"
import { Route } from "react-router-dom";

import { Redirect } from "react-router-dom";

import { isLoggedIn } from "../utils/authUtils.js"
import {
    SIGN_IN_PATH
}
from "../constants/RouteConstants";

//import ProductsPage from "../../ECommerceApp/routes/ProductRoute/ProductRoute";

export const ProtectedRoute = (props) => {
    const { component: Component, path } = props
    if (isLoggedIn()) {
        return <Route  component={Component} exact path={path} />
    }
    return <Redirect to={SIGN_IN_PATH}/>
}


























// class ProtectedRoute extends React.Component {
//     render() {
//         const { component: Component, path } = this.props;
//         if (getAccessToken()) {

//             return <Route exact path={path} component={Component}/>
//         }
//         return <Redirect to={SIGN_IN_PATH}/>
//     }
// }
//export { ProtectedRoute }
