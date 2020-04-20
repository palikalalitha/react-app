import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const TodoAppContainer = styled.div `${tw`flex flex-col justify-center items-center`}`;
// const UserInput = styled.input `${tw`w-64 h-10  bg-red-300 text-center`}`;
const Heading = styled.h1 `${tw`items-center text-6xl`}`;

const Loader = styled.div `${tw`flex m-10 justify-between text-3xl w-40`}`;
const NetworkError = styled.div `${tw` flex flex-col justify-center items-center text-3xl m-4`}`;
const RetryButton = styled.div `${tw`bg-indigo-500 py-2 px-12 m-2  text-white rounded-md`}`;
export {
    TodoAppContainer,
    //UserInput,
    Heading,
    Loader,
    NetworkError,
    RetryButton
}
