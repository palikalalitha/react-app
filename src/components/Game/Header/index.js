import React from "react"
import { observer } from "mobx-react"
import themeStore from "../../../stores/GameThemeStore/"

import { GameContainer, Navbar, ThemeButtton, TopdLevel, Level } from "./styles.js"

@observer
class Header extends React.Component {
    onChangeSelectedTheme = () => {
        themeStore.setCurrentTheme()
    }
    render() {
        const { level, topLevel, gridWidth, selectedTheme } = this.props
        return (
            <GameContainer>
                <TopdLevel>TopLevel: {topLevel}</TopdLevel>
                <Navbar gridWidth={gridWidth}>
                <Level>Level: {level}</Level>
                <ThemeButtton selectedTheme={selectedTheme}  onClick={this.onChangeSelectedTheme}>
                Mode:{selectedTheme.name} </ThemeButtton>
                </Navbar>
            </GameContainer>)
    }
}
export default Header
