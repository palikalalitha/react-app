import React from "react"
import { render } from "@testing-library/react"
import { HelloMessage } from "./HelloMessage.js"

describe("HelloMessage", () => {
    it("shoul render given message", () => {
        const { getByText, debug } = render(<HelloMessage message="world"/>);
        getByText(/world/i);
        
    })
})
