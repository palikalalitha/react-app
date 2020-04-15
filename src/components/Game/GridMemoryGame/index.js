import React from "react"
import Header from "../Header"
import { observer } from "mobx-react"
import gameStore from "../../../stores/GameStore"
@observer
class GridMemoryGame extends React.Component {
    constructor(props) {
        super(props)
        gameStore.setGridCells()
    }
    render() {
        return (
            <div>
            Game
         <Header/>
         </div>)
    }
}
export default GridMemoryGame
