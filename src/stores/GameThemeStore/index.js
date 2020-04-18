import { observable, action } from 'mobx';

class GameThemeStore {
    @observable selectedTheme
    constructor() {
        this.selectedTheme = GameThemeStore.themeOptions.dark;
    }
    static themeOptions = {
        dark: {
            id: "1",
            name: "Dark",
            bgColor: "#1a202c",
            color: "white",
            bordercolor: "1px solid white",
            cellBackgroundColor: "rgb(42,67,101",
            cellActive: "rgb(93,230,245)",
            cellFailed: "#ff3333"
        },
        light: {
            id: 2,
            name: "Light",
            bgColor: "white",
            color: "black",
            bordercolor: "1px solid black",
            cellBackgroundColor: "#4a5568",
            cellActive: "rgb(110,201,109)",
            cellFailed: "#ff3333"
        }
    }
    @action.bound
    setCurrentTheme() {
        const { name } = this.selectedTheme;
        if (name === "Dark") {
            this.selectedTheme = GameThemeStore.themeOptions.light;
        }
        else {
            this.selectedTheme = GameThemeStore.themeOptions.dark;
        }
    }
}
const themeStore = new GameThemeStore();
export default themeStore;
