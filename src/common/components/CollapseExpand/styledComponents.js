//flex flex-col items-center my-8
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const CollapseExpandContainer = styled.div `${tw`
py-4 flex flex-col items-center bg-gray-400 w-full`}`;
const Heading=styled.h1 `${tw`text-xl font-bold`}`
const ViewContainer=styled.div `${tw`flex`}`
const ListContainer=styled.div `${tw`ml-2 mt-2`}`

const ExpandButton=styled.button `${tw`px-2 py-1  bg-blue-500 rounded text-white focus:outline-none`}`
const TextArea=styled.p `${tw``}`
const ViewList=styled.div `${tw``}`

const ListItems=styled.div `${tw``}`

export {CollapseExpandContainer,Heading,ViewContainer
    ,ListContainer,TextArea,ExpandButton,ViewList,ListItems}
