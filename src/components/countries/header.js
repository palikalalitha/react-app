import React from 'react'
//import { WiNightClear } from 'react-icons/wi';
import { FiMoon } from 'react-icons/fi';
class Header extends React.Component {

    render() {
        return (
            <div className={this.props.selectTheme?"navBarDarkMode":"navabarLightMode"}>
                <h2>Where in the world?</h2>
                <div className="theme" onClick={this.props.changeTheme}>
                <h3>    
                <FiMoon/>
                </h3>
                <button style={this.props.selectTheme?darkTheme:lightTheme}>{this.props.selectTheme?"Dark Mode":"Light Mode"}</button>
                </div>
            </div>)
    }
}

export { Header }

const darkTheme = {
    border: "none",
    fontSize: "15px",
    color: "white"
}
const lightTheme = {
    border: "none",
    fontSize: "15px",
    color: "black"
}
