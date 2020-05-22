import { create } from "apisauce"
import { networkCallWithApisauce } from "../../../utils/APIUtils"
import { apiMethods } from "../../../constants/APIConstants"

import { URL } from "../../constants/ProductsConstants.js"
import endPoints from "../endPoints.js"

class ProductService {
    api
    constructor() {
        this.api = create({
            baseURL: URL
        });
    }
    getProductsAPI(limit,offset) {
        return networkCallWithApisauce(
            this.api,
            `ecommerce/products?limit=${limit}&offset=${offset}`, {},
            apiMethods.get

        );
    }
}
export default ProductService
