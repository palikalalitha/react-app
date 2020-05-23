import React, { Component } from 'react';
import {PaginationButtons,PaginationArrows} from "./styledComponents"
class PaginationButton extends Component {
    render() {
        const {isDisabled,imageUrl,pageHandler}=this.props
        return (
            <PaginationButtons 
            isDisabled={isDisabled} 
                    onClick={pageHandler}>
            <PaginationArrows src={imageUrl}></PaginationArrows>
                </PaginationButtons>
        );
    }
}

export default PaginationButton;