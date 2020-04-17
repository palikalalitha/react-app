import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const GameContainer = styled.div `${tw`flex flex-col text-xl justify-center items-center `}`;

const Navbar = styled.div `${tw`flex justify-between`}
width:${props=>props.gridWidth}px`;

const ThemeButtton = styled.button `${tw`p-1`}
border:${props=>props.selectedTheme.bordercolor}`;

const TopdLevel = styled.h1 `${tw`p-6 text-xl`}`;

const Level = styled.h1 `${tw`text-xl p-1`}`;

export {
    GameContainer,
    ThemeButtton,
    Navbar,
    TopdLevel,
    Level

}
