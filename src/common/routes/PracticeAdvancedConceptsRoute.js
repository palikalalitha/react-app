import React from "react"
import {observable} from "mobx";
import ViewEditToggle from "../components/ViewEditToggle/ViewEditToggle"
import CollapseExpand  from "../components/CollapseExpand/CollapseExpand "
import {observer} from "mobx-react"
import DeviceTypeText from "../components/DeviceTypeText/DeviceTypeText";
import MouseCoordinates from "../components/MouseCoordinates/MouseCoordinates";
import DisplayMouseCoordinates from "../components/DisplayMouseCoordinates/DisplayMouseCoordinates";

@observer
class PracticeAdvancedConceptsRoute extends React.Component
{
    render()
        {
            console.log("route")
            return (
                <React.Fragment>
                     <div class="flex flex-col items-center  my-8">
                <ViewEditToggle/>
                <CollapseExpand list={["mobiles","HeadPhones"]} listTitle="Sample Shopping List"/>
                <MouseCoordinates
                 render={(x,y,handleMouseMove)=>
                (<DisplayMouseCoordinates
                     x={x} y={y} 
                     handleMouseMove={handleMouseMove}
                _/>)}/>
                </div>
                </React.Fragment>)
                }
}
export {PracticeAdvancedConceptsRoute}