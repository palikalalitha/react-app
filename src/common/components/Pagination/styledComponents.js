import styled from "@emotion/styled";
import tw from "tailwind.macro"
const PaginationContainer=styled.div `${tw`
flex justify-end items-center`}`

const PaginationArrows=styled.img `${tw``}
filter: invert(75%);`

const Separator=styled.div `${tw`mx-1`}`
const PrevPageNumber=styled.p `${tw`
border border-black w-8 h-8 flex justify-center items-center`}`
export {
    Separator,
    PaginationContainer,
    PaginationArrows,PrevPageNumber}