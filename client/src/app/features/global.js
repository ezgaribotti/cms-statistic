import { createSlice } from "@reduxjs/toolkit";
import { toggleLogin, toggleSidebar } from "../actions";

const initialState = {
    sidebar: true,
    login: false,
};

const __init__ = createSlice({
    name: "global",
    initialState: {
        payload: initialState
    },
    extraReducers: (builder) => {
        builder.addCase(toggleSidebar, (state, action) => {
            state.payload.sidebar = !state.payload.sidebar
        });
        builder.addCase(toggleLogin, (state, action) => {
            state.payload.login = !state.payload.login
        });
    }
});

export default __init__.reducer;
