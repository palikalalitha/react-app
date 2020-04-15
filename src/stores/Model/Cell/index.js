import { observable } from "mobx"
class Cell {
    @observable id
    @observable isHidden

    constructor(id, hidden) {
        this.id = id,
            this.isHidden = hidden
    }
}
export default Cell
