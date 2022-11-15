import { useReducer } from "react";
import { login } from "../app/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { unwrapResult } from "@reduxjs/toolkit";
import routes from "../routes";

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [data, setData] = useReducer((state, event) => {
        return {
            ...state,
            [event.name]: event.value
        };
    }, {});

    const handleSubmit = async event => {
        event.preventDefault();

        if (event.currentTarget.checkValidity() === true) {
            dispatch(login(data)).then(unwrapResult).then(response => navigate(routes.dashboard)).catch(error => toast.error("Las credenciales ingresadas no son válidas."));

        }
    };

    const handleChange = event => setData({ name: event.target.name, value: event.target.value });

    return (
        <form noValidate onSubmit={handleSubmit}>
            <input name="username" onChange={handleChange} required />
            <input type="password" name="password" onChange={handleChange} required />
            <button type="submit">Iniciar sesión</button>
        </form>
    );
}

export default Login;

