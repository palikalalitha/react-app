import React from 'react'
import { VisitedCities } from './cities.js'
let cities = ['Hyderabad', 'chenni', 'Banglore', 'pune', 'Mumbai']
class CheckboxWithLabel extends React.Component {
    render() {
        return (
            <div>
            <VisitedCities cityList={cities}/>
            </div>
        )
    }
}
export { CheckboxWithLabel }
// <form>
// <ul className="cities">
// <li>
// <input type="checkbox" name="" value=""/>
// <label>Hyderabad</label>
// </li>          
// <li>
// <input type="checkbox" name="" value=""/>Chennai
// </li>       
// <li>
// <input type="checkbox" name="" value=""/>Banglore
// </li>    
// <li>       
// <input type="checkbox" name="" value=""/>pune
// </li>       
// <li>
// <input type="checkbox" name="" value=""/>Mumbai
// </li>     
// <li> 
// <input type="checkbox" name="" value=""/>chennai
// </li>     
// </ul>
// <VisitedCities label={this.state.label} isChecked={this.handleCheckboxClick}/>)

// </form>)
