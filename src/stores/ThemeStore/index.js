import { observable } from 'mobx'

class ThemeStore {
    @observable selectedTheme
    constructor() {
        this.selectedTheme = false
    }
    //@action.bound
    setCurrentTheme() {
        if (this.selectedTheme) {
            this.selectedTheme = false
        }
        else {
            this.selectedTheme = true
        }
    }
}
const themeStore = new ThemeStore()
export default themeStore
