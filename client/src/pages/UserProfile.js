import { useSelector } from "react-redux";
import Space from "../components/Space";
import Title from "../components/Title";
import config from "../config/userProfile";
import { Alert, Button, Card, Col, Form, Row } from "react-bootstrap";
import IconGap from "../components/IconGap";
import { faCircleUser, faShieldHalved, faUserLock, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import lang from "../lang";
import { chr } from "../helpers";
import { Fragment, useReducer } from "react";
import routes from "../routes";
import axios from "axios";
import { toast } from "react-toastify";

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
                toast.success(lang.user_profile.update_password.success);

            } catch (error) {
                toast.error(error.response.data.message);
            }
        } else {
            toast.error(lang.errors.required);
        }
    };

    return (
        <Fragment>
            <Row>
                <Col lg={6}>
                    <Alert variant="warning">
                        <h5>{lang.user_profile.update_password.alert.title}</h5>
                        <p>{lang.user_profile.update_password.alert.warning_text}</p>
                    </Alert>
                </Col>
                <Col className="ms-auto">
                    <Card>
                        <Card.Body>
                            <Space>
                                <Card.Subtitle>{lang.user_profile.update_password.title}</Card.Subtitle>
                            </Space>
                            <Form noValidate onSubmit={handleSubmit}>
                                <Space size={20}>
                                    <Form.Label>{lang.user_profile.update_password.inputs.password}</Form.Label>
                                    <Form.Control name="password" type="password" onChange={handleChange} required />
                                </Space>
                                <Space size={20}>
                                    <Form.Label>{lang.user_profile.update_password.inputs.password_confirmation}</Form.Label>
                                    <Form.Control name="password_confirmation" type="password" onChange={handleChange} required />
                                </Space>
                                <div className="text-end">
                                    <Button type="submit">{lang.user_profile.update_password.submit_button}</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
}

function UserProfile() {

    const { user_profile } = useSelector(state => state.auth.payload);

    const data = [
        {
            icon: faUserGear,
            title: lang.user_profile.data.id,
            data: user_profile.id
        },
        {
            icon: faCircleUser,
            title: lang.user_profile.data.full_name,
            data: user_profile.full_name
        },
        {
            icon: faUserLock,
            title: lang.user_profile.data.username,
            data: user_profile.username
        },
        {
            icon: faShieldHalved,
            title: lang.user_profile.data.role,
            data: user_profile.role.name
        }
    ];

    return (
        <Fragment>
            <Title.IconGap createdAt={user_profile.created_at}>{config.title}</Title.IconGap>
            <Space>
                <Row className={chr(103, 45) + 3}>
                    {data.map((x, index) => {
                        return (
                            <Col lg={3} key={index}>
                                <Card>
                                    <Card.Body>
                                        <IconGap icon={x.icon}>{x.title}</IconGap>
                                        <Space top bottom={false} className="text-end">
                                            <Card.Title>{x.data}</Card.Title>
                                        </Space>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Space>
            <Space size={15}>
                <UpdatePassword />
            </Space>
            <IconGap justifyContent="end" icon={faCalendarCheck}>{lang.user_profile.data.updated_at + chr(58, 32) + user_profile.updated_at}</IconGap>
        </Fragment>
    );
}

export default UserProfile;
