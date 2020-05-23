import React from "react"
import { withRouter } from "react-router-dom"
import { observer, inject } from "mobx-react"
import { ProductList } from "../../components/ProductList/index"
import { ProductsPage } from "../../components/ProductsPage"

@inject("authStore", "productStore", "cartStore")
@observer
class ProductRoute extends React.Component {
    componentDidMount() {
        this.doNetworkCalls()
    }
    doNetworkCalls() {
        this.props.productStore.getProductList();
    }

    getProducts = () => {
        const { products } = this.props.productStore
        return products
    }
    onSelectSize = (size) => {
        const { onSelectSize } = this.props.productStore
        onSelectSize(size)
    }
    onClickSignOut = () => {
        const { history } = this.props
        this.props.authStore.userSignOut()
        history.replace("/ecommerce-store/sign-in/")
    }
    onSelectSortBy = (order) => {
        const { onChangeSortBy } = this.props.productStore
        onChangeSortBy(order)
    }
    addCart = (productId) => {
        const { onClickAddToCart } = this.props.cartStore
        onClickAddToCart(productId)
    }
    renderSuccessUI = observer(() => {
        const productsCount = this.props.productStore.totalNoOfProductsDisplayed

        return (<ProductList onClickAddToCart={this.addCart} 
                     onSelectSortBy={this.onSelectSortBy} productsCount={productsCount} 
                     productList={this.getProducts()}/>)
                   

    })
    render() {
        const { cartStore } = this.props
        const { sizeFilter,navigatePrevPage, getProductListAPIStatus,totalPages, navigateNextPage,currentPage,getProductListAPIError, totalNoOfProductsDisplayed } = this.props.productStore
        return (
            <ProductsPage 
            totalPages={totalPages}
        onSelectSize = { this.onSelectSize }
        onClickSignOut = { this.onClickSignOut }
        doNetworkCalls={this.doNetworkCalls}
        onSelectSortBy = { this.onSelectSortBy }
        renderSuccessUI={this.renderSuccessUI}
         sizeFilter={sizeFilter}
         getProductListAPIStatus={getProductListAPIStatus}
         getProductListAPIError={getProductListAPIError}
         cartStore={cartStore}
         currentPage={currentPage}
         navigateNextPage={navigateNextPage}
         navigatePrevPage={navigatePrevPage}
         totalNoOfProductsDisplayed={totalNoOfProductsDisplayed}/>)
    }

}
export default withRouter(ProductRoute)
