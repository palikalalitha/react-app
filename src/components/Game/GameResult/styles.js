import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const GameResultContainer = styled.div `${tw`flex flex-col justify-center items-center p-16`};`;


const LevelText = styled.h1 `${tw`font-bold text-3xl p-4`}`;

const PlayAgainButton = styled.div `${tw`bg-indigo-500 py-3 font-bold px-3 m-2 text-2xl text-white rounded-md`}`;

const Greeets = styled.h1 `${tw`font-bold  text-green-600 font-sans text-2xl p-6`}`;
export {
    GameResultContainer,
    PlayAgainButton,
    Greeets,
    LevelText
};
