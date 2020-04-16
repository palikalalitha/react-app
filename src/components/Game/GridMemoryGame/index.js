import React from "react"
import { observer } from "mobx-react"

import gameStore from "../../../stores/GameStore"
import themeStore from "../../../stores/GameThemeStore"
import Header from "../Header"
import { GameContainer } from "./styles.js"

@observer
class GridMemoryGame extends React.Component {
    constructor(props) {
        super(props)
        gameStore.goToInitialLevelAndUpdateCells()
    }
    render() {
        const { level, topLevel, currentLevelGridCells } = gameStore
        const selectedTheme=themeStore.selectedTheme
        return (
            <GameContainer selectedTheme={selectedTheme}>
            <Header selectedTheme={selectedTheme} level={level} topLevel={topLevel} currentLevelGridCells={currentLevelGridCells}/>
            </GameContainer>)
    }
}
export default GridMemoryGame
