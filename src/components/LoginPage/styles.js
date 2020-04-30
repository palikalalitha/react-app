import styled from "@emotion/styled"
import tw from "tailwind.macro"
const Login = styled.div `${tw`flex flex-col justify-center items-center`}`;
const UserName = styled.input `${tw`border border-solid border-black`}`
const Password = styled.input `${tw`border border-solid border-black`}`
const Submit = styled.input `${tw``}`;
const Heading = styled.h1 `${tw`text-3xl`}`;
export {
    Login,
    UserName,
    Password,
    Submit,
    Heading
}
