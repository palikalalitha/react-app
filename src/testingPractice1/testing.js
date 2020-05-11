import React from "react"
import { render, fireEvent } from "@testing-library/react"
import HiddenMessage from "./test.js"
describe("HiddenMessage test", () => {
    it("should test hidden message", () => {
        const testMessage = "Test message";
        const { queryByText, getByLabelText, getByText } = render(<HiddenMessage>{testMessage}</HiddenMessage>);
         expect(queryByText(testMessage)).toBeNull();

        fireEvent.click(getByLabelText(/show/i))

        expect(getByText(testMessage)).toBeInTheDocument();
    })

})
