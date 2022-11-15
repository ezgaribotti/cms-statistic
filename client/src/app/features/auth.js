import { createSlice } from "@reduxjs/toolkit";
import { login, logout, recoverUserProfile } from "../actions";

const initialState = {
    access_token: null,
    auth: false,
    user_profile: {
        full_name: null
    }
};

const __init__ = createSlice({
    name: "auth",
    initialState: {
        payload: initialState
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.payload.access_token = action.payload.access_token;
            state.payload.user_profile = action.payload.data;
            state.payload.auth = true;

            sessionStorage.setItem("access_token", action.payload.access_token);
        });

        builder.addCase(logout.fulfilled, (state, action) => {
            state.payload = initialState;

            sessionStorage.removeItem("access_token");
        });

        builder.addCase(recoverUserProfile.fulfilled, (state, action) => {
            state.payload.access_token = action.payload.access_token;
            state.payload.user_profile = action.payload.data;
            state.payload.auth = true;
        });
    },
});

export default __init__.reducer;
