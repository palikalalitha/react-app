import styled from "@emotion/styled"
import tw from "tailwind.macro"

const CheckOutButtonContainer = styled.button `${tw`bg-black w-full py-2 text-white my-4 rounded  opacity-50 focus:outline-none`}
pointer-events:${props=>props.checkStatus===0?"none":"auto"}`;

export {
    CheckOutButtonContainer,
}
