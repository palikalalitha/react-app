import styled from "@emotion/styled"
import tw from "tailwind.macro"


const CartListContainer = styled.div `${tw`mt-8 overflow-y-auto flex-1`}`;
const CartEmpty = styled.p `${tw`text-white text-sm my-auto flex items-center justify-center`}
height:75%;
width: "350px"`;
export {
    CartListContainer,
    CartEmpty

}
