import { observable, action, computed } from "mobx"

import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"
import { API_INITIAL } from "@ib/api-constants"
import Product from "../models/Product/Product.js"

let products = [];
let list = []
class ProductStore {
    @observable productList
    @observable dummyPorducts
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
        switch (order) {
            case "ASCENDING":
                list.sort((a, b) => a.price - b.price);
                this.productList = list
                break;
            case "DESCENDING":
                list.sort((a, b) => b.price - a.price)
                this.productList = list
                break;
        }

    }

    @action.bound
    onSelectSize(size) {
        if (this.sizeFilter.includes(size)) {
            this.sizeFilter.remove(size)
        }
        else {
            this.sizeFilter.push(size)
        }
        this.productList = this.updateproducts()

    }
    @action.bound
    updateproducts() {
        products = [...this.dummyPorducts]
        list = []
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
        // list = this.productList.filter(eachProduct => {
        //     eachProduct.availableSizes.filter(eachAvilableSize =>
        //         this.sizeFilter.includes(eachAvilableSize).length)
        // })
        // console.log("list", list, list.length)
        // return list

        if (this.sizeFilter.length < 1) {
            return this.dummyPorducts
        }
        else {
            return list
        }
    }
    @computed
    get products() {
        return this.productList

    }
    @computed
    get sortedAndFilteredProducts() {
        const { sortBy, sizeFilter } = this
        if (this.sortBy === "select" && this.sizeFilter.length === 0) {
            return this.dummyPorducts
        }
        else if (this.sortBy === "DESCENDING" && this.sizeFilter.length > 1) {
            //this.updateproducts()
            return this.updateproducts().slice().sort((a, b) => b.price - a.price)
        }
        else if (this.sortBy === "ASCENDING" && this.sizeFilter.length > 1) {
            this.updateproducts()
            return this.productList.slice().sort((a, b) => a.price - b.price)
        }
        else if (sortBy === "select" && this.sizeFilter.length > 1) {
            return this.updateproducts()
        }
    }
    @computed
    get totalNoOfProductsDisplayed() {
        return this.productList.length
    }

}
export default ProductStore
