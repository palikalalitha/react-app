import styled from "@emotion/styled";
import tw from "tailwind.macro"
const PaginationButtons=styled.button 
`${tw`flex justify-center bg-black text-white w-8 h-8 mr-2 
focus:outline-none `}
cursor:${props=>props.isDisabled?"not-allowed":"default"};
color:${props=>props.isDisabled?"silver":"black"}`


const PaginationArrows=styled.img `${tw``}
filter: invert(75%);`
export {
    PaginationButtons,PaginationArrows}