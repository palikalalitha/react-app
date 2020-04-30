import React from "react"

import { Heading, SelectContainer, Options } from "./styledComponents.js"
class ProductSort extends React.Component {
    onClickSort = (event) => {
        const { onSelectSortBy } = this.props
        onSelectSortBy(event.target.value)
    }
    render() {
        return (
            <div>
            <Heading>Sort price by:
            <SelectContainer onChange={this.onClickSort}>
                <option   value="select">Select</option>
                <Options  value="ASCENDING">
                Lowest to highest
                </Options>
                 <Options  value="DESCENDING">
                 Highest to lowest
                </Options>
            </SelectContainer>
            </Heading>
            </div>)
    }

}
export default ProductSort
