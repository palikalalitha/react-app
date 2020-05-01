import styled from "@emotion/styled"
import tw from "tailwind.macro"

const CartView = styled.div `${tw`fixed top-0 right-0 z-10 `}`;

const CartContainer = styled.div `${tw`flex relative`}
right:0px;`;

const CartCloseButton = styled.button `${tw`h-10 p-3 text-white bg-gray-800 focus:outline-none
active:outline-none leading-none`}`

const CartItemsContainer = styled.div `${tw`p-4 bg-gray-800 flex flex-col`}
width:400px;
height:545px`;

const CartImageHeader = styled.div `${tw`flex items-center justify-center`}`

const CartImageContainer = styled.div `${tw`h-10 mr-4`}`

const CartImage = styled.img `${tw`items-center`}`

const CartImageView = styled.div `${tw`bg-gray-800 p-2 flex cursor-pointer `}
height: 56px`;

const CartHeading = styled.h2 `${tw`text-white font-bold text-xl`}
`
const CartItemsCount = styled.p `${tw`text-center text-yellow-600 text-sm relative`}
top: -3px;
left: -30px;`;

const CartItemsCount1 = styled.p `${tw`text-center text-yellow-600 text-sm relative`}
top: -42px;
left: 5px;`;

const Footer = styled.div `${tw`absolute bottom-0 right-0 p-4  bg-gray-800 shadow-inner`}
`;
export {
    CartContainer,
    Footer,
    CartCloseButton,
    CartItemsContainer,
    CartImageContainer,
    CartImageHeader,
    CartImage,
    CartItemsCount,
    CartHeading,
    CartView,
    CartImageView,
    CartItemsCount1
}
