import styled from "@emotion/styled"
import tw from "tailwind.macro"

const EcommerceContainer = styled.div `${tw`m-6 relative`}
max-width: 90%;
margin-right: auto;
margin-left: auto;`;

const SignOutButton = styled.button `${tw`border border-solid border-gray-800  p-1 rounded text-xs
`}`;
const ProductsContainer = styled.div `${tw`flex`}`;


const Products = styled.div `${tw`flex flex-col flex-1`}`
export {
    EcommerceContainer,
    SignOutButton,
    ProductsContainer,
    Products
}
//h-16 text-5xl text-center p-2 w-14
