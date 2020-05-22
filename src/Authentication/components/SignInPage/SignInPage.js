import React from "react"
import { observer } from "mobx-react"
 import { observable } from "mobx";

import { LoginContainer, Form, UserName, Password, Submit, Heading, ErrorMessage } from "./styledComponents.js"
import CookieConsent from "react-cookie-consent";
import { InputElement } from "../../../common/components/InputFormElements/index.js";
import Buttons from "../../../common/components/ButtonsElement/Buttons.js";
@observer
class SignInPage extends React.Component {
    userNameRef=React.createRef();
    passwordRef=React.createRef();
    inputElementRef=React.createRef()
    render() {
        const {
            apiStatus,
            username,
            onChangeUsername,
            password,
            onChangePassword,
            onClickSignIn,
            errorMessage
        } = this.props;

        return (
            <LoginContainer>
                <CookieConsent>
                This website uses cookies to enhance the user experience.   
                </CookieConsent>
                <Form> 
                    <Heading>
                        Sign in
                    </Heading>
                    <InputElement ref={this.inputElementRef}
                        placeholder="Username" 
                        type="text"
                        value={username} 
                        onChange={onChangeUsername} />
                    {/* <UserName        ref={this.userNameRef}
                        placeholder="Username" 
                        type="text"
                        defaultValue={username} 
                        onChange={onChangeUsername} /> */}

                        <InputElement ref={this.passwordRef}
                        placeholder="Password" 
                        type="password"
                        value={password} 
                        onChange={onChangePassword} />
                    {/* <Password  ref={this.passwordRef}
                        type="password" 
                        placeholder="Password"  
                        defaultValue={password}
                        onChange={onChangePassword}/> */}
                        <Buttons disabled={apiStatus===100?true:false}
                        text="Sign in"
                        data="sign-in-button"
                        onClick={onClickSignIn}/>
                    {/* <Submit  disabled={apiStatus===100?true:false}
                        text="Sign in"
                        data-testid="sign-in-button"
                        onClick={onClickSignIn}>Sign in
                    </Submit> */}
                    <ErrorMessage status={errorMessage}>{errorMessage}</ErrorMessage>
                      </Form>
             </LoginContainer>
           )
    }

}
export { SignInPage }
