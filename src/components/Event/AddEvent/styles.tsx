import styled from "@emotion/styled"
import tw from "tailwind.macro"
const EventContainer = styled.div `${tw`flex items-center justify-around border-solid border border-blue-400`}`;
const EventInputBox = styled.input `${tw`m-4 h-10 w-64 bg-blue-200 p-2 shadow-custom`}`;
const AddEventButton = styled.button `${tw`w-24 h-12 bg-blue-300 border-solid border border-blue`}`;
const TextBoxContainer = styled.div `${tw`flex flex-col `}`;
export {
    EventContainer,
    EventInputBox,
    AddEventButton,
    TextBoxContainer
}
