import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import { Home } from "./components/home.js"
import { CountryDashboardApp } from "./components/countries/countryDashboardApp.js"
import { CarsList } from './components/CarsList'
import { Todo } from './components/todolist'
import { Greetings } from './components/forms/greetings.js'
import { Desert } from './components/forms/desert.js'
import { States } from './components/forms/state.js'
import { DisableButton } from './components/forms/disableButton.js'
//import { VisitedCities } from './components/forms/cities.js'
import Practice from './components/practice.js'
import { FormComponents } from './components/forms/formComponents.js'
import { CheckboxWithLabel } from './components/forms/CheckboxWithLabel.js'
import { Header } from './components/countries/header.js'
import CountryDetails from './components/countries/countryDetails.js'
import Game from "./components/emojis/game.js"
import NavBar from './components/forms/navbar.js'
import './components/todolist/index.css'
import './components/countries/countries.css'
import './components/forms/forms.css'
import './components/CarsList/index.css'
import "./App.css";

//const App = () => {
class App extends React.Component {
    state = {
        selectTheme: false,
    }
    onChangeTheme = () => {

        let currentThemeState = this.state.selectTheme
        this.setState({
            selectTheme: !currentThemeState
        })
    }
    // export default function App() {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path="/carlist">
            <NavBar title="Car List"/>
             <CarsList/>
            </Route>
            <Route path="/todolist">
                <NavBar title="Todo List"/>
              <Todo />
            </Route>
            <Route path="/practice">
                <NavBar title="practice"/>
             <Practice />
            </Route>
            <Route path="/formComponents">
            <NavBar title="Form components"/>
              <FormComponents/>
            </Route>
            <Route path="/greetings">
                  <Greetings/>
            </Route>
            <Route path="/desert">
                  <Desert/>
            </Route>
            <Route path="/visitedCities">
                  <CheckboxWithLabel/>
            </Route>
            <Route path="/state">
                  <States/>
            </Route>     
            <Route path="/disableButton">
                  <DisableButton/>
            </Route>
            <Route path="/countryDashboard">
                  <NavBar title="Country DashBoard"/>
                  <CountryDashboardApp changeTheme={this.onChangeTheme} selectTheme={this.state.selectTheme} />
            </Route>
             <Route path="/projects/countryDashboard/details/:id">
             <NavBar title="Country DashBoard"/>
                  <CountryDetails changeTheme={this.onChangeTheme} selectTheme={this.state.selectTheme} />
            </Route>
            <Route path="/game">
            <Game/>
            </Route>
          <Route path="/">
            <Home/>
            </Route>
          </Switch>
    </Router>
        );
    };
}

export default App;
// <Switch>
///////<div className={this.state.selectTheme?"dark":"light"}>
//   <Route exact path="/page-1">
//     <Page1 />
//   </Route>
//   <Route exact path="/countryDashBoard">
//     <CountryDashboardApp />
//   </Route>
//   <Route path="/">
//     <HomePage />
//   </Route>
// </Switch>
