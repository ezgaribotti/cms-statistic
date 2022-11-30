import { faArrowDown, faCartPlus, faCartShopping, faCircleQuestion, faDoorOpen, faReceipt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { Button, Col, Container, OverlayTrigger, Row, Table, Tooltip } from "react-bootstrap";
import { useDispatch } from "react-redux";
import IconGap from "../components/IconGap";
import Space from "../components/Space";
import { chr } from "../helpers";
import lang from "../lang";
import routes from "../routes";
import themes from "../themes";
import Title from "./Title";
import { toggleLogin } from "../app/actions";

function Usage() {

    const dispatch = useDispatch();

    const steps = [
        {
            title: lang.home.usage.select_customer.title,
            description: lang.home.usage.select_customer.description,
            icon: faUserPlus
        },
        {
            title: lang.home.usage.add_products.title,
            description: lang.home.usage.add_products.description,
            icon: faCartPlus
        },
        {
            title: lang.home.usage.go_to_cart.title,
            description: lang.home.usage.go_to_cart.description,
            icon: faCartShopping
        },
        {
            title: lang.home.usage.finalize.title,
            description: lang.home.usage.finalize.description,
            icon: faReceipt
        },
    ];

    const users = [
        {
            title: lang.home.usage.users.admin.title,
            description: lang.home.usage.users.admin.description,
            username: "admin",
            password: "password",
        },
        {
            title: lang.home.usage.users.manager.title,
            description: lang.home.usage.users.manager.description,
            username: "manager",
            password: "password",
        },
        {
            title: lang.home.usage.users.guest.title,
            description: lang.home.usage.users.guest.description,
            username: "guest",
            password: "password",
        },
    ];

    return (
        <Fragment>
            <Container id={routes.home.usage}>
                <Title>{lang.home.app_bar.usage}</Title>
                <Row className={chr(103, 45) + 3}>
                    <Col lg={4}>
                        <h3 className="fw-semibold">{lang.home.usage.title}</h3>
                        <Space top>
                            <p>{lang.home.usage.info_text}</p>
                        </Space>
                        <Button onClick={() => dispatch(toggleLogin())}>
                            <IconGap icon={faDoorOpen} size={null}>{lang.buttons.login}</IconGap>
                        </Button>
                    </Col>
                    <Col lg={6} className="ms-auto">
                        <Table responsive bordered>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>{lang.inputs.username}</th>
                                    <th>{lang.inputs.password}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="table-light">
                                                <span>{user.title}</span>
                                                <OverlayTrigger overlay={<Tooltip>{user.description}</Tooltip>}>
                                                    <Button variant="link">
                                                        <FontAwesomeIcon icon={faCircleQuestion} size="lg" fixedWidth />
                                                    </Button>
                                                </OverlayTrigger>
                                            </td>
                                            <td>{user.username}</td>
                                            <td>{user.password}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                        <h6><em>* {lang.home.usage.table_info} </em><FontAwesomeIcon icon={faCircleQuestion} size="lg" fixedWidth /></h6>
                    </Col>
                </Row>
                <Space size={60} top className="text-center">
                    <h5>{lang.home.usage.create_order}</h5>
                    <FontAwesomeIcon icon={faArrowDown} size="xl" color={themes.tertiary} />
                </Space>
            </Container>
            <footer>
                <Container>
                    <Row className={chr(103, 45) + 3}>
                        {steps.map((step, index) => {
                            return (
                                <Col key={index} className="text-center text-lg-start" lg={3}>
                                    <Space size={20}>
                                        <FontAwesomeIcon icon={step.icon} color={themes.tertiary} size="2x" />
                                    </Space>
                                    <h5>{step.title}</h5>
                                    <p>{step.description}</p>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </footer>
        </Fragment>
    );
}

export default Usage;
