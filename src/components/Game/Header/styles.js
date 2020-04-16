import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const GameContainer = styled.div `${tw`flex flex-col  justify-center items-center `}`;
const Navbar = styled.div `${tw`flex justify-between w-64`}`;
const ThemeButtton = styled.button `${tw`p-1`}
border:${props=>props.selectedTheme==="Dark"?"1px solid white":"1px solid black"}`;
const TopdLevel = styled.h1 `${tw`p-6 text-xl`}`;
export {
    GameContainer,
    ThemeButtton,
    Navbar,
    TopdLevel

}
