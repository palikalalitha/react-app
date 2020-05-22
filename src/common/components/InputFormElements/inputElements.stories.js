import React from "react"
import {action} from "@storybook/addon-actions"
import { withKnobs,boolean ,text} from "@storybook/addon-knobs"
import {UserName} from "./styledComponents"
import InputElement from "./InputElement"

export default {
    title:"FormElement/Input"
}
export const defaultView = () => <InputElement />

export const userNameInputWithProps= () => <InputElement placeholder="Username" type="text"
value={text("username","")} 
onChange={action("username entered")}/>

export const passwordInputWithProps= () => <InputElement placeholder="Password" type="password"
onChange={action("password entered")}/>











export const knobs = () => (
    <InputElement placeholder={text("enter placeholder","Password")} 
    type={text("enter input type","password")}
    value={text("enter username","")}
    onChange={action("onChange")}/>)

knobs.story = {
    decorators: [withKnobs]
 }
 