import React from "react"
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
            const {toggleStatus,list,listTitle}=this.props
            return (
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
                    {toggleStatus&&<ViewList>
                    {list.map(each=><ListItems>{each}</ListItems>)}
                    </ViewList>}
                    </ListContainer>
                </ViewContainer>
                </CollapseExpandContainer>)
         }
    }
export default withToggle(CollapseExpand )