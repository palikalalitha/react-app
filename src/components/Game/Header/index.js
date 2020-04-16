import React from "react"
import { observer } from "mobx-react"
import themeStore from "../../../stores/GameThemeStore/"
import GameField from "../GameField"
import { GameContainer, Navbar, ThemeButtton, TopdLevel } from "./styles.js"

@observer
class Header extends React.Component {
    getSelectedTheme = () => {
        return themeStore.selectedTheme
    }
    onChangeSelectedTheme = () => {
        themeStore.setCurrentTheme()
    }
    render() {
        const { level, topLevel, currentLevelGridCells, selectedTheme } = this.props
        return (
            <div>
            <GameContainer>
            <TopdLevel>TopLevel: {topLevel}</TopdLevel>
            <Navbar>
            <h1>Level: {level}</h1>
            <ThemeButtton selectedTheme={selectedTheme} onClick={this.onChangeSelectedTheme}>Mode: {this.getSelectedTheme()}</ThemeButtton></Navbar>
            </GameContainer>
            <GameField currentLevelGridCells={currentLevelGridCells}/>
         </div>)
    }
}
export default Header
