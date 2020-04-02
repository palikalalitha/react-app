import React from 'react'
import NavBar from './navbar.js'
class DisableButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisableButtonChecked: false,
            showMessage: ""
        }
    }
    handleChange = (event) => {
        if (this.state.isDisableButtonChecked === true) {
            this.setState({
                isDisableButtonChecked: false,
                showMessage: ""
            })
        }
        else {
            this.setState({
                isDisableButtonChecked: true,
                showMessage: "Im disabled"
            })
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }
    displayMessage = (event) => {
        if (this.state.isDisableButtonChecked === false) {
            this.setState({
                showMessage: "Hi,Iam an enabled"
            })
        }
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <NavBar title="Disable Button"/>
            <div class="disable-box">
            <input type="checkbox" onChange={this.handleChange}/>Disabled
            <button type="" className={this.state.isDisableButtonChecked?"hide-btn":"show-btn"} onClick={this.displayMessage}>Click me</button>
            <h3>{this.state.showMessage}</h3>
            </div>
            </form>
         </div>
        )
    }
}
export { DisableButton }
