import React from "react"
import { observer } from "mobx-react"
import { observable, action } from "mobx"
import gameStore from "../../../stores/GameStore"

@observer
class Cell extends React.Component {
    @observable shouldShowHiddenCells = this.props.eachCell.isHidden
    @observable isClickedOnCell

    @action.bound
    onClickCell() {
        gameStore.onCellClick(this.props.eachCell)
        this.isClickedOnCell = this.props.eachCell.isHidden
    }
    componentDidMount() {
        //  setTimeout(() => { this.isClickedOnCell = !this.isClickedOnCell }, 3000)
    }
    render() {
        const { eachCell } = this.props
        return (
            <div>
            <button  style={{border:"1px solid red",width:"80px",height:"60px"}} className={this.isClickedOnCell?"bg-green-400":"bg-black-400"} onClick={this.onClickCell}></button>
    </div>)
    }
}
export default Cell
