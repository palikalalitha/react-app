import styled from "@emotion/styled"
import tw from "tailwind.macro"
const EventListContainer = styled.div `${tw`flex items-center justify-around border-solid border border-blue-400`}`;
const EventBox = styled.h1 `${tw`m-4 h-10 w-64 p-2 text-2xl `}`;
const EventInputBox = styled.input `${tw`m-4 h-10 w-64 bg-blue-200 p-2 shadow-custom`}`;
const EditEventButton = styled.button `${tw`w-24 m-4 h-12 bg-green-300 border-solid border border-blue`}`;
const TextBoxContainer = styled.div `${tw`flex flex-col `}`;
const AddEventButton = styled.button `${tw`w-24 h-12 bg-blue-300 border-solid border border-blue`}`;

export {
    EventListContainer,
    EventBox,
    EditEventButton,
    TextBoxContainer,
    EventInputBox,
    AddEventButton
}
