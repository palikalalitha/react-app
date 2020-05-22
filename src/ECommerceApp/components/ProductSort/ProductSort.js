import React from "react"

import { Heading, Options } from "./styledComponents.js"
import SelectElement from "../../../common/components/selectElement/SelectElement.js"

class ProductSort extends React.Component {
    render() {
        const options=["ASCENDING","DESCENDING"]
        return (
            <div>
                <SelectElement status={this.props.status} label="Sort Price by" 
                onSelectSortBy={this.props.onSelectSortBy} options={options} />
           </div>)
    }

}
export default ProductSort
