import React from "react"
import {observable} from "mobx";
import {observer} from "mobx-react"

function withToggle(WrappedComponent)
{
    @observer
    class Toggle extends React.Component
    {
        @observable toggleStatus 
        constructor()
        {
            super()
            this.toggleStatus=false
        }
        onToggle=()=>
        {
            
            this.toggleStatus=!this.toggleStatus
        }

        render()
        {
           console.log("hoc")
            return (<WrappedComponent {...this.props} toggleStatus={this.toggleStatus} 
            ontoggle={this.onToggle}/>)
           }
    }
    return Toggle
}
export {withToggle}