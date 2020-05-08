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
        // this.props.productStore.init()
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
        console.log(this.getProducts())
        return <div>
        <ProductList onClickAddToCart={this.addCart} 
                     onSelectSortBy={this.onSelectSortBy} productsCount={productsCount} 
                     productList={this.getProducts()}/>
                     </div>

    })
    render() {
        const { cartStore } = this.props
        const { sizeFilter, getProductListAPIStatus, getProductListAPIError, totalNoOfProductsDisplayed } = this.props.productStore
        return (
            <ProductsPage 
        onSelectSize = { this.onSelectSize }
        onClickSignOut = { this.onClickSignOut }
        doNetworkCalls={this.doNetworkCalls}
        onSelectSortBy = { this.onSelectSortBy }
        renderSuccessUI={this.renderSuccessUI}
         sizeFilter={sizeFilter}
         getProductListAPIStatus={getProductListAPIStatus}
         getProductListAPIError={getProductListAPIError}
         cartStore={cartStore}
         totalNoOfProductsDisplayed={totalNoOfProductsDisplayed}/>)
    }

}
export default withRouter(ProductRoute)
