import React from "react"
import {observable} from "mobx";
import {observer} from "mobx-react"
import {withScreenSizeDetectors} from "../../hocs/withScreenSizeDetectors"
import {DeviceContainer,
    Heading,ViewContainer,TextArea,DeviceType} from "./styledComponents"

@observer
class DisplayMouseCoordinates extends React.Component
{
    handleMouse=(event)=>
    {
        this.props.handleMouseMove(event)
    }
    render()
    { 
        const {x,y,}=this.props
        return (
            <React.Fragment>
                 <h1 class="text-3xl text-center font-bold mb-2  mt-4">Render Props Usage</h1>
                 <DeviceContainer>
                     <Heading>DisplayMouseCoordinates</Heading>
                     <ViewContainer onMouseMove={this.handleMouse}>
                         <div>
                         <TextArea>The mouse position is ({x},{y})</TextArea>
                </div>
                 </ViewContainer>
                 </DeviceContainer>
            </React.Fragment>)
         }
    }
export default DisplayMouseCoordinates