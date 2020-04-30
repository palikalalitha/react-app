import React from "react"
import { observable } from "mobx"
import { observer } from "mobx-react"
import { Redirect } from "react-router-dom"
import { Login, UserName, Password, Submit, Heading } from "./styles.js"

@observer
class LoginPage extends React.Component {
    @observable name
    @observable password
    @observable isLogin = false
    handleUserName = (event) => {
        let regExp = /^[a-zA-z]*$/
        if (event.keyCode === 13) {
            let userInput = event.target.value
            if (regExp.test(userInput)) {
                this.name = userInput
            }
            else {
                event.target.value = ""
                this.name = ""
                console.log("wrong username")
            }
        }
    }
    handleUserPassword = (event) => {
        if (event.keyCode === 13) {
            this.password = event.target.value

        }
    }
    onSubmit = () => {
        this.isLogin = true
        console.log(this.name, this.password)

    }
    gotoGridGame = () => {
        return (<Redirect 
            to={{
                pathname:"/grid-game"}}
            />);
    }
    render() {
        if (this.isLogin) {
            console.log(this.isLogin)
            return this.gotoGridGame()
        }
        return (
            <Login>
            <Heading>Login</Heading>
             <UserName type="text" className="bg-gray-200 m-2" onKeyDown={this.handleUserName} />
           <Password type="password" className="bg-gray-200 m-2" onKeyDown={this.handleUserPassword}/>
           <Submit type="submit" onClick={this.onSubmit}/>
            </Login>)
    }

}
export default LoginPage
