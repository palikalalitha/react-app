import React from "react"
import {action} from "@storybook/addon-actions"
import { withKnobs, text,color ,number} from '@storybook/addon-knobs'
import { API_FAILED ,API_FETCHING,API_SUCCESS} from "@ib/api-constants"

import "../../../styles/tailwind.css"
import LoadingWrapperWithFailure from "."
import { SignInPage } from "../../../Authentication/components/SignInPage"

export default {
    component:LoadingWrapperWithFailure,
    title:"common/LoadingWithWrapper"
}

export const defaultView = () =>
<LoadingWrapperWithFailure/>


export const loadingWrapperWithFailure = () =><LoadingWrapperWithFailure
apiStatus={API_FAILED} renderSuccessUI={SignInPage}
 onRetryClick={action("retry clicked")}
apiError="error"/>



export const knobs = () => (
    <LoadingWrapperWithFailure
       apiStatus={number('apiStatus', 0)}
       renderSuccessUI={SignInPage}
       onRetryClick={action("retry clicked")}
       apiError="error"
    />
 )
 
 knobs.story = {
    decorators: [withKnobs]
 }
 