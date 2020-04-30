import styled from "@emotion/styled"
import tw from "tailwind.macro"

const CartItemContainer = styled.div `${tw`flex text-sm my-2 items-center relative`}`;

const RemoveItemButton = styled.button `${tw`font-bold absolute top-0 right-0`}`;

const ProductImage = styled.img `${tw`w-12 object-contain`}`
const ProductDescriptionContainer = styled.div `${tw`ml-2 flex-1`}`

const ProductTitle = styled.h3 `${tw`text-white`}`

const ProductStyle = styled.p `${tw`text-gray-500 text-xs`}`

const ProductQuantity = styled.p `${tw`text-gray-500 text-xs`}`
const ProductPrice = styled.p `${tw`text-yellow-600 ml-auto`}`;
export {
    CartItemContainer,
    RemoveItemButton,
    ProductImage,
    ProductDescriptionContainer,
    ProductTitle,
    ProductStyle,
    ProductQuantity,
    ProductPrice
}
