import { observable, action } from "mobx"
import Cell from "../Model/Cell/"
const gridBox = {
    gridSize: 3,
    hiddenCellCount: 3,
    gridWidth: 300
}
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
    onCellClick(item) {
        item.isHidden ? this.incrementSelectedCellsCount() : this.goToNextLevelAndUpdateCells()

        console.log("cell clicking", item)

    }
    @action.bound
    setGridCells() {
        const { gridSize, hiddenCellCount } = gridBox
        this.currentLevelGridCells = []
        for (let i = 0; i < gridSize * gridSize; i++) {
            this.currentLevelGridCells.push(new Cell(Math.random(), false))
        }
        const randomCells = this.currentLevelGridCells.slice().sort(() => Math.random() - 0.5);
        randomCells.splice(hiddenCellCount)
        randomCells.map(eachRandomId => {
            this.currentLevelGridCells.map(eachId => {
                if (eachId === eachRandomId) {
                    eachId.isHidden = true
                }
            })
        })
        console.log(this.currentLevelGridCells)
    }
    @action.bound
    goToNextLevelAndUpdateCells() {
        this.level += 1
        gridBox.gridSize += 1
        gridBox.hiddenCellCount += 1
        this.setGridCells()
        this.resetSelectedCellsCount()
    }
    @action.bound
    goToInitialLevelAndUpdateCells() {
        this.level = 0
        gridBox.gridSize = 3
        gridBox.hiddenCellCount = 3
        this.resetSelectedCellsCount()
        this.setGridCells()
    }
    @action.bound
    resetSelectedCellsCount() {
        this.selectedCellsCount = 0
    }
    @action.bound
    incrementSelectedCellsCount() {
        if (this.selectedCellsCount === gridBox.hiddenCellCount) {
            this.goToNextLevelAndUpdateCells()
            console.log("hlo")
        }
        this.selectedCellsCount += 1
        console.log(this.selectedCellsCount)
    }
    @action.bound
    onPlayAgainClick() {

    }
    @action.bound
    resetGame() {

    }
    @action.bound
    setTopLevel() {
        this.topLevel = this.level
    }
}
const gameStore = new GameStore()
export default gameStore
