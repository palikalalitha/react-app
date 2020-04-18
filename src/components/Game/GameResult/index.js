import React from "react";
import { observer } from "mobx-react";

import gameStore from "../../../stores/GameStore";

import { GameResultContainer, PlayAgainButton, Greeets, LevelText } from "./styles.js"


@observer
class GameResult extends React.Component {
    onPlayAgain = () => {
        gameStore.onPlayAgainClick();
    }
    render() {
        const { level,gridWidth } = this.props;
        return (
            <GameResultContainer gridWidth={gridWidth}>
            <LevelText>{level}</LevelText>
            <Greeets>Congratulations! you completed all the levels.</Greeets>
            <PlayAgainButton gridWidth={gridWidth} onClick={this.onPlayAgain}>Play again</PlayAgainButton>
         </GameResultContainer>);
    }
}
export default GameResult;
