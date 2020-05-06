import { observable, action, computed } from "mobx"

import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"
import { API_INITIAL } from "@ib/api-constants"
import Product from "../models/Product/Product.js"

let products = [];
class ProductStore {
    @observable productList
    @observable dummyPorducts
    @observable getProductListAPIStatus
    @observable getProductListAPIError
    @observable sizeFilter
    @observable sortBy
    @observable list
    productsAPIService

    constructor(productService) {
        this.productsAPIService = productService
        this.init()
    }
    init() {
        this.getProductListAPIStatus = API_INITIAL
        this.getProductListAPIError = null
        this.productList = []
        this.list = []
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
        response.map(eachProduct => this.productList.push(new Product(eachProduct)))
        this.dummyPorducts = this.productList
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
        let list = [...this.productList]
        // switch (order) {
        //     case "ASCENDING":
        //         list.sort((a, b) => a.price - b.price);
        //         this.productList = list
        //         break;
        //     case "DESCENDING":
        //         list.sort((a, b) => b.price - a.price)
        //         this.productList = list
        //         break;
        // }

    }

    @action.bound
    onSelectSize(size) {
        if (this.sizeFilter.includes(size)) {
            this.sizeFilter.remove(size)
        }
        else {
            this.sizeFilter.push(size)
        }
        //this.productList = this.updateproducts()

    }
    @action.bound
    updateproducts() {
        // let list = this.productList.filter(eachProduct =>
        //     (eachProduct.availableSizes.filter(eachAvilableSize =>
        //         (this.sizeFilter.includes(eachAvilableSize)))).length > 0)

        products = [...this.productList]
        let list = []
        this.sizeFilter.filter(eachSize => {
            products.filter(eachProduct => {
                let sizes = eachProduct.availableSizes
                sizes.filter(eachAvilableSize => {
                    if (eachSize === eachAvilableSize) {
                        if (!(list.includes(eachProduct))) {
                            list.push(eachProduct)
                        }
                    }
                })

            })
        })
        return list

        // if (this.sizeFilter.length < 1) {
        //     return this.dummyPorducts
        // }

        // else {

        // }
    }
    @computed
    get products() {
        let list = this.productList
        if (this.sizeFilter.length === 0) {
            list = [...this.productList]
        }
        else {
            list = list.filter(eachProduct => (eachProduct.availableSizes.filter(eachAvilableSize =>
                (this.sizeFilter.includes(eachAvilableSize)))).length > 0)
        }
        if (this.sortBy === "DESCENDING") {
            list.sort(function(a, b) { return b.price - a.price })
            console.log("In desc", list)

        }
        else if (this.sortBy === "ASCENDING") {
            list.sort(function(a, b) { return a.price - b.price })
        }
        return list

    }
    @computed
    get sortedAndFilteredProducts() {
        return this.products
        // return this.products
        // const { sortBy, sizeFilter } = this
        // if (this.sortBy === "select" && this.sizeFilter.length === 0) {
        //     return this.dummyPorducts
        // }
        // else if (this.sortBy === "DESCENDING" && this.sizeFilter.length > 1) {
        //     //this.updateproducts()
        //     return this.updateproducts().slice().sort(function(a, b) { return b.price - a.price })
        // }
        // else if (this.sortBy === "ASCENDING" && this.sizeFilter.length > 1) {
        //     this.updateproducts()
        //     return this.productList.slice().sort(function(a, b) { a.price - b.price })
        // }
        // else if (sortBy === "select" && this.sizeFilter.length > 1) {
        //     return this.updateproducts()
        // }
    }
    @computed
    get totalNoOfProductsDisplayed() {
        return this.products.length
    }

}
export default ProductStore
