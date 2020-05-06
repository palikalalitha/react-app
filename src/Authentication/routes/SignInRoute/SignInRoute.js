import React from "react"
import { observable } from "mobx"
import { observer, inject } from "mobx-react"
import { withRouter } from "react-router-dom"

import {
    USERNAME_REGEX,
    USERNAME_ERROR_MESSAGE,
    PASSWORD_ERROR_MESSAGE
}
from "../../constants/SignInPageConstants.js"

import { SignInPage } from "../../components/SignInPage/index"

@inject("authStore")
@observer
class SignInRoute extends React.Component {
    @observable username
    @observable password
    @observable errorMessage

    constructor() {
        super()
        this.init()
    }
    init() {
        this.username = "";
        this.password = "";
        this.errorMessage = ""
    }
    onChangeUsername = (event) => {
        this.username = event.target.value


    }
    onChangePassword = (event) => {
        this.password = event.target.value
    }

    onSuccess = () => {
        this.props.history.push("/ecommerce-store/products/")
    }
    onFailure = () => {
        const { getUserSignInAPIError: apiError } = this.props.authStore
        if (apiError !== undefined || apiError != null) {
            //this.errorMessage = JSON.parse(apiError).originalError.message;
            this.errorMessage = "Network Error"
        }
    }
    onClickSignIn = () => {
        if (this.username === "" || this.username === undefined) {
            this.errorMessage = USERNAME_ERROR_MESSAGE

        }
        else if (this.password === "" || this.password === undefined) {
            this.errorMessage = PASSWORD_ERROR_MESSAGE
        }
        else {
            this.errorMessage = "Loading"
            this.handleSignIn()

        }
    }
    handleSignIn = async() => {
        await this.props.authStore.userSignIn({
            username: this.username,
            password: this.password
        }, this.onSuccess, this.onFailure)

    }
    onSubmitForm(event) {
        event.preventDefault()
    }
    render() {
        const { getUserSignInAPIStatus } = this.props.authStore
        return (
            <SignInPage
            apiStatus={getUserSignInAPIStatus}
       
            username={this.username}
            password={this.password}
            errorMessage={this.errorMessage}
            onChangePassword={this.onChangePassword}
            onChangeUsername={this.onChangeUsername}
            onSubmit={this.onSubmitForm}
            onClickSignIn={this.onClickSignIn}/>)
    }

}
export default withRouter(SignInRoute);
