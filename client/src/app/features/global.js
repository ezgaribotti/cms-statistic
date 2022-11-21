import { createSlice } from "@reduxjs/toolkit";
import { toggleSidebar } from "../actions";

const initialState = {
    sidebar: true,
};

const __init__ = createSlice({
    name: "global",
    initialState: {
        payload: initialState
    },
    extraReducers: (builder) => {
        builder.addCase(toggleSidebar, (state, action) => {
            state.payload.sidebar = !state.payload.sidebar
        })
    }
});

export default __init__.reducer;
