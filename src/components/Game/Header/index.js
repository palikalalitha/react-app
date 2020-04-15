import React from "react"
import GameField from "../GameField"
import { observer } from "mobx-react"
import { GameContainer, Navbar, ThemeButtton } from "./styles.js"
@observer
class Header extends React.Component {

    onChangeSelectedTheme = () => {

    }
    render() {
        return (
            <div>
            Header
            <GameContainer>
            <h1>TopLevel: 0</h1>
            <Navbar>
            <h2>Level: 0</h2>
            <ThemeButtton onClick={this.onChangeSelectedTheme}>Mode: Light</ThemeButtton></Navbar>
            </GameContainer>
            
            <GameField/>
         </div>)
    }
}
export default Header
