import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import gameStore from "../../../stores/GameStore";
import { Cells1, Cells2, CellContainer } from "./styles.js";

const spaceBetweenCellsSize = 8;
const hiddenCellsTimer = 3000;
@observer
class Cell extends React.Component {
    @observable shouldShowHiddenCells
    @observable isClickedOnCell
    @observable isDisable
    @observable timer
    constructor(props) {
        super(props);
        const { isHidden } = this.props.eachCell;
        this.isDisable = "none";
        this.shouldShowHiddenCells = isHidden;
        this.isClickedOnCell = false;
    }
    onClick = () => {
        const { eachCell } = this.props;
        const { isHidden } = eachCell;
        gameStore.onCellClick(eachCell);
        this.isClickedOnCell = true;
        this.shouldShowHiddenCells = isHidden;
        this.isDisable = "none";
    }
    componentDidMount() {
        setTimeout(() => { this.isClickedOnCell = false, this.isDisable = "auto", this.shouldShowHiddenCells = false }, hiddenCellsTimer);
    }
    render() {

        const { eachCell, selectedTheme, gridWidth, gridSize } = this.props;
        const width = (gridWidth / gridSize) - spaceBetweenCellsSize;
        const { isHidden } = eachCell;
        const { shouldShowHiddenCells, isClickedOnCell, isDisable } = this;
        return (
            <div>
            <CellContainer selectedTheme={selectedTheme} gridWidth={width} isDisable={isDisable} onClick={this.onClick}>
            <Cells1 gridWidth={width} selectedTheme={selectedTheme} isClicked={isHidden && shouldShowHiddenCells}>
            </Cells1>
            <Cells2 gridWidth={width}  selectedTheme={selectedTheme} isClicked={isHidden===false&&isClickedOnCell}>
            </Cells2>
            </CellContainer>
            </div>);
    }
}
export default Cell;
