import React, { Component } from 'react';
import { Submit } from "./styledComponents";

class Buttons extends Component {
    render() {
       const { disabled,text,data,onClick }=this.props
          return (
               <Submit disabled={disabled} text={text}
                data-testid={data} onClick={onClick}>Sign in</Submit>
                  );
    }
}

export default Buttons; 
