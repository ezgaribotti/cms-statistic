import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import routes from "../routes";

export const login = createAsyncThunk("login", async data => {
    let response = await axios.post(routes.login, data);
    return response.data;
});

export const recoverUserProfile = createAsyncThunk("recover_user_profile", async data => {
    let response = await axios.get(routes.user_profile, {
        headers: {
            Authorization: "Bearer " + data,
        }
    });

    response.data.access_token = data;
    return response.data;
});


export const logout = createAsyncThunk("logout", async () => {
    let response = await axios.get(routes.logout);
    return response.data;
});
