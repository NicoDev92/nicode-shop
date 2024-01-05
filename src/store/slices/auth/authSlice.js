import { createSlice } from "@reduxjs/toolkit";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
    isLoadingLogin: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialLogin,
    reducers: {
        onLogin: (state, action) => {
            state.isAuth = true;
            state.user = action.payload;
            state.isLoadingLogin = false;
        },
        onLogout: (state) => {
            state.isAuth = false;
            state.user = undefined;
            state.isLoadingLogin = false;
        },
        onInitLogin: (state) => {
            state.isLoadingLogin = true;
        }
    }
});

export const {
    onLogin,
    onLogout,
    onInitLogin,
} = authSlice.actions;