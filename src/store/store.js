import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { shopSlice } from "./slices/shop/shopSlice";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const strore = configureStore({
    reducer: {
        shop: shopSlice.reducer,
        auth: authSlice.reducer,
    },
    preloadedState: {
        shop: {
            products: initialCartItems,
        },
    },
});