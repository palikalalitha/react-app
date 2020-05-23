import { observable, action, computed } from "mobx"
import React from 'react';
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"
import { API_INITIAL } from "@ib/api-constants"
import Product from "../models/Product/Product.js"

class ProductStore {
    @observable productList;
    @observable getProductListAPIStatus;
    @observable getProductListAPIError;
    @observable sizeFilter;
    @observable sortBy;
    @observable currentPage;
    @observable totalPages;
    pageLimit=4;
    offset=0;
    productsAPIService
    constructor(productService) {
        this.productsAPIService = productService
        this.init()
        //this.currentPage=Math.round(this.pageLimit/this.totalPages)
    }
    init() {
        this.getProductListAPIStatus = API_INITIAL
        this.getProductListAPIError = null
        this.productList = []
        this.sizeFilter = [],
        this.currentPage=1,
        this.totalPages="",
        this.sortBy = "select"
    }

    @action.bound
    getProductList() {
        const userResponse = this.productsAPIService.getProductsAPI(this.pageLimit,this.offset)
        return bindPromiseWithOnSuccess(userResponse)
            .to(this.setGetProductListAPIStatus, this.setProductListResponse)
            .catch(this.setGetProductListAPIError)
    }

    @action.bound
    setProductListResponse(response) {
        this.totalPages=Math.ceil(response.total/this.pageLimit)
        this.productList = response.products.map(eachProduct => { 
            return new Product(eachProduct) })
           
           
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
    navigateNextPage=()=>
    {
        if(this.currentPage<this.totalPages)
        {
            this.currentPage++;
            this.offset+=this.pageLimit
            this.getProductList();
        }
    

    }
    @action.bound
    navigatePrevPage=()=>
    {
        if(this.currentPage>1)
        {
        this.currentPage--;
        this.offset-=this.pageLimit
        this.getProductList();
        }

     
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
            products = this.productList.filter(eachProduct  => 
                (eachProduct.availableSizes.filter(eachAvilableSize => (this.sizeFilter.includes(eachAvilableSize)))).length > 0)
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
