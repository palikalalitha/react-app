import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const EmojiHeader = styled.div `${tw`flex 
justify-between p-2 font-bold shadow bg-blue-700`}
background-color:${props=>props.selectedTheme==="Light-Theme"?"white":"bg-blue-700"};
color:${props=>props.selectedTheme==="Light-Theme"?"black":"white"}`
//selectedTheme


const ThemeButton = styled.button `${tw`m-1 p-2 `}
border:${props=>props.selectedTheme==="Light-Theme"?"1px solid black":"1px solid white"}`;
const ResetButton = styled.button `${tw`m-1 p-2`}
border:${props=>props.selectedTheme==="Light-Theme"?"1px solid black":"1px solid white"}`;


const EmojiContainer = styled.div `${tw`border border-solid border-black`}
background-color:${props=>props.selectedTheme==="Light-Theme"?"#e6f3ff":"#192633"};
color:${props=>props.selectedTheme==="Light-Theme"?"black":"white"}`;

const EmojiCardContainer = styled.div `${tw`flex flex-wrap justify-around rounded-xl items-center m-5`}`;

const EmojiName = styled.h1 `${tw`text-center pb-3 `}
color:${props=>props.selectedTheme==="Light-Theme"?"black":"white"}`;

const Emojicards = styled.div `${tw`m-5  w-64 shadow-custom bg-blue-700`}
background-color:${props=>props.selectedTheme==="Light-Theme"?"white":"bg-blue-700"}`;

const EmojiImage = styled.img `${tw`h-auto items-center object-cover`}`;

const WinorLoseContainer = styled.div `${tw`flex flex-col justify-center font-bold items-center h-screen`}`

const Score = styled.h1 `${tw`text-4xl m-4`}`

const Lose = styled.h1 ` ${tw`text-3xl text-red-600`}`;
const Win = styled.h1 `${tw` text-2xl text-green-600`}`;
const PlayAgainButton = styled.div `${tw`bg-indigo-500 py-3 px-6 m-2  text-white rounded-md`}`

const HowToplayContainer = styled.div `${tw`m-1`}
color:${props=>props.selectedTheme==="Light-Theme"?"black":"white"}`
const HintHeading = styled.h1 `${tw`text-3xl font-bold`}`;

export {
    EmojiHeader,
    WinorLoseContainer,
    ThemeButton,
    Emojicards,
    EmojiContainer,
    EmojiName,
    EmojiImage,
    EmojiCardContainer,
    Score,
    Lose,
    Win,
    PlayAgainButton,
    ResetButton,
    HowToplayContainer,
    HintHeading
}
//#e6f3ff
//border border-solid border-black`
// width="180px" height="70px"
