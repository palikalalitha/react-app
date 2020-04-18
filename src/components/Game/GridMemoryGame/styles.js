import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const GameContainer = styled.div `${tw`h-screen flex flex-col text-xl items-center`}
background-color:${props=>props.selectedTheme.bgColor};
color:${props=>props.selectedTheme.color};`;

export default GameContainer;
