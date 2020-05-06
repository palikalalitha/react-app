import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import { SignInPage } from "./SignInPage"

describe("SignInPage test", () => {
    it("should render typed username", () => {
        const username = "test-user";
        const { getByPlaceholderText } = render(
            <SignInPage username={username}  />
        )
        const usernameField = getByPlaceholderText("Username");
        expect(usernameField.value).toBe(username);
    });
    it("should render typed password", () => {
        const password = "test-password";
        const { getByPlaceholderText } = render(
            <SignInPage password={password} onChangePassword={() => {}} />
        );
        const passwordField = getByPlaceholderText("Password");
        expect(passwordField.value).toBe(password);
    });

    // it("should render given error message", () => {
    //     const errorMessage = "Please enter username"
    //     const { getByText } = render(
    //         <SignInPage errorMessage={errorMessage} />
    //     );
    //     getByText(`/${errorMessage}/i`);
    // });
});

//App.js

// })

// test("should render typed username", () => {
//     const username = "test-user";
//     render(<SignInPage username={username}/>)
//     const usernameField = screen.getByPlaceholderText("Username");
//     expect(usernameField.value).toBe(username);
// })

// test('should render typed password', () => {
//     const password = "test-user";
//     render(<SignInPage password={password}/>)
//     const usernameField = screen.getByPlaceholderText("Password");
//     expect(usernameField.value).toBe(password);
// })
// test('should render typed password', () => {
//     render(
//         <SignInPage errorMessage="Network error" />
//     );
//     screen.getByText(/Network error/i);
// })
