import styled from "@emotion/styled"
import tw from "tailwind.macro"


const Products = styled.div `${tw`flex flex-col justify-between border 
border-transparent border-solid w-48 m-2 items-center p-1 relative`}`;

const FreeShippingView = styled.p `${tw`absolute bg-black text-xs text-white`}
top:"17px";
right:-15px`;
const ProductImageElement = styled.img `${tw`w-4/5 object-contain mb-2`}`;

const ProductTitle = styled.p `${tw`h-45px text-center`}`

const ProductPriceView = styled.p `${tw``}`

const ProductCurrency = styled.span `${tw`text-xs mr-1`}`
const ProductPrice = styled.span `${tw`text-xl`}`

const InstallmentsView = styled.p `${tw`text-sm text-gray-700 mb-4 h-5`}`

const AddCartButton = styled.button `${tw`
w-full py-3 text-white bg-black text-center rounded text-sm focus:outline-none`}`

export {
    Products,
    FreeShippingView,

    ProductImageElement,
    ProductTitle,
    ProductPriceView,
    ProductCurrency,
    ProductPrice,
    InstallmentsView,
    AddCartButton
}
