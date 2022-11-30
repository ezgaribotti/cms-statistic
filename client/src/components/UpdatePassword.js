import axios from "axios";
import { Fragment, useReducer } from "react";
import { Alert, Badge, Button, Card, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import lang from "../lang";
import routes from "../routes";
import Space from "./Space";

function UpdatePassword() {

    const [data, setData] = useReducer((state, event) => {
        return {
            ...state,
            [event.name]: event.value
        };
    }, {});

    const handleChange = event => setData({ name: event.target.name, value: event.target.value });

    const handleSubmit = async event => {
        event.preventDefault();

        if (event.currentTarget.checkValidity()) {
            try {
                await axios.put(routes.update_password, data);
                toast.success(lang.success.update_password);

            } catch (error) {
                toast.error(error.response.data.message);
            }
        } else {
            toast.error(lang.errors.required);
        }
    };

    return (
        <Fragment>
            <Alert variant="warning">
                <h5>{lang.components.update_password.title}</h5>
                <p>{lang.components.update_password.warning_text}</p>
            </Alert>
            <Row>
                <Col lg={6} className="ms-auto">
                    <Badge>{lang.components.update_password.title}</Badge>
                    <Card>
                        <Card.Body>
                            <Form noValidate onSubmit={handleSubmit}>
                                <Space size={20}>
                                    <Form.Label>{lang.inputs.password}</Form.Label>
                                    <Form.Control name="password" type="password" onChange={handleChange} required />
                                </Space>
                                <Space size={20}>
                                    <Form.Label>{lang.inputs.password_confirmation}</Form.Label>
                                    <Form.Control name="password_confirmation" type="password" onChange={handleChange} required />
                                </Space>
                                <div className="text-end">
                                    <Button type="submit">{lang.buttons.accept}</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
}

export default UpdatePassword;
