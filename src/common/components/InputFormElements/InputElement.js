import React, { Component } from 'react';
import { UserName } from "./styledComponents";

class InputElement extends Component {
    userNameRef=React.createRef();

    render() {

 const {placeholder,type,value,onChange}=this.props
         return ( 
            <UserName ref={this.userNameRef}
                        placeholder={placeholder}
                        type={type}
                        defaultValue={value} 
                        onChange={onChange}  />
        );
    }
}

export default InputElement; 
