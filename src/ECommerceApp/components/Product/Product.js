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
        onClickAddToCart(productItem.id)
        toast.info("Add to cart", {
            position: toast.POSITION.BOTTOM_CENTER,
            // className: "text-center"
        });
    }

    render() {
        const { productItem } = this.props;
        const {
            currencyFormat,
            installments,
            isFreeShipping,
            price,
            title,
            image,
            productId,
        } = productItem
        const installment = (price / installments).toFixed(2)
        return (
            <LazyLoad height={20}> 
            <Products  >
            {isFreeShipping?<FreeShippingView>Free shipping</FreeShippingView>:""}
            <ProductImageElement src={image} alt={title}/>
                    <ProductTitle>{title}</ProductTitle>
                    <ProductPriceView>
                        <ProductCurrency>{currencyFormat}</ProductCurrency>
                        <ProductPrice>{price}
                        </ProductPrice>
                    </ProductPriceView>
                    <InstallmentsView>
                  {installments!=0? `or ${installments} x 
                  ${currencyFormat} ${installment}`:""}</InstallmentsView>
                    <AddCartButton onClick={this.addToCart}>
                    Add to cart 
                    </AddCartButton>
                 
                   </Products>
         </LazyLoad>)
    }

}
export default Product
