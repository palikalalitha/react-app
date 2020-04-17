import React from "react"
import { observer } from "mobx-react"
import { GameResultContainer, PlayAgainButton, Greeets, LevelText } from "./styles.js"
import gameStore from "../../../stores/GameStore"

@observer
class GameResult extends React.Component {
    onPlayAgain = () => {
        gameStore.onPlayAgainClick()
    }
    render() {
        const { Level } = this.props
        return (
            <GameResultContainer>
            <LevelText>{Level}</LevelText>
            <Greeets>Congratulations! you completed all the levels.</Greeets>
            <PlayAgainButton onClick={this.onPlayAgain}>Play again</PlayAgainButton>
         </GameResultContainer>)
    }
}
export default GameResult
