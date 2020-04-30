import React from "react"
import { useToasts } from 'react-toast-notifications'

import LazyLoad from 'react-lazyload';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    ProductContainer,
    ProductView,
    Products,
    FreeShippingView,
    ProductImageElement,
    ProductTitle,
    ProductPriceView,
    ProductCurrency,
    ProductPrice,
    InstallmentsView,
    AddCartButton

}
from "./styledComponents.js"
class Product extends React.Component {
    addToCart = () => {
        const { onClickAddToCart } = this.props
        const { productItem } = this.props;
        onClickAddToCart(productItem.productId)
        toast.warn("Addde to cart !", {
            position: toast.POSITION.BOTTOM_CENTER,
            // className: "text-center"
        });
    }

    render() {
        const { productItem } = this.props;
        const {
            currencyFormat,
            installmentsCount,
            isFreeShipping,
            price,
            title,
            imageURL,
            productId,
        } = productItem
        const installementAmount = (price / installmentsCount).toFixed(2)
        return (
            <LazyLoad height={20}> 
            <Products id={productId} >
            {isFreeShipping?<FreeShippingView>Free shipping</FreeShippingView>:""}
            <ProductImageElement src={imageURL} alt={title}/>
                    <ProductTitle>{title}</ProductTitle>
                    <ProductPriceView>
                        <ProductCurrency>{currencyFormat}</ProductCurrency>
                        <ProductPrice>{price}
                        </ProductPrice>
                    </ProductPriceView>
                    <InstallmentsView>
                  {installmentsCount!=0? `or ${installmentsCount} x ${currencyFormat} ${installementAmount}`:""}</InstallmentsView>
                    <AddCartButton onClick={this.addToCart}>
                    Add to cart 
                    </AddCartButton>
                 
                   </Products>
         </LazyLoad>)
    }

}
export default Product
