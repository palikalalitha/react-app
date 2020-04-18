import React from "react";
import { observer } from "mobx-react";

import Cell from "../Cell";
import GameFieldsContainer from "./styles.js";

@observer
class GameField extends React.Component {
    render() {
        const { currentLevelGridCells, level, selectedTheme, gridWidth, gridSize, hiddenCellCount } = this.props;

        return (
            <GameFieldsContainer level={level} gridWidth={gridWidth}>
            {currentLevelGridCells.map(eachCell =>
            <Cell key={eachCell.id} level={level} hiddenCellCount={hiddenCellCount} gridSize={gridSize}
            gridWidth={gridWidth} selectedTheme={selectedTheme} eachCell={eachCell}/>)}
            </GameFieldsContainer>);
    }
}
export default GameField;
