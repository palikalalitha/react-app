import React from 'react'
import NavBar from './navbar.js'
import { CheckboxWithLabel } from './CheckboxWithLabel.js'
class VisitedCities extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visitedCities: [],
            selectedCities: [],
            isChecked: false
        }
    }
    handleCheckboxClick = (e) => {
        let index;
        if (e.target.checked) {
            const options = this.state.selectedCities
            options.push(e.target.value)
            this.setState({
                //submitButton: false,
                selectedCities: options,
                // visitedCities: []
            })
        }
        else {
            const options = this.state.selectedCities
            index = options.indexOf(e.target.value)
            options.splice(index, 1)
            this.setState({
                //submitButton: false,
                selectedCities: options,
                // visitedCities: []
            })
        }

    }
    displayVisitedCitiesMessage = () => {
        return (
            <div>
            <span>I have visited these cities </span>
            {this.state.visitedCities.map(city=>
             <span>{city}</span>).reduce((prev,cur)=>[prev,', ',cur])
             }
            </div>
        )
    }
    handleSubmit = () => {
        this.setState({
            visitedCities: this.state.selectedCities,
            //  submitButton: true
        })
    }
    renderCityOptions = () => {
        const { cityList } = this.props
        console.log("render")
        return cityList.map(eachcity =>
            <div>
            <input type="checkbox" value={eachcity} onChange={this.handleCheckboxClick}/>{eachcity}
        </div>
        )
    }
    render() {
        return (
            <div className="visited">
            <NavBar title="Visited Cities"/>
            <h4>Which of the following cities you have visited?</h4>
            {this.renderCityOptions()}
            <input type = "submit" onClick= {this.handleSubmit}/>

            {this.state.visitedCities.length>0?this.displayVisitedCitiesMessage() : "" }
            </div>
        )
    }

}
export { VisitedCities }
