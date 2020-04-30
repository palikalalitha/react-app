import React from "react"
import { observable } from "mobx"
import { observer } from "mobx-react"

import {
    CheckOutButtonContainer
}
from "./styledComponents.js"
@observer
class CheckOutButton extends React.Component {
    clearCart = () => {
        const { clearCart, total } = this.props
        clearCart()
    }
    render() {
        return (
            <CheckOutButtonContainer onClick={this.clearCart} >
            CheckOutButton
            </CheckOutButtonContainer>
        )

    }
}
export default CheckOutButton
