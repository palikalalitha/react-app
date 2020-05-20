//flex flex-col items-center my-8
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const DeviceContainer = styled.div `${tw`py-4 flex flex-col items-center bg-gray-300 w-full`}`;
const Heading=styled.h1 `${tw`text-xl font-bold`}`
const ViewContainer=styled.div `${tw`flex`}`
const TextArea=styled.p `${tw``}`
const DeviceType=styled.p `${tw``}`
export {DeviceContainer,Heading,ViewContainer,TextArea,DeviceType}