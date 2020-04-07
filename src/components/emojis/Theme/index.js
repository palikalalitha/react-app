import React from "react"
import styled from '@emotion/styled'
import { ThemeButton } from "../emojisStyles.js"

function Theme(props) {
    const { selectedTheme, onChangeTheme } = props
    return (
        <div>
            <ThemeButton selectedTheme={selectedTheme} onClick={onChangeTheme}>{selectedTheme}
            </ThemeButton>
            </div>
    )
}
export default Theme
