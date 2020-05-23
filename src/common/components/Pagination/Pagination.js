import React, { Component } from 'react';
import { PaginationContainer,Separator,PaginationArrows,PrevPageNumber} from "./styledComponents";
import leftArrow from "./leftArrow.svg"
import rightArrow from "./rightArrow.svg"
import PaginationButton from "../CommonPaginationButton/PaginationButton"
class Pagination extends Component {
    render() {
        const {currentPage,totalPages,navigateNextPage,navigatePrevPage}=this.props
        return (
            <PaginationContainer>
                <PaginationButton 
                    isDisabled={currentPage===1} 
                    pageHandler={navigatePrevPage} 
                    imageUrl={leftArrow}/>

                    <PrevPageNumber>{currentPage}</PrevPageNumber>
                    <Separator>/</Separator>
                    <p>{totalPages}</p>
                    <PaginationButton isDisabled={currentPage===totalPages}
                     pageHandler={navigateNextPage} imageUrl={rightArrow}/>
            
            </PaginationContainer>
        );
    }
}

export default Pagination;