import { observable, action } from 'mobx'

class GameThemeStore {
    @observable selectedTheme = "Dark"
    @action.bound
    setCurrentTheme() {
        if (this.selectedTheme === "Dark") {
            this.selectedTheme = "Light"
        }
        else {
            this.selectedTheme = "Dark"
        }
    }
}
const themeStore = new GameThemeStore()
export default themeStore
