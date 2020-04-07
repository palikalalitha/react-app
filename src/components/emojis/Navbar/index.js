import React from "react"
import Theme from "../Theme/index.js"
import Reset from "../Reset"
import { EmojiHeader } from "../emojisStyles.js"

function Header(props) {
    const { score, topScore, onChangeTheme, selectedTheme, resetGame } = props
    return (
        <div fixed="top">
            <EmojiHeader selectedTheme={selectedTheme}>
            <h1 className="m-1 p-2">Emoji Game</h1>
            <div className="flex justify-between">
                <h1 className="m-1 p-2">Score: {score}</h1>
                <h1 className="m-1 p-2 ">TopScore: {topScore}</h1>
                <Reset selectedTheme={selectedTheme} resetGame={resetGame}/>
                <Theme onChangeTheme={onChangeTheme} selectedTheme={selectedTheme}/>
            </div>
            </EmojiHeader>
            </div>)
}
export default Header
