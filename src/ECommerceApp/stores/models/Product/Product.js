import React from "react"
import { observable, action } from "mobx"
//import { observer } from "mobx-react"
class Product {
    // [{ "availableSizes": ["S", "XS"],
    //  "currencyFormat": "₹", 
    //  "currencyId": "USD", 
    //  "description": "4 MSL", 
    //  "id": 12, "installments": 9,
    //   "isFreeShipping": true, 
    //   "price": 845.24, 
    //   "sku": 12064273040195392,
    //    "style": "Black with custom print",
    //     "title": "Cat Tee Black T-Shirt", 
    //     "image": "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg" },

    productId
    @observable availableSizes
    @observable currencyFormat
    @observable currencyId
    @observable description
    @observable installments
    @observable isFreeShipping
    @observable price
    @observable style
    @observable title
    @observable image
    constructor(productList) {
        const { availableSizes, currencyFormat, currencyId, description, id, image, installments, isFreeShipping, price, sku, style, title } = productList
        this.availableSizes = availableSizes
        this.currencyFormat = currencyFormat
        this.currencyId = currencyId
        this.description = description
        this.installments = installments
        this.isFreeShipping = isFreeShipping,
            this.price = price
        this.id = id
        this.image = image
        this.sku = sku
        this.style = style
        this.title = title
    }
}
export default Product
