import React from "react"
import { observer } from "mobx-react"
import { observable } from "mobx"
import gameStore from "../../../stores/GameStore"
import { Cells1, Cells2, CellContainer } from "./styles.js"
const spaceBetweenCellsSize = 8
const hiddenCellsTimer = 3000
@observer
class Cell extends React.Component {
    @observable shouldShowHiddenCells
    @observable isClickedOnCell
    @observable isDisable
    constructor(props) {
        super(props)
        this.isDisable = "none"
        this.shouldShowHiddenCells = this.props.eachCell.isHidden
        this.isClickedOnCell = false
    }
    onClick = () => {
        const { eachCell } = this.props
        gameStore.onCellClick(eachCell)
        this.isClickedOnCell = true
        this.shouldShowHiddenCells = eachCell.isHidden
        this.isDisable = "none"
    }
    componentDidMount() {
        setTimeout(() => { this.isClickedOnCell = false, this.isDisable = "auto", this.shouldShowHiddenCells = false }, hiddenCellsTimer)
    }
    render() {
        const { eachCell, selectedTheme, gridWidth, gridSize } = this.props
        const width = (gridWidth / gridSize) - spaceBetweenCellsSize
        return (
            <CellContainer selectedTheme={selectedTheme} gridWidth={width} isDisable={this.isDisable} onClick={this.onClick}>
            <Cells1 gridWidth={width} selectedTheme={selectedTheme} isClicked={eachCell.isHidden&&this.shouldShowHiddenCells}>
            </Cells1>
            <Cells2 gridWidth={width}  selectedTheme={selectedTheme} isClicked={eachCell.isHidden===false&&this.isClickedOnCell}>
            </Cells2>
            </CellContainer>)
    }
}
export default Cell
