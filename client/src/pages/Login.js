import { useReducer } from "react";
import { login } from "../app/actions";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { unwrapResult } from "@reduxjs/toolkit";
import routes from "../routes";
import { Col, Container, Row, Image, Form, Card, Button } from "react-bootstrap";
import images from "../assets/images";
import Space from "../components/Space";
import lang from "../lang";
import IconGap from "../components/IconGap";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

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

        if (event.currentTarget.checkValidity()) {
            dispatch(login(data)).then(unwrapResult).then(response => navigate(routes.dashboard)).catch(error => toast.error(lang.errors.credentials));

        } else {
            toast.error(lang.errors.required);
        }
    };

    const handleChange = event => setData({ name: event.target.name, value: event.target.value });

    return (
        <section>
            <Container>
                <Row>
                    <Col lg={4} className="mx-auto">
                        <Space size={10} top className="text-center">
                            <Image src={images.logoAlt} width={180} />
                        </Space>
                        <Card>
                            <Card.Body>
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Space size={20}>
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control name="username" onChange={handleChange} required />
                                    </Space>
                                    <Space size={20}>
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control name="password" type="password" onChange={handleChange} required />
                                    </Space>
                                    <div className="text-end">
                                        <Button type="submit">{lang.login.submit_button}</Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Space bottom={false} top>
                            <Link to={routes.home}>
                                <IconGap icon={faArrowAltCircleLeft} justifyContent="center">{lang.login.go_back}</IconGap>
                            </Link>
                        </Space>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Login;
