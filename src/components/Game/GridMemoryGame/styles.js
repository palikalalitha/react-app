import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const GameContainer = styled.div `${tw`bg-red-300 p-4`}
background-color:${props=>props.selectedTheme==="Dark"?"#1e253f":"white"};
color:${props=>props.selectedTheme==="Dark"?"white":"black"};`;
const Navbar = styled.div `${tw`flex justify-around w-64`}`;
const ThemeButtton = styled.button `${tw`border-solid border border-black`}`;

export {
    GameContainer,
    ThemeButtton,
    Navbar
}
