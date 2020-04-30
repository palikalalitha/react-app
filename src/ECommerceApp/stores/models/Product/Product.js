import React from "react"
import { observable, action } from "mobx"
//import { observer } from "mobx-react"
class Product {
    productId
    @observable availableSizes
    @observable currencyFormat
    @observable currencyId
    @observable description
    @observable installmentsCount
    @observable isFreeShipping
    @observable price
    @observable printStyle
    @observable title
    @observable imageURL
    constructor(productList) {
        const { availableSizes, currencyFormat, currencyId, description, id, image, installments, isFreeShipping, price, sku, style, title } = productList
        this.availableSizes = availableSizes
        this.currencyFormat = currencyFormat
        this.currencyId = currencyId
        this.description = description
        this.installmentsCount = installments
        this.isFreeShipping = isFreeShipping,
            this.price = price
        this.productId = id
        this.imageURL = image
        this.sku = sku
        this.printStyle = style
        this.title = title
    }
}
export default Product
