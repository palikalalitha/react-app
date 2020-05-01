import styled from "@emotion/styled"
import tw from "tailwind.macro"

const SizeFilterContainer = styled.div `${tw`w-1/4 px-4`}`;

const Heading = styled.p `${tw`my-4 font-bold `}`

const Button = styled.button `${tw`
rounded-full h-10 w-10 m-1 focus:outline-none `}
background-color:${props=>props.isSelected?"black":"silver"};
color:${props=>props.isSelected?"white":"black"};`;



const SignOutButton = styled.button `${tw`border border-solid border-gray-800  p-1 rounded text-xs
`}`;

const CartView = styled.div `${tw`fixed top-0 right-0`}`;



const ProductsContainer = styled.div `${tw`flex`}`;
export {
    SizeFilterContainer,
    Heading,
    SignOutButton,
    Button,
    CartView,
    ProductsContainer,
    
}
