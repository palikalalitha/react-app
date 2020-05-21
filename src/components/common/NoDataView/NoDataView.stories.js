import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text ,color} from '@storybook/addon-knobs'
import '../../../styles/tailwind.css'
import NoDataView from "."

export default {
   component: NoDataView,
   title: 'Common/NoDataView'
}

export const defaultView = () => <NoDataView />
