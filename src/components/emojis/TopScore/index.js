import React from "react"
import styled from '@emotion/styled'
//import { Theme } from "./Theme/index.js"
class TopScore extends React.Component {
    render() {
        return (
            <div>
            <div>Topscore:{this.props.topScore}</div>
            </div>
        )
    }
}
export { TopScore }
