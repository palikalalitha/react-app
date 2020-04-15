import React from "react"
import GameField from "../GameField"
import { observer } from "mobx-react"
import { GameContainer, Navbar, ThemeButtton } from "./styles.js"
//import themeStore from "../../../stores/ThemeStore/"
@observer
class Header extends React.Component {
    render() {
        return (
            <div>
            Header
            <GameContainer>
            <h1>TopLevel: 0</h1>
            <Navbar>
            <h2>Level: 0</h2>
            <ThemeButtton onClick={this.onChangeSelectedTheme}>Mode:</ThemeButtton></Navbar>
            </GameContainer>
            
            <GameField/>
         </div>)
    }
}
export default Header
