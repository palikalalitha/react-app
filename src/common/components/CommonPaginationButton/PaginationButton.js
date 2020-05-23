import React, { Component } from 'react';
import {PaginationButtons,PaginationArrows} from "./styledComponents"
import {FaGreaterThan} from "react-icons/fa";
class PaginationButton extends Component {
    render() {
        const {isDisabled,imageUrl,pageHandler}=this.props
        return (
            <PaginationButtons 
            isDisabled={isDisabled} 
                    onClick={pageHandler}>
                        {/* <FaGreaterThan/> */}
            <PaginationArrows src={imageUrl}></PaginationArrows>
                </PaginationButtons>
        );
    }
}

export default PaginationButton;