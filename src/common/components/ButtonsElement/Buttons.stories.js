import React from "react"
import {action} from "@storybook/addon-actions"
import { withKnobs,boolean } from "@storybook/addon-knobs"
import Buttons from "./Buttons"

export default {
    title:"Button"
}
export const defaultView = () => <Buttons/> 
export const signinButtonWithProps = () => 
<Buttons onClick={action("Signin clicked")}/>

export const knobs = () => (
    <Buttons  disabled={boolean("apistatus", false)}
    onClick={action("Signin clicked")}/>
)

knobs.story = {
    decorators: [withKnobs]
 }
 