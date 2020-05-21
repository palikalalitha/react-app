import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import LoadingView from "./LoadingView"
export default {
   component: LoadingView,
   title: 'Common/LoadingView'
}

export const defaultView = () => <LoadingView />

// export const loadingView = () => (
//    <LoadingView
//    />
// )