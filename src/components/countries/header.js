import React from 'react'
import { Theme, NavBar, ThemeButton } from './styledComponents.js'
import { FiMoon } from 'react-icons/fi';
class Header extends React.Component {
    render() {
        const { selectTheme, changeTheme } = this.props
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
