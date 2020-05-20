//flex flex-col items-center my-8
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Container = styled.div `${tw`
flex flex-col items-center  my-8`}`;
const Heading=styled.h1 `${tw`text-3xl font-bold mb-2`}`;
const ViewEditToggleContainer=styled.div `${tw`
py-4 flex flex-col items-center bg-gray-300 w-full px-2`}`
const Heading2=styled.h2 `${tw`text-xl font-bold`}`;

const ViewContainer=styled.button `${tw`flex items-center`}`
const InputBox=styled.input `${tw`border-2 border-blue-500 p-1 focus:outline-none`}`
const TextArea=styled.p `${tw``}`;
const EditButton=styled.button `${tw`ml-2 px-2 py-1 bg-blue-500 rounded text-white focus:outline-none`}`;


export {Container,Heading,ViewEditToggleContainer,InputBox,TextArea,EditButton,ViewContainer,Heading2}