import React from "react"
import { observable } from "mobx"
import { observer } from "mobx-react"
import { CheckOutButton } from "../CheckOutButton/index"

import {

    SubTotalContainer,
    SubTotalHeading,
    SubTotalAmount,
    Footer
}
from "./styledComponents.js"
@observer
class SubTotal extends React.Component {
    render() {
        const { total, clearCart } = this.props
        return (
            <Footer>
            <SubTotalContainer>
                <SubTotalHeading>
                    SUBTOTAL
                </SubTotalHeading>
                <SubTotalAmount>
                Rs {total}
                </SubTotalAmount>
            </SubTotalContainer>
            <CheckOutButton clearCart={clearCart} total={total}/>
            </Footer>
        )

    }
}
export default SubTotal
