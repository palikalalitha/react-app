import { observable, action, computed } from "mobx"

import productStore from "../ProductStore/index"
import CartItem from "../models/CartItem/CartItem.js"
class CartStore {
    @observable cartProductList
    @observable productStore
    constructor() {
        this.init()
    }
    init() {
        this.productStore = productStore
        this.cartProductList = []
    }
    @action.bound
    onClickAddToCart(productId) {
        
        if (this.cartProductList.some(each => each.productId === productId)) {
            let index = this.cartProductList.findIndex(cart => cart.productId === productId)
            this.cartProductList[index].incrementQuantity()
        }
        else {
            this.cartProductList.push(new CartItem(productId))
        }
    }
    @action.bound
    onRemoveCartItem(id) {
        let cartIndex = this.cartProductList.findIndex(cart => cart.cartItemId === id)
        this.cartProductList.remove(this.cartProductList[cartIndex])
    }
    @action.bound
    clearCart() {
        alert("Your products will be delvered in 3 days...")
        this.cartProductList = []
    }
    @action.bound
    getProductDetailsById(id) {
        const { productList } = this.productStore
        return productList.filter(eachProduct => eachProduct.productId === id)
    }
    @computed
    get totalCartAmount() {
        let cartAmount = 0
        this.cartProductList.map(eachCart => {
            let cartDetails = this.getProductDetailsById(eachCart.productId)
            let price = cartDetails[0].price
            console.log(eachCart.quantity)
            cartAmount += eachCart.quantity * price
        })
        return (cartAmount.toFixed(1))
    }
    @computed
    get noOfProductsInCart() {
        return this.cartProductList.length
    }
}
export default CartStore
