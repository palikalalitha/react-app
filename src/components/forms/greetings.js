import React from 'react'
import NavBar from './navbar.js'
class Greetings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInputText: "",
            clearUserInput: "",
            displayName: "",
            submitButton: false
        }
    }
    handleUserInput = (event) => {
        if (event.target.value !== "") {
            this.setState({
                userInputText: event.target.value,
                clearUserInput: event.target.value,
                // submitButton: false
            })
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            submitButton: true,
            clearUserInput: ""
        })
        if (this.state.userInputText !== "") {
            this.setState({
                displayName: `Hello ${this.state.userInputText} ,have a nice day.`
            })
        }
    }
    displayMessage = () => {
        if (this.state.userInputText !== "") {
            this.setState({
                displayName: `Hello ${this.state.userInputText} ,have a nice day.`
            })
        }
    }
    // navigate = () => {
    //     const { history } = this.props;
    //     history.goBack();

    // }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
            <NavBar title="Greetings"/>
            <div className="greeting">
            <input type="texbox"  className="input-box" onChange={this.handleUserInput} value={this.state.clearUserInput} placeholder="Enter Name"/>
            <button type="submit" className="greet-btn" value="Greet"  >
            Greet</button>
            
            <h3 className={this.state.submitButton?"showMessage":"hide "}>{this.state.displayName}</h3> 
            </div></form>
        )
    }

}
export { Greetings }
//export withRouter(Greetings);
// const withRouter = (Component) => {
//     const history = computation ///higher orde 
//     return class newComponent extends React.Component {
//         render() { <
//             Component history = history / >
//         }
//     }
// }
