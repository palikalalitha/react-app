import { observable, action } from "mobx"
import Cell from "../Model/Cell/"
const gridBox = [{
        gridSize: 3, // this means 3x3 grid
        hiddenCellCount: 3, // no. of hidden cells in this grid
        gridWidth: 300
    },
    {
        gridSize: 4, // this means 3x3 grid
        hiddenCellCount: 4, // no. of hidden cells in this grid
        gridWidth: 300
    },
    {
        gridSize: 5, // this means 3x3 grid
        hiddenCellCount: 5, // no. of hidden cells in this grid
        gridWidth: 300
    },
    {
        gridSize: 6, // this means 3x3 grid
        hiddenCellCount: 6, // no. of hidden cells in this grid
        gridWidth: 300
    },
    {
        gridSize: 7, // this means 3x3 grid
        hiddenCellCount: 7, // no. of hidden cells in this grid
        gridWidth: 300
    },

]



class GameStore {
    @observable level
    @observable topLevel
    @observable selectedCellsCount
    @observable currentLevelGridCells
    @observable isGameCompleted
    constructor() {
        this.level = 0
        this.topLevel = 0
        this.selectedCellsCount = 0
        this.currentLevelGridCells = []
        this.isGameCompleted = false
    }

    @action.bound
    onCellClick() {

    }
    @action.bound
    setGridCells() {
        const { gridSize, hiddenCellCount } = gridBox[this.level]
        console.log("grid size", gridSize)
        this.currentLevelGridCells = []
        for (let i = 0; i < gridSize * gridSize; i++) {
            this.currentLevelGridCells.push(new Cell(Date.now(), false))
        }
        console.log("level", this.level, this.currentLevelGridCells.length)
        this.currentLevelGridCells = this.currentLevelGridCells.slice().sort(() => Math.random() - 0.5);
        this.currentLevelGridCells.splice(hiddenCellCount)
        this.currentLevelGridCells.map(eachCell => {
            eachCell.isHidden = true
        })
        console.log("hiddenCellCount", this.currentLevelGridCells.length)
    }
    @action.bound
    goToNextLevelAndUpdateCells() {
        this.level += 1
        this.setGridCells()
    }
    @action.bound
    goToInitialLevelAndUpdateCells() {
        this.level = 0
    }
    @action.bound
    resetSelectedCellsCount() {

    }
    @action.bound
    incrementSelectedCellsCount() {

    }
    @action.bound
    onPlayAgainClick() {

    }
    @action.bound
    resetGame() {

    }
    @action.bound
    setTopLevel() {

    }
}
const gameStore = new GameStore()
export default gameStore
