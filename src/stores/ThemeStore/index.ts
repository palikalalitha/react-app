import { observable } from 'mobx'
type ThemeProps=
{
    selectedTheme:string
    setCurrentTheme:Function
}
class ThemeStore<ThemeProps> {
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
