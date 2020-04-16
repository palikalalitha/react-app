import React from "react"
import { observer } from "mobx-react"
import Cell from "../Cell"
//import gameStore from "../../../stores/GameStore"

@observer
class GameField extends React.Component {
    render() {
        const { currentLevelGridCells } = this.props
        return (
            <div>
            <div style={{display:"flex",flexWrap:"wrap",border:"1px solid black",width:"300px",margin:"20px"}}>
            {currentLevelGridCells.map(eachCell => 
            <Cell key={eachCell.id}e eachCell={eachCell}/>)}
            </div>
         </div>)
    }
}
export default GameField
