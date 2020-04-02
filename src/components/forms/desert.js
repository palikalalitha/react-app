import React from 'react'
import NavBar from './navbar.js'
class Desert extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDessert: "",
            favoriteDessert: "",
            submitButton: false
        }
    }
    handleUserInput = (event) => {
        this.setState({
            selectedDessert: event.target.value,
            submitButton: false
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            submitButton: true
        })
    }
    displayMessage = () => {
        this.setState({
            favoriteDessert: `My favorite Desert is  ${this.state.selectedDessert}`
        })
    }
    render() {
        return (

            <form onSubmit={this.handleSubmit}>
            <NavBar title="Favourite Desert"/>
            <div className="header-desert">
            <h4 >What is your favorite Dessert?</h4>
            <ul className="desert">
            <li className="list-items">
            <input type="radio" value="Vanilla" name="desert" onChange={this.handleUserInput}/> 
            <label>Vanilla</label>
            </li>
            <li className="list-items">
            <input type="radio" value="ButterScotch" name="desert" onChange={this.handleUserInput}/>
             <label>Butter Scotch</label>
            </li>
            <li className="list-items">
            <input type="radio" value="Gulabjamun" name="desert" onChange={this.handleUserInput}/>Gulab jamun
            </li>
            <li className="list-items">
            <input type="radio" value="Yoghurtpots" name="desert" onChange={this.handleUserInput}/>Yoghurt pots
            </li>
            <li className="list-items">
             <input type="radio" value="Baked Banana" name="desert" onChange={this.handleUserInput}/>Baked Banana
             </li>
             <li className="list-items">
             <input type="radio" value="Chocolate" name="desert" onChange={this.handleUserInput}/>Chocolate
             </li>
            </ul>            
            <input type="submit" value="Make Your choice" onClick={this.displayMessage}/>
            <h3 className={this.state.submitButton?"showMessage":"hide"}>{this.state.favoriteDessert}</h3>
                        </div>
   </form>

        )
    }

}
export { Desert }
