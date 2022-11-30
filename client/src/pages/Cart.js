import { Fragment, useEffect, useState } from "react";
import { Badge, Button, Card, Col, FormControl, FormLabel, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Title from "../components/Title";
import CustomerDetails from "../components/CustomerDetails";
import config from "../config/cart";
import routes from "../routes";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { addItem, cleanCart, removeItem, setShowCartBar } from "../app/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Space from "../components/Space";
import { toast } from "react-toastify";
import axios from "axios";
import { chr } from "../helpers";
import IconGap from "../components/IconGap";
import lang from "../lang";

function IsPayer() {
    const { payer, items, total_amount } = useSelector(state => state.cart.payload);

    if (!payer.id) toast.error(lang.errors.missing_payer);

    return payer.id ? <Cart payer={payer} items={items} totalAmount={total_amount} /> : <Navigate to={routes.customers} />
}

function Cart({ payer, items = [], totalAmount }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [description, setDescription] = useState(null);

    const handleFinalize = async () => {
        try {
            let { data: preference } = await axios.post(routes.create_preference, { preference_has_order: items });
            let { data: order } = await axios.post(routes.orders, { customer_id: payer.id, preference_id: preference.data.preference_id, description: description });

            toast.success(lang.success.create);

            return navigate(routes.order_details + chr(47) + order.data.order_id);

        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        dispatch(setShowCartBar(false));
    }, [dispatch]);

    return (
        <Fragment>
            <Title>{config.title}</Title>
            <Row className={chr(103, 45) + 3}>
                <Col lg={4}>
                    <CustomerDetails data={payer} />
                </Col>
                <Col>
                    <Badge>{lang.pages.cart.title}</Badge>
                    <Table responsive bordered hover className="bg-white">
                        <thead>
                            <tr>
                                <th>{lang.inputs.name}</th>
                                <th>{lang.inputs.unit_price}</th>
                                <th>{lang.inputs.quantity}</th>
                                <th>{lang.inputs.partial_amount}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>${item.unit_price}</td>
                                        <td>{item.quantity}</td>
                                        <td>${(item.quantity * item.unit_price).toFixed(2)}</td>
                                        <td className="text-center">
                                            <Button variant="light" onClick={() => dispatch(addItem(item))}>
                                                <FontAwesomeIcon icon={faPlus} size="lg" />
                                            </Button>
                                            <Button variant="light" onClick={() => dispatch(removeItem(item))}>
                                                <FontAwesomeIcon icon={faMinus} size="lg" />
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <Link to={routes.products}>
                        <IconGap justifyContent="center" icon={faArrowAltCircleLeft}>{lang.pages.cart.add_products}</IconGap>
                    </Link>
                    <Space top>
                        <Card>
                            <Card.Body>
                                <Row className={chr(103, 45) + 3}>
                                    <Col lg={8}>
                                        <FormLabel>{lang.inputs.description}</FormLabel>
                                        <FormControl as="textarea" onChange={event => setDescription(event.target.value)} />
                                    </Col>
                                    <Col className="text-end">
                                        <Space>
                                        <h6>{lang.inputs.total_amount}</h6>
                                        <h5>${totalAmount.toFixed(2)}</h5>
                                        </Space>
                                        <Button onClick={handleFinalize} disabled={items.length === 0 ? true : false}>{lang.buttons.finalize}</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Space>
                    <Button variant="danger" onClick={() => dispatch(cleanCart())}>
                        <IconGap icon={faTrash} size={null}>{lang.pages.cart.clean_cart}</IconGap>
                    </Button>
                </Col>
            </Row>
        </Fragment>
    );
}

export default IsPayer;
