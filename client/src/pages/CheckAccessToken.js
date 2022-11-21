import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { recoverUserProfile } from "../app/actions";
import routes from "../routes";

function CheckAccessToken() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const accessToken = sessionStorage.getItem("access_token");

    useEffect(() => {

        accessToken ? dispatch(recoverUserProfile(accessToken)).then(unwrapResult).then(response => navigate(-1)).catch(error => navigate(routes.login)) : navigate(routes.login);
    }, []);

    return (
        <div></div>
    );
}

export default CheckAccessToken;
