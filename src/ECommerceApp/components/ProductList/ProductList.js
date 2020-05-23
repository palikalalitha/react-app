import React from "react"

import { Product } from "../Product/index"
import { ProductSort } from "../ProductSort/index"
import { toast, ToastContainer } from 'react-toastify';

import { ProductListContainer, ProductSortView, ProductContainer } from "./styledComponents.js"

class ProductList extends React.Component {
    render() {
        const { productList, productsCount, onSelectSortBy, onClickAddToCart } = this.props
        return (
            <ProductListContainer>
                    {productList.map(eachProduct=>
                    <Product key={Math.random()} onClickAddToCart={onClickAddToCart} 
                    productItem={eachProduct} />
                    )}
                   <ToastContainer/> 
            </ProductListContainer>
           
        )
    }

}
export default ProductList
