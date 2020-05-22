import React, { Component } from 'react';
import { PaginationButton,PaginationContainer,LeftArrow ,Separator,PaginationArrows,PrevPageNumber} from "./styledComponents";
import leftArrow from "./leftArrow.svg"
import rightArrow from "./rightArrow.svg"
class Pagination extends Component {
    render() {
        const {currentPage,totalPages,onClickToChangePage}=this.props
        return (
            <PaginationContainer>
                <PaginationButton onClick={onClickToChangePage}>
                    <PaginationArrows src={leftArrow}></PaginationArrows>
                </PaginationButton>
                    <PrevPageNumber>{currentPage}</PrevPageNumber>
                    <Separator>/</Separator>
                    <p>{totalPages}</p>
                <PaginationButton onClick={onClickToChangePage}>
                <PaginationArrows src={rightArrow}></PaginationArrows>
                </PaginationButton> 
            </PaginationContainer>
        );
    }
}

export default Pagination;