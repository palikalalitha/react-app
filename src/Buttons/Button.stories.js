import React from "react"
import {action} from "@storybook/addon-actions"
import { withKnobs,boolean } from "@storybook/addon-knobs"

import { Submit } from "../Authentication/components/SignInPage/styledComponents"
import { SignInPage } from "../Authentication/components/SignInPage"
    import { SignOutButton } from "../ECommerceApp/components/ProductList/styledComponents"

export default {
    //component:SignInPage,
    title:"Button/SigninPage/buttons"
}
export const defaultView = () => <Submit>Sign in</Submit> 
export const SignInButtonWithProps = () => 
<Submit onClick={action("Signin clicked")}>Sign in</Submit> 

export const knobs = () => (
    <Submit  disabled={boolean("apistatus", false)}
    onClick={action("Signin clicked")}>Sign in</Submit>
)

// export default {
//     //component:SignInPage,
//     title:"Button/SignOutButton"
// }
  export const SignOutButtonView = () => <SignOutButton>Sign out</SignOutButton> 

 
 knobs.story = {
    decorators: [withKnobs]
 }
 