import React from "react"
import { observer } from "mobx-react"
import {
    CartItemContainer,
    RemoveItemButton,
    ProductImage,
    ProductDescriptionContainer,
    ProductTitle,
    ProductStyle,
    ProductQuantity,
    ProductPrice
}
from "./styledComponents.js"
@observer
class CartItem extends React.Component {
    onRemoveCartItem = () => {
        const { onRemoveCartItem, cartItemId } = this.props
        onRemoveCartItem(cartItemId)
    }
    render() {
        const { productId, getProductDetailsById, quantity } = this.props
        const productDetails = getProductDetailsById(productId)
        const { image, title, style, price, currencyFormat } = productDetails[0]
        return (
            <div>
             <hr/>
            <CartItemContainer>
               <RemoveItemButton  data-testid='remove-cart-item' onClick={this.onRemoveCartItem}>X</RemoveItemButton>
               <ProductImage src={image}/>
                <ProductDescriptionContainer>
                   <ProductTitle>
                   {title}
                   </ProductTitle>
                   <ProductStyle>{style}
                   </ProductStyle>
                   <ProductQuantity>Quantity :{quantity}</ProductQuantity>
                 </ProductDescriptionContainer>
                 <ProductPrice>{currencyFormat} {price}
                 </ProductPrice>
            </CartItemContainer>
            </div>)

    }
}
export default CartItem
