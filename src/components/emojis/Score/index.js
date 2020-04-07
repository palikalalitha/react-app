import React from "react"
import styled from '@emotion/styled'
import { Theme } from "../Theme/index.js"
class Score extends React.Component {
    render() {
        return (
            <div>
            <div>Score:{this.props.score}</div>
            </div>
        )
    }
}
export { Score }
