import React from "react"
import gameStore from "../../../stores/GameStore"
import { observer } from "mobx-react"
import {observable} from "mobx"
@observer
class Cell extends React.Component {
    @observable shouldShowHiddenCells
    @observable isClickedOnCell
    
    onClickCell = (item) => {
        gameStore.onCellClick(item)
    }
    render() {
        const { eachCell } = this.props
        return (
            <div>
            <button  style={{border:"1px solid red",width:"80px",height:"60px"}} className={eachCell.isHidden?"bg-green-400":"bg-black-400"} onClick={this.onClickCell.bind(this,eachCell)}></button>
            </div>)
    }
}
export default Cell
