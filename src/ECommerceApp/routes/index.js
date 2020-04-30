import React from "react"

import { Route } from "react-router-dom";

import {
    PRODUCT_PATH
}
from "../constants/RouteConstants";
import { ProtectedRoute } from "./../../common/PortectedRoute/ProtectedRoute.js"
import ProductsPage from "./ProductRoute/ProductRoute";

const routes = [
    <ProtectedRoute  path={PRODUCT_PATH} component = {ProductsPage}/>
    //<Route exact path={PRODUCT_PATH} component = {ProductsPage}/>
];

export default routes
