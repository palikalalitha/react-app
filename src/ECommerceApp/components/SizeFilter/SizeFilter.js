import React from "react"
import { withRouter } from "react-router-dom"
import { observable } from "mobx"
import { observer } from "mobx-react"

import authStore from "../../../Authentication/stores/AuthStore/index"
import productStore from "../../stores/ProductStore/index"
import { SizeFilterContainer, Heading, Button, ExtraSmallSizeButton, SmallSizeButton, LargeButton, MediumSizeButton, ExtraLargeButton } from "./styledComponents.js"


@observer
class SizeFilter extends React.Component {
    @observable isSelected
    constructor() {
        super()
        // this.isSelected = false
    }
    onclickSelectSize = (event) => {
        const { onSelectSize } = this.props
        //this.isSelected = !this.isSelected
        onSelectSize(event.target.value)
    }

    render() {
        return (
            <SizeFilterContainer>
            <Heading>
                Sizes:
            </Heading>
            <ExtraSmallSizeButton onClick={this.onclickSelectSize} value="XS">XS</ExtraSmallSizeButton>
            <SmallSizeButton  onClick={this.onclickSelectSize} value="S">S</SmallSizeButton>
            <MediumSizeButton   onClick={this.onclickSelectSize} value="M">M</MediumSizeButton>
            <LargeButton onClick={this.onclickSelectSize} value="L">L</LargeButton>
            <ExtraLargeButton   onClick={this.onclickSelectSize} value="XL">XL</ExtraLargeButton>
            <Button    onClick={this.onclickSelectSize} value="XXL">XXL</Button>
            </SizeFilterContainer>)
    }

}
export default SizeFilter
