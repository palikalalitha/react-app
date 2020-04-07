import React from "react"
import styled from '@emotion/styled'
import { ResetButton } from "../emojisStyles.js"

function Reset(props) {
    const { selectedTheme, resetGame } = props
    return (

        <div>
                <ResetButton selectedTheme={selectedTheme} onClick={resetGame}>Reset</ResetButton>
            </div>
    )
}
export default Reset
