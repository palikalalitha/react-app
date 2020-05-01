import React from "react"

import {
    PRODUCT_PATH
}
from "../constants/RouteConstants";
import { ProtectedRoute } from "./../../common/PortectedRoute/ProtectedRoute.js"
import ProductsPage from "./ProductRoute/ProductRoute";

const routes = [
    <ProtectedRoute  path={PRODUCT_PATH} component = {ProductsPage}/>
];

export default routes
