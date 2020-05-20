import React from "react"
import {observable} from "mobx";
import {observer} from "mobx-react"
import {withToggle} from "../../hocs/withToggle"
import {Container,Heading2,
    Heading,ViewEditToggleContainer,InputBox,TextArea,ViewContainer,
    EditButton} from "./styledComponents"
@observer
     class ViewEditToggle extends React.Component
    {
        @observable text
        constructor()
        {
            super()
            this.text="Click on the edit button to start editing"
        }
        changeText=(event)=>
        {
            this.text=event.target.value
        }
        handleEditButton=()=>
        {
            this.props.ontoggle()
        }
        render()
        {
            const {toggleStatus}=this.props
            return (
                <>
                    <Heading>HOC's Usage</Heading>
                    <ViewEditToggleContainer>
                    <Heading2>ViewEditToggle</Heading2>
                    <ViewContainer>
                       {toggleStatus? 
                       <InputBox type="text" defaultValue={this.text} onChange={this.changeText}/>:    
                    <TextArea>{this.text}</TextArea>}
                    <EditButton onClick={this.handleEditButton}>{toggleStatus?"Cancel":"Edit"}</EditButton>
                    </ViewContainer>
                    
                    </ViewEditToggleContainer>
                   </>)
         }
    }
export default withToggle(ViewEditToggle)