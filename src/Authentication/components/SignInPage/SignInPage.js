import React from "react"
import { observable } from "mobx"
import { observer, inject } from "mobx-react"
import { Redirect } from "react-router-dom"
import CookieConsent from "react-cookie-consent";

import { getAccessToken } from "../../utils/StorageUtils.js"
import { USERNAME_REGEX, USERNAME_ERROR_MESSAGE, PASSWORD_ERROR_MESSAGE } from "../../constants/SignInPageConstants.js"

import { LoginContainer, Form, UserName, Password, Submit, Heading, ErrorMessage } from "./styledComponents.js"
import authStore from "../../stores/AuthStore/index"

//let userToken;
//@inject("authStore")
@observer
class SignInPage extends React.Component {
    @observable username
    @observable password
    @observable errorMessage
    @observable userToken
    constructor() {
        super()
        this.init()
    }
    init() {
        this.username = "";
        this.password = "";
        this.userToken = getAccessToken(),
            this.errorMessage = ""
    }
    onChangeUsername = (event) => {
        let userInput = event.target.value
        if (USERNAME_REGEX.test(userInput)) {
            this.username = userInput
            this.errorMessage = ""
        }
        else {
            this.errorMessage = USERNAME_ERROR_MESSAGE
        }
    }
    onChangePassword = (event) => {
        let userPassword = event.target.value
        if (userPassword !== "") {
            this.password = event.target.value
            this.errorMessage = ""
        }
        else {
            this.errorMessage = PASSWORD_ERROR_MESSAGE
        }

    }
    doNetworkCalls() {
        authStore.userSignIn();
    }
    onClickSignIn = async() => {
        if (!this.username) {
            this.errorMessage = USERNAME_ERROR_MESSAGE
        }
        else if (!this.password) {
            this.errorMessage = PASSWORD_ERROR_MESSAGE
        }
        else {
            alert("signin")
            await this.doNetworkCalls()
            this.props.history.push("/ecommerce-store/products/")
            //this.gotoNextPage()
        }
    }
    gotoNextPage = () => {
        return (
            <Redirect 
            to={{
                pathname:"/ecommerce-store/products/"
            }}
            />
        );
    }
    onSubmit(event) {
        event.preventDefault()
    }
    render() {

        return (
            <LoginContainer>
            <CookieConsent>
            This website uses cookies to enhance the user experience.   
            </CookieConsent>
            <Form onSubmit={this.onSubmit}>
                <Heading>Sign in</Heading>
                <UserName placeholder="UserName" type="text"  onChange={this.onChangeUsername} />
               <Password type="password" placeholder="Password"  onChange={this.onChangePassword}/>
               <Submit type="button" onClick={this.onClickSignIn}>Sign in</Submit>
               <ErrorMessage>{this.errorMessage}</ErrorMessage>
             </Form>
            </LoginContainer>)
    }

}
export default SignInPage;
