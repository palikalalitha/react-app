import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home  from "./components/home.js"
import { CountryDashboardApp } from "./components/countries/countryDashboardApp"
import { CarsList } from './components/CarsList'
import { Todo } from './components/todolist'
import { TodoList } from "./components/MobxTodo/TodoList"
import { Greetings } from './components/forms/greetings'
import { Desert } from './components/forms/desert'
import { States } from './components/forms/state'
import { DisableButton } from './components/forms/disableButton'
import Practice from './components/practice'
import { FormComponents } from './components/forms/formComponents'
import { CheckboxWithLabel } from './components/forms/CheckboxWithLabel'

import CountryDetails from './components/countries/countryDetails'
import Game from "./components/emojis/game"
import NavBar from './components/forms/navbar'
import CounterApp from "./components/CounterPage"

import TodoApp from "./components/TodoMobx/TodoApp/index"
import MobxPractice from "./components/MobxPractice/index"
import EventApp from "./components/Event/EventApp/index"
//import themeStore from "./stores/ThemeStore"
import './components/todolist/index.css'
import './components/countries/countries.css'
import './components/forms/forms.css'
import './components/CarsList/index.css'
import "./App.css";


class App extends React.Component {
    render() {
        return (
        <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path="/mobxStoreTodoApp">
            <NavBar title="Todo List"/>
            <TodoApp/>
            </Route>
            <Route path="/counter-page">
            <NavBar title="Counter"/>
            <CounterApp/>
            </Route>
            <Route path="/carlist">
            <NavBar title="Car List"/>
             <CarsList/>
            </Route>
            <Route path="/eventlist">
            <NavBar title="Event List"/>
            <EventApp/>
            </Route>
            <Route path="/todolist">
                <NavBar title="Todo List"/>
              <Todo />
            </Route>
            <Route path="/mobxtodolist">
                <NavBar title="Mobx Todo List"/>
                <TodoList/>
            </Route>
            <Route path="/practice">
                <NavBar title="practice"/>
             <Practice />
             </Route>
            <Route path="/mobxpractice">
                <NavBar title="Mobx practice"/>
                <MobxPractice />
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
                  <CountryDashboardApp />
            </Route>
             <Route path="/projects/countryDashboard/details/:id">
             <NavBar title="Country DashBoard"/>
                  <CountryDetails/>
            </Route>
            <Route path="/game">
                <NavBar title="Emooji Game"/>
            <Game/>
            </Route>
            <Route path="/">
            <Home/>
            </Route>
          </Switch>
    </Router>);
    };
}

export default App;