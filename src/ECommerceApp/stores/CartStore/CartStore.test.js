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
    

    // it("should test product store fetching state", () => {
    //     const mockLoadingPromise = new Promise(function(resolve, reject) {});
    //     const mockSignInAPI = jest.fn();
    //     mockSignInAPI.mockReturnValue(mockLoadingPromise);
    //     productService.getProductsAPI = mockSignInAPI;

    //     productStore.getProductList()
    //     expect(productStore.getProductListAPIStatus).toBe(API_FETCHING)
    // })

    // it("should test product store success state", async() => {
    //     const mockSuccessPromise = new Promise(function(resolve, reject) {
    //         resolve(getProductsResponse);
    //     });
    //     const mockSignInAPI = jest.fn();
    //     mockSignInAPI.mockReturnValue(mockSuccessPromise);
    //     productService.getProductsAPI = mockSignInAPI;

    //     await productStore.getProductList()
    //     expect(productStore.productList.length).toBe(16)
    //     expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS)
    // })

    // it("should test product store failure state", async() => {
    //     const mockFailurePromise = new Promise(function(resolve, reject) {
    //         reject(new Error("error"));
    //     });

    //     const mockSignInAPI = jest.fn();
    //     mockSignInAPI.mockReturnValue(mockFailurePromise);
    //     productService.getProductsAPI = mockSignInAPI;

    //     await productStore.getProductList()
    //     expect(productStore.getProductListAPIStatus).toBe(API_FAILED)
    //     expect(productStore.getProductListAPIError).toBe("error");

    // })

    // it("should test sizes filter function", () => {
    //     productStore.onSelectSize("XS");
    //     expect(productStore.sizeFilter).toStrictEqual(["XS"]);
    //     productStore.onSelectSize("S");
    //     expect(productStore.sizeFilter).toStrictEqual(["XS", "S"]);
    //     productStore.onSelectSize("S");
    //     expect(productStore.sizeFilter).toStrictEqual(["XS"])

    // });
    // it("should test sort function", () => {
    //     productStore.sortBy = "ASCENDING";
    //     expect(productStore.sortBy).toStrictEqual("ASCENDING");

    // })
    // it("should test filtering products", async() => {
    //     productStore.productList = getProductsResponse;
    //     expect(productStore.products).toStrictEqual(getProductsResponse)
    //     productStore.onSelectSize("S");
    //     productStore.onSelectSize("XS");
    //     productStore.sortBy = "DESCENDING";
    //     expect(productStore.totalNoOfProductsDisplayed).toStrictEqual(5)
    // })
})
