import Cookie from "js-cookie";

import { API_SUCCESS, API_INITIAL, API_FAILED, API_FETCHING } from "@ib/api-constants";

import AuthAPI from "../../services/AuthService/AuthAPI";
import getUserSignInResponse from "../../fixtures/getUserSignInResponse.json";

import AuthStore from ".";

/* Mocking js-cookie library */

let mockSetCookie = jest.fn();
let mockRemoveCookie = jest.fn();

Cookie.set = mockSetCookie;
Cookie.remove = mockRemoveCookie;

describe("AuthStore Tests", () => {
    let authAPI;
    let authStore;

    beforeEach(() => {
        authAPI = new AuthAPI();
        authStore = new AuthStore(authAPI);
    });

    it("should test initialising auth store", () => {
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);
    });

    it("should test userSignInAPI data fetching state", () => {
        const onSuccess = jest.fn();
        const onFailure = jest.fn();

        const requestObject = {
            username: "test-user",
            password: "test-password",
        };

        const mockLoadingPromise = new Promise(function(resolve, reject) {});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        authAPI.signInAPI = mockSignInAPI;
        authStore.userSignIn(requestObject, onSuccess, onFailure);
        expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING);
        expect(onSuccess).not.toBeCalled();
        expect(onFailure).not.toBeCalled();

    });

    it("should test userSignInAPI success state", async() => {
        const onSuccess = jest.fn();
        const onFailure = jest.fn();

        const requestObject = {
            username: "test-user",
            password: "test-password",
        };

        const mockSuccessPromise = Promise.resolve(getUserSignInResponse);
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        authAPI.signInAPI = mockSignInAPI;

        await authStore.userSignIn(requestObject, onSuccess, onFailure);
        expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS);
        expect(mockSetCookie).toBeCalled();
        expect(onSuccess).toBeCalled();
    });

    // it("should test userSignInAPI failure state", async() => {
    //     const onSuccess = jest.fn();
    //     const onFailure = jest.fn();
    //     const requestObject = {
    //         username: "test-user",
    //         password: "test-password",
    //     };

    //     jest
    //         .spyOn(authAPI, "signInAPI")
    //         .mockImplementation(() => Promise.reject());

    //     authStore = new AuthStore(authAPI);
    //     await authStore.userSignIn(requestObject, onSuccess, onFailure);
    //     expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED);
    //     //expect((authStore.getUserSignInAPIError)).toBe(null)
    //     expect(onFailure).toBeCalled();
    // });
    it("should test userSignInAPI failure state", async() => {
        const onSuccess = jest.fn();
        const onFailure = jest.fn();
        const requestObject = {
            username: "test-user",
            password: "test-password"
        };

        const mockFailurePromise = new Promise(function(resolve, reject) {
            reject(new Error("error"));
        });

        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockFailurePromise);
        authAPI.signInAPI = mockSignInAPI;

        authStore = new AuthStore(authAPI);
        await authStore.userSignIn(requestObject, onSuccess, onFailure);

        expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED);
        expect(authStore.getUserSignInAPIError).toBe("error");
        expect(onFailure).toBeCalled();
    });

    it("should test user sign-out", () => {
        authStore.userSignOut();
        // expect(mockRemoveCookie).toBeCalled();
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);

    });

});
