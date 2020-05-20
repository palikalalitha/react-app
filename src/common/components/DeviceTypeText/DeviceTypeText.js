import React from "react"

import {observer} from "mobx-react"
import {withScreenSizeDetectors} from "../../hocs/withScreenSizeDetectors"
import {DeviceContainer,
    Heading,ViewContainer,TextArea,DeviceType} from "./styledComponents"

@observer
class DeviceTypeText extends React.Component
{
    render()
    { 
        const {mobile,tablet,desktop}=this.props
        return (
            <React.Fragment>
                 <DeviceContainer>
                     <Heading>DeviceTypeText</Heading>
                     <ViewContainer>
                         <TextArea>Device Type:</TextArea>
                         <DeviceType>{mobile && "Mobile"}{tablet && "Tablet"}
                         {desktop && "Desktop"}</DeviceType>
                     </ViewContainer>
                     </DeviceContainer>  
            </React.Fragment>)
         }
    }
export default withScreenSizeDetectors(DeviceTypeText)