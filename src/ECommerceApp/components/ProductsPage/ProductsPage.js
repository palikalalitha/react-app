import React from "react"
import { observer } from "mobx-react"
import LoadingWrapperWithFailure from "../../../common/LoadingWrapperWithFailure"

import { SizeFilter } from "../SizeFilter/index"
import { ProductCart } from "../ProductCart/index"
import { Header } from "../Header/index"

import {
    EcommerceContainer,
    SignOutButton,
    ProductsContainer,
    Products

}
from "./styledComponents.js"

@observer
class ProductsPage extends React.Component {
    render() {
        const {
            onSelectSize,
            onClickSignOut,
            onSelectSortBy,
            renderSuccessUI,
            cartStore,
            doNetworkCalls,
            getProductListAPIStatus,
            sizeFilter,
            totalNoOfProductsDisplayed,
            getProductListAPIError,


        } = this.props
        const productsCount = totalNoOfProductsDisplayed
        return (
            <EcommerceContainer>
                <SignOutButton onClick={onClickSignOut} type="button">Sign Out</SignOutButton>
                <ProductCart cartStore={cartStore}/>
                <ProductsContainer>
                    <SizeFilter onSelectSize={onSelectSize} sizeFilter={sizeFilter}/>
                    <Products>
                        <Header productsCount={productsCount} onSelectSortBy={onSelectSortBy}/>
                          <LoadingWrapperWithFailure apiStatus={getProductListAPIStatus}
                            apiError={getProductListAPIError} onRetryClick={doNetworkCalls}
                            renderSuccessUI={renderSuccessUI}/>
                    </Products>
                </ProductsContainer>
            </EcommerceContainer>)
    }

}
export { ProductsPage }
