import React from "react"
import { observer } from "mobx-react"
 import { observable } from "mobx";

import { LoginContainer, Form, UserName, Password, Submit, Heading, ErrorMessage } from "./styledComponents.js"
import CookieConsent from "react-cookie-consent";
// function Display(props)
// {
//     return<div>
//         {props.children}
//     </div>
// }
@observer
class SignInPage extends React.Component {
    userNameRef=React.createRef();
    passwordRef=React.createRef();
componentDidMount()
{
    //this.props.siginPageRef.current.userNameRef.current.focus()
     
    //this.userNameRef.current.focus();
   // tis.passwordRef.current.focus();
}
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
                    <UserName ref={this.userNameRef}
                        placeholder="Username" 
                        type="text"
                        defaultValue={username} 
                        onChange={onChangeUsername} />
                    <Password  ref={this.passwordRef}
                        type="password" 
                        placeholder="Password"  
                        defaultValue={password}
                        onChange={onChangePassword}/>
                    <Submit  disabled={apiStatus===100?true:false}
                        text="Sign in"
                        data-testid="sign-in-button"
                        onClick={onClickSignIn}>Sign in
                    </Submit>
                    <ErrorMessage status={errorMessage}>{errorMessage}</ErrorMessage>
                      </Form>
             </LoginContainer>
           )
    }

}
export { SignInPage }
