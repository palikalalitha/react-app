import React from "react"
import { observable } from "mobx"
import { observer } from "mobx-react"
import { CartItem } from "../CartItem/index"
import { SubTotal } from "../SubTotal/index"

import { CartListContainer, CartEmpty } from "./styledComponents.js"
@observer
class CartList extends React.Component {
    render() {
        const { cartProductList, onRemoveCartItem, getProductDetailsById, cartLength } = this.props
        return (
            <CartListContainer>
                  {cartLength===0?
                  <CartEmpty>Add some products in the cart</CartEmpty>:
                  cartProductList.map(eachItem =>
                    <CartItem key={eachItem.cartItemId} 
                    onRemoveCartItem={onRemoveCartItem}
                    getProductDetailsById={getProductDetailsById} 
                    productId={eachItem.productId} cartItemId={eachItem.cartItemId} quantity={eachItem.quantity}/>)}
            </CartListContainer>)

    }
}

export default CartList
