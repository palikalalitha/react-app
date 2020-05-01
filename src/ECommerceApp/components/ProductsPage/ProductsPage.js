import React from "react"
import LazyLoad from 'react-lazyload';
//import MyComponent from './MyComponent';

import { withRouter, Redirect } from "react-router-dom"
import { observer } from "mobx-react"
import { observable } from "mobx"
import LoadingWrapperWithFailure from "../../../common/LoadingWrapperWithFailure"
import { getAccessToken } from "../../utils/StorageUtils.js"
import authStore from "../../../Authentication/stores/AuthStore/index"
import productStore from "../../stores/ProductStore/index"
import cartStore from "../../stores/CartStore/index"

import { SizeFilter } from "../SizeFilter/index"
import { ProductList } from "../ProductList/index"
import { ProductCart } from "../ProductCart/index"
import { Header } from "../Header/index"
import {
    EcommerceContainer,
    SignOutButton,
    ProductsContainer,
    Products

}
from "./styledComponents.js"

@observer
class ProductsPage extends React.Component {
    @observable userToken
    componentDidMount() {
        this.userToken = getAccessToken()
        this.doNetworkCalls()
    }
    doNetworkCalls() {
        productStore.getProductList();
    }

    getProducts = () => {
        return productStore.productList
    }
    onSelectSize = (size) => {
        const { onSelectSize } = productStore
        onSelectSize(size)
    }
    OnClickSignOut = () => {
        const { history } = this.props
        authStore.userSignOut()
        history.replace("/ecommerce-store/sign-in/")
        productStore.init()
    }
    onSelectSortBy = (order) => {
        const { onChangeSortBy } = productStore
        onChangeSortBy(order)
    }
    addCart = (productId) => {
        const { onClickAddToCart } = cartStore
        onClickAddToCart(productId)
    }
    renderSuccessUI = observer(() => {
        const productsCount = productStore.totalNoOfProductsDisplayed
        const productList = productStore.sortedAndFilteredProducts
        return <div>
        <ProductList onClickAddToCart={this.addCart} 
                     onSelectSortBy={this.onSelectSortBy} productsCount={productsCount} 
                     productList={this.getProducts()}/>
                     </div>


    })

    render() {
        const { getProductListAPIStatus, sortedAndFilteredProducts,sizeFilter, totalNoOfProductsDisplayed, getProductListAPIError, onSelectSize } = productStore;
        const productsCount = totalNoOfProductsDisplayed
        return (
            <EcommerceContainer>
                <SignOutButton onClick={this.OnClickSignOut}>SignOut</SignOutButton>
                <ProductCart cartStore={cartStore}/>
                <ProductsContainer>
                    <SizeFilter onSelectSize={this.onSelectSize} sizeFilter={sizeFilter}/>
                    <Products>
                        <Header productsCount={productsCount} onSelectSortBy={this.onSelectSortBy}/>
                          <LoadingWrapperWithFailure apiStatus={getProductListAPIStatus}
                            apiError={getProductListAPIError} onRetryClick={this.doNetworkCalls}
                            renderSuccessUI={this.renderSuccessUI}/>
                    </Products>
                </ProductsContainer>
            </EcommerceContainer>)
    }

}
export default withRouter(ProductsPage)
