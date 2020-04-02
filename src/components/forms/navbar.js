import React from 'react'
import image from './back-icon.svg'
import { withRouter } from 'react-router'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class NavBar extends React.Component {
    go = () => {
        let { history } = this.props
        history.goBack()
    }
    render() {
        return (
            <Router>
            <div className="navbar">
            {this.props.title!=="Assignments"?<img src={image} alt="icon" style={{margin:"5px"}} onClick={this.go} />:""}
            <h2 className="title">{this.props.title}</h2>
            </div>
            </Router>
        )
    }
}
export default withRouter(NavBar)
