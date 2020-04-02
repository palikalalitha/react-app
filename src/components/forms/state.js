import React from 'react'
import NavBar from './navbar.js'

let states = ['Select state', 'Andhra Pradesh', 'kerala', 'Telangana', 'Karnataka', 'Haryana'];
class States extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedState: "",
            submittedState: "",
            submitButton: false
        }
    }
    handleChangeState = (event) => {
        if (event.target.value !== "Select state") {
            this.setState({
                selectedState: event.target.value,
                //submitButton: false
            })
        }

    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitButton: true
        })

    }
    displayMessage = () => {
        if (this.state.selectedState !== "") {
            this.setState({
                submittedState: `Iam From "${this.state.selectedState.toUpperCase()}" state`
            })
        }

    }
    renderStatesList = () => {
        return states.map(state => <option value={state}>{state}</option>)
    }
    render() {
        return (
            <div>
            <NavBar title="Your State"/>
            <form className="select-box" onSubmit={this.handleSubmit}>
            <select  value={this.state.selectedState} onChange={this.handleChangeState} >
            {this.renderStatesList()}
            </select>
            <input type="submit" class="state-submit-btn" onClick={this.displayMessage}/>
            <h3 className={this.state.submitButton?"showMessage":"hide"}>{this.state.submittedState}</h3>
                        </form>
            
        
             </div>
        )
    }

}
export { States }
