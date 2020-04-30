import styled from "@emotion/styled"
import tw from "tailwind.macro"

const ProductListContainer = styled.div `${tw`flex flex-wrap justify-start`}`;

const Heading = styled.p `${tw`my-4 font-bold `}`

const Button = styled.button `${tw`
rounded-full h-10 w-10 m-1 focus:outline-none bg-gray-200 text-black`}`;


const SignOutButton = styled.button `${tw`border border-solid border-gray-800  p-1 rounded text-xs
`}`;

const CartView = styled.div `${tw`fixed top-0 right-0`}`;

const ProductSortView = styled.div `${tw`flex justify-between items-center my-4`}`
export {
    ProductListContainer,
    ProductSortView,
    Heading,
    SignOutButton,
    Button,
    CartView
}
