import { observable, action } from "mobx"
class CartItem {
    @observable cartItemId
    @observable productId
    @observable quantity
    constructor(productId) {
        this.cartItemId = Date.now()
        this.productId = productId
        this.quantity = 1
    }

    @action.bound
    incrementQuantity() {
        this.quantity++
        }
}
export default CartItem
