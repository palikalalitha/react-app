import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import OnChange from "./OnChange.js"
test('sets the value to the upper version of the value', () => {
    render(<OnChange />)
    const upperInput = screen.getByLabelText(/upper/i)
    const upper = 'stuff'
    // this is how you might be used to doing this to change the input value:
    // upperInput.value = upper
    // fireEvent.change(upperInput)
    // However due to the way React tracks input values, you cannot
    // simply set the `.value` property of an input node and fire a change event
    // so fireEvent allows you to specify properties you want applied to the
    // target in a way that side-step's React's tracking so you can correctly
    // test the onChange handler's behavior
    fireEvent.change(upperInput, { target: { value: upper } })
    expect(upperInput.value).toEqual(upper.toUpperCase())
})
