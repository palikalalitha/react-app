import React from "react"
import {action} from "@storybook/addon-actions"
import { withKnobs,boolean ,select,text,number, array} from "@storybook/addon-knobs"
import SelectElement from "./SelectElement"
import { SelectContainer } from "./styledComponents"
export default {
    title:"FormElement/Select"
}


const options = ["Ascending","descending"]


export const selectExample = ()=><SelectContainer/>

export const selectBoxWithValues = () =>
 <SelectElement label="select options" status={100}
  options={options} onSelectSortBy={action("value selected")}/>

  
export const knobs = () => (
    <SelectElement      label="select options"
     status={number("status code","")}
    options={array("enter options",["Mobile","Laptop"])}
     onSelectSortBy={action("value selected")}/>)

knobs.story = {
    decorators: [withKnobs]
 }

// const label = 'Colors';
// const options1 = {
//   Red: 'red',
//   Blue: 'blue',
//   Yellow: 'yellow',
//   Rainbow: ['red', 'orange', 'etc'],
//   None: null,
// };
// const defaultValue = 'red';
// const groupId = 'GROUP-ID1';
// const value = select(label, options1, defaultValue, groupId);
// export const dontent = () => value