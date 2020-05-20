import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider, observer } from "mobx-react"
import {action,observable,computed,autorun} from "mobx"

import stores from "./stores"
import Home from "./components/home.js"
import  CountryDashboardApp  from "./components/countries/countryDashboardApp.js"
import { CarsList } from './components/CarsList'
import { Todo } from './components/todolist'
import { TodoList } from "./components/MobxTodo/TodoList"
import { Greetings } from './components/forms/greetings.js'
import { Desert } from './components/forms/desert.js'
import { States } from './components/forms/state.js'
import { DisableButton } from './components/forms/disableButton.js'
import Practice from './components/practice.js'
import { FormComponents } from './components/forms/formComponents.js'
import { CheckboxWithLabel } from './components/forms/CheckboxWithLabel.js'
import CountryDetails from './components/countries/countryDetails.js'
import Game from "./components/emojis/game.js"
import NavBar from './components/forms/navbar.js'
import CounterApp from "./components/CounterPage"
import GridMemoryGame from "./components/Game/GridMemoryGame/index.js"
import TodoApp from "./components/TodoMobx/TodoApp/index.js"
import MobxPractice from "./components/MobxPractice/index.js"
import Bits from "./components/BitsRevison2/index.js"
import EventApp from "./components/Event/EventApp/index.js"
import LoginPage from "./components/LoginPage/index.js"
import UsersPage from "./components/UsersPage/"
import { SignInPage } from "./Authentication/components/SignInPage/index.js"
import SignOutPage from "./Authentication/components/SignOutPage/SignOutPage.js"
import Header from "./ECommerceApp/components/Header/Header.js"
import authenticationRoutes from "./Authentication/routes"
import productRoutes from "./ECommerceApp/routes"
import HiddenMessage from "./testingPractice1/test.js"
import OnChange from "./testingPractice2/OnChange.js"
import {PracticeAdvancedConceptsRoute} from "./common/routes/PracticeAdvancedConceptsRoute.js"
//import themeStore from "./stores/ThemeStore"
import './components/todolist/index.css'
import './components/countries/countries.css'
import './components/forms/forms.css'
import './components/CarsList/index.css'
import "./App.css";

@observer
class App extends React.Component {
  @observable ecommerceAppTheme="dark"
  onChangeEcommerceAppTheme=()=>
  {
    this.ecommerceAppTheme=!this.ecommerceAppTheme
  }
    render() {
        return (
            <Provider  {...stores}>
                <Router>
                  <Switch>
                    {authenticationRoutes}
                    {productRoutes}
                    <Route exact path="/testing">
                    <HiddenMessage children="hii gud mrng"/>
                    </Route>
                    <Route exact path="/OnChange" component={OnChange}/>
                    <Route exact path="/practice-advanced-concepts" 
                    component={PracticeAdvancedConceptsRoute}/>
                    
                    <Route exact path="/" component={Home}/>
                    <Route path=" /grid-game" component={GridMemoryGame}/>
                    <Route path="/header" component={Header}/>
                    <Route path="/mobxpractice">
                        <NavBar title="Mobx practice"/>
                        <MobxPractice />
                    </Route>
            
                    <Route exact path="/users" component={UsersPage}/>

                    <Route path="/bits">
                    <NavBar title="Bits"/>
                    <Bits />
                    </Route>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route path="/grid-game">
                    <NavBar title="Memory Game"/>
                    <GridMemoryGame/>
                    </Route>
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
          </Switch>
    </Router>
    </Provider>
        );
    };
}

export default App;
