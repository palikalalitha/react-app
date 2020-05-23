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
import Pagination from "../../../common/components/Pagination/Pagination"
///Pagination"

@observer
class ProductsPage extends React.Component {
    onClickToChangePages=()=>
    {
        console.log("hii")
    }
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
            totalPages,
            navigateNextPage,
            currentPage,
            navigatePrevPage
        } = this.props
        const productsCount = totalNoOfProductsDisplayed
        return (
            <EcommerceContainer>
                <SignOutButton onClick={onClickSignOut} type="button">Sign Out</SignOutButton>
                <ProductCart cartStore={cartStore}/>
                <ProductsContainer>
                    <SizeFilter onSelectSize={onSelectSize} sizeFilter={sizeFilter}/>
                    <Products>
                        <Header productsCount={productsCount} status={getProductListAPIStatus} onSelectSortBy={onSelectSortBy}/>
                          <LoadingWrapperWithFailure apiStatus={getProductListAPIStatus}
                            apiError={getProductListAPIError} onRetryClick={doNetworkCalls}
                            renderSuccessUI={renderSuccessUI}/>
                        <Pagination 
                        currentPage={currentPage}
                        totalPages={totalPages} 
                        navigatePrevPage={navigatePrevPage}
                         navigateNextPage={navigateNextPage}
                    onClickToChangePage={this.onClickToChangePages}/> 
                    </Products>
                </ProductsContainer>
            </EcommerceContainer>)
    }

}
export { ProductsPage }
