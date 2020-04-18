import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const CellContainer = styled.div `${tw`m-1 bg-blue-900 `} 
width: ${props => props.gridWidth}px;
height: ${props => props.gridWidth}px;
pointer-events:${props=>props.isDisable};
background-color:${props=>props.selectedTheme.cellBackgroundColor};`;


const Cells1 = styled.div `${tw``}
width:${props=>props.isClicked?props.gridWidth+"px":"0px"};
height:${props=>props.isClicked?props.gridWidth+"px":"0px"};
background-color:${props=>props.selectedTheme.cellActive};
transfrom:translate(25%,25%);
transition-duration:0.25s;`;

const Cells2 = styled.div `${tw``}
width:${props=>props.isClicked?props.gridWidth+"px":"0px"};
height:${props=>props.isClicked?props.gridWidth+"px":"0px"};
background-color:${props=>props.selectedTheme.cellFailed};
transfrom:translate(25%,25%);
transition-duration:0.25s`;


export {
    Cells1,
    Cells2,
    CellContainer
};
