import React from "react"
import { observer } from "mobx-react"

import gameStore from "../../../stores/GameStore"
import themeStore from "../../../stores/GameThemeStore"
import GridBox from "../GridBox.json"
import GameResult from "../GameResult"
import GameField from "../GameField"
import Header from "../Header"

import { GameContainer } from "./styles.js"

@observer
class GridMemoryGame extends React.Component {
    constructor(props) {
        super(props)
        gameStore.goToInitialLevelAndUpdateCells()
    }
    render() {
        const { level, topLevel, currentLevelGridCells, isGameCompleted } = gameStore
        const { gridWidth, hiddenCellCount, gridSize } = GridBox[level]
        const selectedTheme = themeStore.selectedTheme
        return (
            <GameContainer selectedTheme={selectedTheme}>
            <Header gridWidth={gridWidth} selectedTheme={selectedTheme}  level={level} topLevel={topLevel}/>
             {isGameCompleted?
                <GameResult selectedTheme={selectedTheme} Level={level}/>
                :<GameField level={level}  gridSize={gridSize} hiddenCellCount={hiddenCellCount} 
                gridWidth={gridWidth} selectedTheme={selectedTheme}
                currentLevelGridCells={currentLevelGridCells}/>}
            </GameContainer>)
    }
}
export default GridMemoryGame
