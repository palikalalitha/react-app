import React from 'react'
//import image from './back-icon.svg'
//import { NavBar } from '/components/forms/navbar.js'
import NavBar from './forms/navbar.js'
import {
    BrowserRouter as Router,
    Link
}
from "react-router-dom";
class Home extends React.Component {
    render() {
        return (
            <div>
            <NavBar title="Assignments"/>
            <nav>
            <ul>
                <li>
                    <Link to="/carlist">Car list</Link >
                </li>
                                <li>
                    <Link to="/eventlist">Event list</Link >
                </li>
                  <li>
                   <Link to="/mobxStoreTodoApp">TODO</Link>
                </li>
                            <li>
                    <Link to="/counter-page">Counter</Link >
                </li>
               
                <li>
                   <Link to="/todolist">Todo List</Link>
                </li>
                <li>
                   <Link to="/mobxtodolist">Mobx Todo List</Link>
                </li>
                                <li>
                   <Link to="/mobxpractice">Mobx Practice</Link>
                </li>

                <li>
                    <Link to="/formComponents">Form Components</Link>
                </li>
                
                <li>
                    <Link to="/countryDashboard">Country Dashboard</Link>
                </li>
                                                <li>
                    <Link to="/game"> Game</Link >
                </li>
                                <li>
                    <Link to="/practice">Practice Page</Link >
                </li>
    
            </ul>
        </nav>        
    </div>)
    }
}
export { Home }
