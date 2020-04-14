import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const TodoListContainer = styled.div `${tw`flex m-4 justify-between shadow-custom`}`;
const CheckBoxElement = styled.div `${tw`w-10 h-4 bg-red-200`}`;

export {
    TodoListContainer,
    CheckBoxElement,

}
