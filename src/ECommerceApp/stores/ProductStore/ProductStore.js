import { observable, action, computed } from "mobx"

import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"
import { API_INITIAL } from "@ib/api-constants"
import Product from "../models/Product/Product.js"

class ProductStore {
    @observable productList
    @observable getProductListAPIStatus
    @observable getProductListAPIError
    @observable sizeFilter
    @observable sortBy

    productsAPIService

    constructor(productService) {
        this.productsAPIService = productService
        this.init()
    }
    init() {
        this.getProductListAPIStatus = API_INITIAL
        this.getProductListAPIError = null
        this.productList = []
        this.sizeFilter = [],
            this.sortBy = "select"
    }

    @action.bound
    getProductList() {
        const userResponse = this.productsAPIService.getProductsAPI()
        return bindPromiseWithOnSuccess(userResponse)
            .to(this.setGetProductListAPIStatus, this.setProductListResponse)
            .catch(this.setGetProductListAPIError)
    }

    @action.bound
    setProductListResponse(response) {

        this.productList = response.map(eachProduct => { return new Product(eachProduct) })

    }
    @action.bound
    setGetProductListAPIError(error) {
        this.getProductListAPIError = error
    }

    @action.bound
    setGetProductListAPIStatus(status) {
        this.getProductListAPIStatus = status
    }

    @action.bound
    onChangeSortBy(order) {
        this.sortBy = order
    }

    @action.bound
    onSelectSize(size) {
        if (this.sizeFilter.includes(size)) {
            this.sizeFilter.remove(size)
        }
        else {
            this.sizeFilter.push(size)
        }
    }
    @computed
    get products() {
        return this.sortedAndFilteredProducts
    }
    @computed
    get sortedAndFilteredProducts() {
        let products
        if (this.sizeFilter.length === 0) {
            products = [...this.productList]
        }
        else {
            products = this.productList.filter(eachProduct => (eachProduct.availableSizes.filter(eachAvilableSize =>
                (this.sizeFilter.includes(eachAvilableSize)))).length > 0)
        }
        if (this.sortBy === "DESCENDING") {
            products.sort((a, b) => b.price - a.price)
        }
        else if (this.sortBy === "ASCENDING") {
            products.sort((a, b) => a.price - b.price)
        }
        return products
    }
    @computed
    get totalNoOfProductsDisplayed() {
        return this.sortedAndFilteredProducts.length
    }

}
export default ProductStore
