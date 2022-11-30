import { useReducer } from "react";
import { login, toggleLogin } from "../app/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import routes from "../routes";
import { Image, Form, Button, Offcanvas } from "react-bootstrap";
import images from "../assets/images";
import Space from "../components/Space";
import lang from "../lang";
import IconGap from "../components/IconGap";
import { faDoorOpen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { unwrapResult } from "@reduxjs/toolkit";

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const show = useSelector(state => state.global.payload.login);

    const [data, setData] = useReducer((state, event) => {
        return {
            ...state,
            [event.name]: event.value
        };
    }, {});

    const handleSubmit = async event => {
        event.preventDefault();

        if (event.currentTarget.checkValidity()) {
            dispatch(login(data)).then(unwrapResult).then(() => navigate(routes.dashboard)).catch(() => toast.error(lang.errors.credentials));

        } else {
            toast.error(lang.errors.required);
        }
    };

    const handleChange = event => setData({ name: event.target.name, value: event.target.value });

    return (
        <Offcanvas show={show} scroll className="bg-white" style={{ width: 320 }} placement="end" onHide={() => dispatch(toggleLogin())}>
            <Offcanvas.Body>
                <Button variant="link" onClick={() => dispatch(toggleLogin())}>
                    <FontAwesomeIcon icon={faXmark} size="xl" />
                </Button>
                <Space className="text-center">
                    <Space>
                        <Image src={images.full_logo} fluid width={160} />
                    </Space>
                    <h6>{lang.buttons.login}</h6>
                </Space>
                <Form noValidate onSubmit={handleSubmit}>
                    <Space size={20}>
                        <Form.Label>{lang.inputs.username}</Form.Label>
                        <Form.Control name="username" onChange={handleChange} required />
                    </Space>
                    <Space size={20}>
                        <Form.Label>{lang.inputs.password}</Form.Label>
                        <Form.Control name="password" type="password" onChange={handleChange} required />
                    </Space>
                    <Space bottom={false} className="text-center">
                        <Button type="submit">
                            <IconGap icon={faDoorOpen} size={null}>{lang.buttons.login}</IconGap>
                        </Button>
                    </Space>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Login;
