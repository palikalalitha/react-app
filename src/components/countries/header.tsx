import React from 'react'
import { FiMoon } from 'react-icons/fi';

//import themeStore from "../../stores/ThemeStore"
import { Theme, NavBar, ThemeButton } from './styledComponents'
type HeaderProps={
 changeTheme:Function
 selectTheme:String
 id:string
}
class Header extends React.Component<HeaderProps> {
    render() {
        const {selectTheme,changeTheme}=this.props
        return (
            <NavBar id={selectTheme}>
                <h2>Where in the world?</h2>
                <Theme onClick={changeTheme}>
                  <h1>    
                      <FiMoon/>
                  </h1>
                  <ThemeButton id={selectTheme}>{selectTheme?" Dark Mode":" Light Mode"}</ThemeButton>
                </Theme>
            </NavBar>)

    }
}

export { Header }
//             {/*</NavBar>) {/*<NavBar id={this.props.selectTheme}>*/}
