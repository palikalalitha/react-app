import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const GameFieldsContainer = styled.div `${tw`flex flex-wrap mt-4 mb-2`}
width:${props=>props.gridWidth}px;
border:"1px solid red"`;

export {
    GameFieldsContainer
}
