import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const CounterContainer = styled.div `${tw`flex justify-center items-center h-screen`}`;

const IncrementButton = styled.button `${tw`h-16 w-16 mx-4 bg-blue-700 text-3xl rounded text-white `}`;
const InputBox = styled.input `${tw`text-2xl font-bold w-26 h-16 m-2 border-black border-solid border text-center`}`;
export {
    CounterContainer,
    IncrementButton,
    InputBox
}
