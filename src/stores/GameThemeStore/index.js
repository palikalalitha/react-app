import { observable } from 'mobx'

class GameThemeStore {
    @observable selectedTheme = {
        light: "Light",
        dark: "Dark"
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
const themeStore = new GameThemeStore()
export default themeStore
