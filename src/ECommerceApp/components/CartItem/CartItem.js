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
        const { imageURL, title, printStyle, price, currencyFormat } = productDetails[0]
        return (
            <div>
             <hr/>
            <CartItemContainer>
            
               <RemoveItemButton onClick={this.onRemoveCartItem}>X</RemoveItemButton>
              
               <ProductImage src={imageURL}/>
                <ProductDescriptionContainer>
                   <ProductTitle>
                   {title}
                   </ProductTitle>
                   <ProductStyle>{printStyle}
                   </ProductStyle>
                   <ProductQuantity>Quantity :{quantity}</ProductQuantity>
                 </ProductDescriptionContainer>
                 <ProductPrice>{currencyFormat} {price}
                 </ProductPrice>
                 
            </CartItemContainer>
</div>
        )

    }
}
export default CartItem
