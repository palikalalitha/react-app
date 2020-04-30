import styled from "@emotion/styled"
import tw from "tailwind.macro"

const SubTotalContainer = styled.div `${tw`flex justify-between mt-4`}`

const SubTotalHeading = styled.div `${tw`text-gray-500`}`

const Footer = styled.div `${tw`absolute bottom-0 right-0 p-4 bg-gray-800 shadow-inner`}
width:400px`;
const SubTotalAmount = styled.div `${tw`text-yellow-600`}`
export {

    Footer,
    SubTotalContainer,
    SubTotalHeading,
    SubTotalAmount,
}
