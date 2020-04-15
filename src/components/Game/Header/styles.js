import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const GameContainer = styled.div `${tw`flex flex-col justify-center items-center `}`;
const Navbar = styled.div `${tw`flex justify-around w-64`}`;
const ThemeButtton = styled.button `${tw`border-solid border border-black`}`;

export {
    GameContainer,
    ThemeButtton,
    Navbar


}
