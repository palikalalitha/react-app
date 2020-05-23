import React from "react"
import {action} from "@storybook/addon-actions"
import { withKnobs,boolean ,text} from "@storybook/addon-knobs"
import Pagination  from "./Pagination"

export default {
    title:"pagination"
}
export const defaultView = () => <Pagination totalPages={9} currentPage={1} onClickToChangePage={action("clicked")}/>






