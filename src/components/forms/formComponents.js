import React from 'react'
import {
    BrowserRouter as Router,
    Link
}
from "react-router-dom";
class FormComponents extends React.Component {
    render() {
        return (
            <div>
            <nav>
            <ul>
                <li>
                    <Link to="/greetings">Greetings</Link >
                </li>
                <li>
                   <Link to="/desert">Favourite Desert</Link>
                </li>
                <li>
                    <Link to="/visitedCities">Visited Cities</Link>
                </li>
                <li>
                    <Link to="/state">Your state</Link>
                </li>           
                <li>
                    <Link to="/disableButton">Disable Button</Link>
                </li>
            </ul>

        </nav>
                    </div>)
    }
}
export { FormComponents }
