import React from "react"

import {
    PRODUCT_PATH
}
from "../constants/RouteConstants";
import { ProtectedRoute } from "./../../common/PortectedRoute/ProtectedRoute.js"
import { ProductRoute } from "./ProductRoute"
const routes = [
    <ProtectedRoute  path={PRODUCT_PATH} component = {ProductRoute}/>
];

export default routes
