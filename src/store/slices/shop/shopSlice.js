import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name: "shop",
    initialState: {
        products: [],
    },
    reducers: {
        addProductToCart: (state, action) => {
            state.products.push({
                product: action.payload.product,
                quantity: action.payload.quantity,
            });
        },

        updateQuantityProductToCart: (state, action) => {
            state.products = state.products.map((item) => {
                if (item.product.id === action.payload.product.id) {
                    return {
                        ...item,
                        quantity: action.payload.quantity,
                    };
                }
                return item;
            });
        },
        addQuantityProductToCart: (state, action) => {
            state.products = state.products.map((item) => {
                if (item.product.id === action.payload.product.id) {
                    return {
                        ...item,
                    };
                }
                return item;
            });
        },
        removeProductFromCart: (state, action) => {
            state.products = state.products.filter((item) => item.product.id !== action.payload);
        },
        loadingProducts: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const {
    addProductToCart,
    updateQuantityProductToCart,
    addQuantityProductToCart,
    removeProductFromCart,
    loadingProducts,
} = shopSlice.actions;

