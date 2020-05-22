import styled from "@emotion/styled"
import tw from "tailwind.macro"


const SelectContainer = styled.select `${tw`rounded-md 
bg-white border border-gray-400 hover:border-gray-700 focus:outline-none`}`
const Options = styled.option `${tw`focus:outline-none`}`
const Label = styled.label `${tw`text-center`}`
export {
    SelectContainer,Options,Label}
