import React from "react";

import { render, fireEvent, waitFor } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";

import {
    SIGN_IN_PATH
}
from "../../../Authentication/constants/RouteConstants";

import {
    PRODUCT_PATH
}
from "../../../ECommerceApp/constants/RouteConstants";

import ProductService from "../../services/ProductService/ProductServiceAPI.js";
import ProductStore from "../../stores/ProductStore";

import AuthAPI from "../../../Authentication/services/AuthService/AuthAPI.js";
import AuthStore from "../../../Authentication/stores/AuthStore";

import  CartStore  from "../../stores/CartStore";
import { ProductRoute } from ".";

const LocationDisplay = withRouter(({ location }) => (
    <div data-testid="location-display">{location.pathname}</div>
));
describe("ProductRoute Tests", () => {
    let productAPI;
    let productStore;
    let authAPI;
    let authStore;
    let cartStore;

    beforeEach(() => {
        productAPI = new ProductService();
        productStore = new ProductStore(productAPI);
        authAPI = new AuthAPI();
        authStore = new AuthStore(authAPI);
        cartStore = new CartStore(productStore)

    });

    it("should render the sign in path state", async() => {

        const history = createMemoryHistory();
        const route = PRODUCT_PATH;
        history.push(route);

        const {
            getByRole,
            queryByRole,
            getByTestId,
        } = render(
            <Provider productStore={productStore} authStore={authStore} 
            cartStore={cartStore}>
                <Router history={history}>
                  <Route path={SIGN_IN_PATH}>
                    <LocationDisplay />
                  </Route>
                  <Route path={PRODUCT_PATH}>
                    <ProductRoute />
                  </Route>
                </Router>
            </Provider>
        );
        const signOutButton = getByRole("button", { name: "Sign Out" });
        fireEvent.click(signOutButton);

        await waitFor(() => {
            expect(getByTestId("location-display")).toHaveTextContent(
                SIGN_IN_PATH)
        });
    });
   it("should test props ",()=>
   {
    
    // const { getByText, getByPlaceholderText, getByRole, debug } = render(
    //     <Router history={createMemoryHistory()}>
    // <ProductRoute authStore={authStore} productStore={productStore}  cartStore={cartStore} />
    // </Router>
    // );


   })
});

