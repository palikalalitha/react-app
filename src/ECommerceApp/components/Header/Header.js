import React from "react"
import { observable } from "mobx"
import { observer } from "mobx-react"
import {
    ProductSortView
}
from "./styledComponents.js"
import { ProductSort } from "../ProductSort/index"

@observer
class Header extends React.Component {
    render() {
        const { productsCount, onSelectSortBy } = this.props
        return (
            <ProductSortView>
                     <h1>{productsCount} Product(s) found.</h1>
                     <ProductSort onSelectSortBy={onSelectSortBy}/>
                </ProductSortView>
        )

    }
}
export default Header
