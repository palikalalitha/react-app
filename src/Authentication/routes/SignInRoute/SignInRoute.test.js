import React from "react";
//import { shallow, mount } from 'enzyme';
import { render, fireEvent, waitFor, waitForElement } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";

import getUserSignInResponse from "../../fixtures/getUserSignInResponse.json";

import { SignInRoute } from "."
import {
    SIGN_IN_PATH
}
from "../../constants/RouteConstants";

import {
    PRODUCT_PATH
}
from "../../../ECommerceApp/constants/RouteConstants";

import AuthAPI from "../../services/AuthService/AuthAPI.js"
import AuthStore from "../../stores/AuthStore"

const LocationDisplay = withRouter(({ location }) => (
    <div data-testid="location-display">{location.pathname}</div>
));
describe("SignInRoute Tests", () => {
    let authAPI;
    let authStore;
    beforeEach(() => {
        authAPI = new AuthAPI();
        authStore = new AuthStore(authAPI);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it("should render username empty error message", () => {
        const { getByText, getAllByText, getByRole } = render(
            <Router history={createMemoryHistory()}>
                        <SignInRoute authStore={authStore} />
                          </Router>
        );
        const signInButton = getByRole("button", { name: "Sign in" });

        fireEvent.click(signInButton);
        getByText(/Please enter username/i)
    });
    it("should render password empty error message", () => {
        const { getByText, getByPlaceholderText, getByRole, debug } = render(
            <Router history={createMemoryHistory()}>
        <SignInRoute authStore={authStore} />
      </Router>
        );
        const username = "test-user";
        const usernameField = getByPlaceholderText("Username");
        const signInButton = getByRole("button", { name: "Sign in" });

        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.click(signInButton);
        getByText(/Please enter password/i);
    });
    it("should submit sign-in on press enter", () => {
        const { getByLabelText, getByPlaceholderText, getByRole, getByText } = render(
            <Router history={createMemoryHistory()}>
                    <SignInRoute authStore={authStore} />
                  </Router>
        );
        const username = "test-user";
        const password = "test-password";

        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "Sign in" });

        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(signInButton);

        //waitFor(() => getByLabelText(""));
        getByText("Loading")
    });
    // it('calls onSubmit prop function when form is submitted', () => {
    //     const onSubmitFn = jest.fn();
    //     const wrapper = mount(<SignInRoute authStore={authStore}/>);
    //     const form = wrapper.find('form');
    //     form.simulate('submit');
    //     expect(onSubmitFn).toHaveBeenCalledTimes(1);
    //   });

    it("should render signInRoute loading state", async() => {
        const { getByLabelText, getByPlaceholderText, getByRole, getByText } = render(
            <Router history={createMemoryHistory()}>
        <SignInRoute authStore={authStore} />
      </Router>
        );
        const username = "test-user";
        const password = "test-password";

        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "Sign in" });

        const mockLoadingPromise = new Promise(function(resolve, reject) {});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        authAPI.signInAPI = mockSignInAPI;

        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(signInButton);

        getByText("Loading");
        getByRole("button", { name: "Sign in", disabled: true });
    });
    it("should render signInRoute success state", async() => {
        const history = createMemoryHistory();
        const route = SIGN_IN_PATH;
        history.push(route);

        const {
            getByPlaceholderText,
            getByRole,
            queryByRole,
            queryByLabelText,
            getByTestId,
            debug
        } = render(
            <Provider authStore={authStore}>
                <Router history={history}>
                  <Route path={SIGN_IN_PATH}>
                    <SignInRoute />
                  </Route>
                  <Route path={PRODUCT_PATH}>
                    <LocationDisplay />
                  </Route>
                </Router>
            </Provider>
        );

        const username = "test-user";
        const password = "test-password";

        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "Sign in" });

        const mockSuccessPromise = new Promise(function(resolve, reject) {
            resolve(getUserSignInResponse);
        });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        authAPI.signInAPI = mockSignInAPI;

        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(signInButton);

        // const navigation = await waitForElement(() => getByTestId("location-display"));
        // expect(navigation).toHaveTextContent(PRODUCT_PATH)
        // expect(
        //     queryByRole("button", { name: "Sign in" })
        // ).not.toBeInTheDocument();
        await waitFor(() => {
            expect(
                queryByRole("button", { name: "Sign in" })
            ).not.toBeInTheDocument();

            expect(getByTestId("location-display")).toHaveTextContent(
                PRODUCT_PATH

            )
        });
    });
    it("should render signInRoute failure state", async() => {
        const { getByText, getByPlaceholderText, getByRole, debug } = render(
            <Router history={createMemoryHistory()}>
        <SignInRoute authStore={authStore} />
      </Router>
        );
        console.log("hisroty",history)
        const username = "test-user";
        const password = "test-password";

        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "Sign in" });

        const mockFailurePromise = new Promise(function(resolve, reject) {
            reject(new Error("error"));
        }).catch(() => {});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockFailurePromise);
        authAPI.signInAPI = mockSignInAPI;

        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(signInButton);


        // const error = await waitForElement(() => getByText(/Network Error/i));
        // expect(error).toHaveTextContent("Network Error")

        await waitFor(() => {
            getByText(/Network Error/i);
        });


    });

});
