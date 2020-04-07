import React from "react"
import { WinorLoseContainer, Score, Lose, Win, PlayAgainButton } from "../emojisStyles.js"

function WinorLose(props) {
    const { score, gameStatus, selectedTheme, onPlayAgianClick } = props
    return (
        <WinorLoseContainer selectedTheme={selectedTheme}>
                <Score id={selectedTheme}>{score}</Score>
                {gameStatus==="Lose"?<Lose>You {gameStatus}!</Lose>:<Win>You {gameStatus}</Win>}
                <PlayAgainButton selectedTheme={selectedTheme} onClick={onPlayAgianClick}>Play Again
                </PlayAgainButton>
            </WinorLoseContainer>)
}
export default WinorLose
