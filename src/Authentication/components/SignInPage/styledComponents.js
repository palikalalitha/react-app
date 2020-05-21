import styled from "@emotion/styled"
import tw from "tailwind.macro"

const LoginContainer = styled.div `${tw`flex justify-center 
h-screen bg-gray-200 items-center`}`;

const Form = styled.div `${tw`flex flex-col bg-white p-8 shadow-custom`}`;
const Heading = styled.h2 `${tw`font-bold mb-4`}`;

const UserName = styled.input `${tw`border border-solid border-gray-400 
mb-3 w-48 h-10 pl-2  rounded`}`

const Password = styled.input `${tw`border border-solid 
border-gray-400 mb-3 w-48 h-10 pl-2  rounded`}`

const Submit = styled.button `${tw`flex justify-center w-48 h-10 
rounded bg-blue-600 focus:outline-none text-white`}`;

const ErrorMessage = styled.span `${tw`text-red-700 mt-2 w-48 text-sm`}
color:${props=>props.status==="Loading"?"green":""}
;`
export {
    LoginContainer,
    UserName,
    Form,
    ErrorMessage,
    Password,
    Submit,
    Heading
}
