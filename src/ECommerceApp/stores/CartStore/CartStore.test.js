import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL
}
from "@ib/api-constants";
import getProductsResponse from "../../fixtures/getProductsResponse.json";

import ProductService from "../../services/ProductService/ProductServiceAPI.js"
import ProductStore from "../ProductStore/"
import CartStore from "."

describe("cart store test", () => {
    let productService
    let productStore
    let cartStore
    beforeEach(() => {
        productService = new ProductService
        productStore = new ProductStore(productService)
        cartStore=new CartStore(productStore)
    })

    it("should test cart store initialising state", () => {
        expect(cartStore.cartProductList).toStrictEqual(new Array)
        expect(cartStore.productStore).toStrictEqual(productStore)
        
    });
    it("should test add cart function",()=>
    {
        cartStore.onClickAddToCart(12)
        cartStore.onClickAddToCart(12)
        expect(cartStore.noOfProductsInCart).toBe(1)
     cartStore.onClickAddToCart(1)
     expect(cartStore.noOfProductsInCart).toBe(2)
       
    } )
    it("should test car amount",()=>
    {
       const testProducts=getProductsResponse
        productStore.setProductListResponse(testProducts)
        cartStore.onClickAddToCart(12)
        expect(cartStore.getProductDetailsById(12)[0]).toEqual(testProducts[0])      
        expect(cartStore.noOfProductsInCart).toBe(1)
        expect(cartStore.totalCartAmount).toBe("845.24")   
        cartStore.onClickAddToCart(12)
        //cartStore.onClickAddToCart()
        expect(cartStore.noOfProductsInCart).toBe(1)
        expect(cartStore.totalCartAmount).toEqual("1690.48")
        cartStore.onClickAddToCart(1)
        expect(cartStore.noOfProductsInCart).toBe(2)
        const id=cartStore.cartProductList[0].cartItemId
        cartStore.onRemoveCartItem(id)
        expect(cartStore.noOfProductsInCart).toBe(1)
        //cartStore.clearCart()
        //expect(cartStore.cartProductList).toStrictEqual(new Array())
     //expect(cartStore.totalCartAmount).toBe("1690.48")

      })
   })
