 import React from "react"
import {observable} from "mobx";
import {observer} from "mobx-react"
@observer
class MouseCoordinates extends React.Component
{ 
  @observable x
  @observable y
    constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.x=0;
    this.y=0  
  }

  handleMouseMove(event) { 
      this.x= event.clientX
      this.y= event.clientY
   
  }
    render()
    { 
      return(
        <React.Fragment>
{this.props.render(this.x,this.y,this.handleMouseMove)}
        </React.Fragment>)
    }
 
}
export default MouseCoordinates