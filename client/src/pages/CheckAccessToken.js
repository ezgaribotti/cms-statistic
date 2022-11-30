import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { recoverUserProfile } from "../app/actions";
import routes from "../routes";

function CheckAccessToken() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const accessToken = sessionStorage.getItem("access_token");

        accessToken ? dispatch(recoverUserProfile(accessToken)).then(unwrapResult).then(() => navigate(-1)).catch(() => navigate(routes.index)) : navigate(routes.index);
    }, [dispatch, navigate]);

    return null;
}

export default CheckAccessToken;
