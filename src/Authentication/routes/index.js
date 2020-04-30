import React from "react"

import { Route } from "react-router-dom";

import {
    SIGN_IN_PATH
}
from "../constants/RouteConstants";

import SignInPage from "./SignInRoute";

const routes = [
    <Route exact path={SIGN_IN_PATH} component = {SignInPage}/>
];

export default routes
