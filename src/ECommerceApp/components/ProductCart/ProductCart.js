import React from "react"
import { observable } from "mobx"
import { observer } from "mobx-react"

import { CartList } from "../CartList/index"
import { SubTotal } from "../SubTotal/index"
import {
    CartContainer,
    CartCloseButton,
    CartItemsContainer,
    CartImageHeader,
    CartImageContainer,
    CartImage,
    CartItemsCount,
    CartHeading,
    CartView,
    CartImageView,

    CartItemsCount1
}
from "./styledComponents.js"
import cart from "./cart.svg"

@observer
class ProductCart extends React.Component {
    @observable shouldDisplayCart
    constructor() {
        super()
        this.shouldDisplayCart = false
    }
    showCart = () => {
        this.shouldDisplayCart = true
    }

    hideCart = () => {
        this.shouldDisplayCart = false
    }

    render() {
        const { cartProductList, noOfProductsInCart, onRemoveCartItem, getProductDetailsById, totalCartAmount, clearCart } = this.props.cartStore
        const cartLength = noOfProductsInCart
        const total = totalCartAmount
        console.log(this.shouldDisplayCart)
        return (
            <CartView>
             {this.shouldDisplayCart?
             <div className="h-screen flex">
              <CartContainer >
                <CartCloseButton data-testid='cart-close-button' onClick={this.hideCart}>X</CartCloseButton>
                <CartItemsContainer>   
                    <CartImageHeader>
                        <CartImageContainer>
                        <span>
                        <CartImage src={cart} alt="cart" />
                        </span>
                            <CartItemsCount1>{cartLength}</CartItemsCount1>
                        </CartImageContainer>
                        <CartHeading>Cart</CartHeading>
                    </CartImageHeader>
                    <CartList cartProductList={cartProductList} cartLength={cartLength}
                    getProductDetailsById={getProductDetailsById} onRemoveCartItem={onRemoveCartItem}/>
                    </CartItemsContainer>
               </CartContainer>
                 <SubTotal total={total} clearCart={clearCart}/>
              
               </div>
               :<CartImageView  data-testid='cart-open-button' onClick={this.showCart}>
                        <span>
                             <CartImage src={cart} alt="cart" />
                        </span>
                        <CartItemsCount>{cartLength}</CartItemsCount>
                </CartImageView>}
                </CartView>
        )

    }
}
export default ProductCart
