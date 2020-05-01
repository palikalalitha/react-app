import React from "react"
import { withRouter } from "react-router-dom"
import { observable } from "mobx"
import { observer } from "mobx-react"

import authStore from "../../../Authentication/stores/AuthStore/index"
import productStore from "../../stores/ProductStore/index"
import { SizeFilterContainer, Heading, Button} from "./styledComponents.js"


@observer
class SizeFilter extends React.Component {
    constructor() {
        super()
        // this.isSelected = false
    }
    onclickSelectSize = (event) => {
        const { onSelectSize } = this.props
        onSelectSize(event.target.value)
    }

    render() {
        const { sizeFilter } = this.props
        return (
            <SizeFilterContainer>
            <Heading>
                Sizes:
            </Heading>
            <Button isSelected={sizeFilter.includes("XS")} onClick={this.onclickSelectSize} value="XS">XS</Button>
            <Button isSelected={sizeFilter.includes("S")}  onClick={this.onclickSelectSize} value="S">S</Button>
            <Button isSelected={sizeFilter.includes("M")}  onClick={this.onclickSelectSize} value="M">M</Button>
            <Button  isSelected={sizeFilter.includes("L")} onClick={this.onclickSelectSize} value="L">L</Button>
            <Button isSelected={sizeFilter.includes("XL")}   onClick={this.onclickSelectSize} value="XL">XL</Button>
            <Button isSelected={sizeFilter.includes("XXL")}   onClick={this.onclickSelectSize} value="XXL">XXL</Button>
            </SizeFilterContainer>)
    }

}
export default SizeFilter
