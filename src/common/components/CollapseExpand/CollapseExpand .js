import React from "react"
import {observable} from "mobx";
import {observer} from "mobx-react"
import {withToggle} from "../../hocs/withToggle"
import {CollapseExpandContainer,Heading,
    ListContainer,TextArea,ExpandButton,ViewContainer,ViewList,ListItems} from "./styledComponents"
@observer
class CollapseExpand  extends React.Component
{
        handleOnClick=()=>
        {
            this.props.ontoggle()
        }
        render()
        {
            console.log("CollapseExpand")
            const {toggleStatus,list,listTitle}=this.props
            return (
            <React.Fragment>
                <CollapseExpandContainer>
                <Heading>CollapseExpand</Heading>
                <ViewContainer>
                    <TextArea>
                        {listTitle}:
                    </TextArea>
                    <ListContainer>
                    <ExpandButton onClick={this.handleOnClick}>
                        {toggleStatus?"Collapse":"Expand"}
                    </ExpandButton>
                    {toggleStatus?<ViewList>
                        <ListItems>Mobile</ListItems>
                        <ListItems>Head Phones</ListItems>
                    </ViewList>:""}
                    </ListContainer>
                   

                </ViewContainer>

                </CollapseExpandContainer></React.Fragment>)
         }
    }
export default withToggle(CollapseExpand )