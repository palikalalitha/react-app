
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





