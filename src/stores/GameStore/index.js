import { observable, action } from "mobx"
import GridBox from "../../components/Game/GridBox.json"
import Cell from "../Model/Cell/"

let cellTimeout;
let seconds = 1500
let finalLevel = 7;
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
    onCellClick(cell) {
        cell.isHidden ? this.incrementSelectedCellsCount() : setTimeout(() => this.goToInitialLevelAndUpdateCells(), 200)
    }
    @action.bound
    setGridCells() {
        this.level = 6
        const { gridSize, hiddenCellCount } = GridBox[this.level]
        const userTimer = (gridSize * 2) * seconds
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
        cellTimeout = setTimeout(() => this.goToInitialLevelAndUpdateCells(), userTimer)
    }
    @action.bound
    goToNextLevelAndUpdateCells() {
        clearTimeout(cellTimeout)
        this.level++
            this.currentLevelGridCells = []
        this.setGridCells()
        this.resetSelectedCellsCount()
        if (this.level === finalLevel) {
            this.isGameCompleted = true
        }
    }
    @action.bound
    goToInitialLevelAndUpdateCells() {
        clearTimeout(cellTimeout)
        this.setTopLevel()
        this.level =
            this.currentLevelGridCells = []
        this.resetSelectedCellsCount()
        this.setGridCells()
    }
    @action.bound
    resetSelectedCellsCount() {
        this.selectedCellsCount = 0
    }
    @action.bound
    incrementSelectedCellsCount() {
        const { hiddenCellCount } = GridBox[this.level]
        this.selectedCellsCount++
            if (this.selectedCellsCount === hiddenCellCount) {
                this.goToNextLevelAndUpdateCells()
            }
    }
    @action.bound
    onPlayAgainClick() {
        this.setTopLevel()
        this.resetGame()

    }
    @action.bound
    resetGame() {
        this.goToInitialLevelAndUpdateCells()
        this.isGameCompleted = false
    }
    @action.bound
    setTopLevel() {
        this.topLevel = this.level
    }
}
const gameStore = new GameStore()
export default gameStore
