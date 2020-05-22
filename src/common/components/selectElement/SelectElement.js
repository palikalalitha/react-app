import React, { Component } from 'react';
import {SelectContainer,Options,Label} from "./styledComponents"
class SelectElement extends Component {
    renderOptions=()=>
    {
        const {options}=this.props
        return options.map(eachOption=>
         {return <Options>{eachOption}</Options>})
    }
    onClickSort = (event) => {
        const { onSelectSortBy } = this.props
        onSelectSortBy(event.target.value)
    }
    render() {
        const {status,label}=this.props
        return (
            <React.Fragment>
                <Label>{label}:</Label>
                <SelectContainer 
                    disabled={status!==200?"true":""}
                    onChange={this.onClickSort}>
                        <option  value="select">Select</option>
                        {this.renderOptions()}
                </SelectContainer>
            </React.Fragment>
        );
    }
}

export default SelectElement;