import React from "react"
import Cell from "../Cell"
import gameStore from "../../../stores/GameStore"
import { observer } from "mobx-react"
@observer
class GameField extends React.Component {

    render() {
        const length = gameStore.currentLevelGridCells
        return (
            <div>
            <button onClick={gameStore.goToNextLevelAndUpdateCells}>Click</button>
            <div style={{display:"flex",flexWrap:"wrap",border:"1px solid black",width:"300px",margin:"20px"}}>
            {gameStore.currentLevelGridCells.map(eachCell => 
            <Cell key={eachCell.id}e eachCell={eachCell}/>)}
            </div>
         </div>)
    }
}
export default GameField
