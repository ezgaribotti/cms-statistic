import { Fragment, useState } from "react";
import { Button, Card, Col, FormControl, FormLabel, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Title from "../components/Title";
import CustomerDetails from "../components/CustomerDetails";
import config from "../config/cart";
import routes from "../routes";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { addItem, cleanCart, removeItem } from "../app/actions";
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

    const handlePay = async () => {
        try {
            let { data: preference } = await axios.post(routes.create_preference, { preference_has_order: items });
            let { data: order } = await axios.post(routes.orders, { customer_id: payer.id, preference_id: preference.data.preference_id, description: description });

            toast.success(lang.pages.cart.order_success);

            return navigate(routes.order_details + chr(47) + order.data.order_id);

        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <Fragment>
            <Title>{config.title}</Title>
            <Row>
                <Col lg={4}>
                    <CustomerDetails data={payer} />
                </Col>
                <Col>
                    <Table responsive bordered hover className="bg-white">
                        <thead>
                            <tr>
                                <th>{lang.pages.cart.items.name}</th>
                                <th>{lang.pages.cart.items.unit_price}</th>
                                <th>{lang.pages.cart.items.quantity}</th>
                                <th>{lang.pages.cart.items.partial_amount}</th>
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
                        <IconGap justifyContent="center" icon={faArrowAltCircleLeft}>{lang.pages.cart.redirect_link}</IconGap>
                    </Link>
                    <Space top>
                        <Card>
                            <Card.Body>
                                <Space>
                                    <h6>{lang.pages.cart.order.title}</h6>
                                </Space>
                                <Row>
                                    <Col lg={8}>
                                        <FormLabel>{lang.pages.cart.order.description}</FormLabel>
                                        <FormControl as="textarea" onChange={event => setDescription(event.target.value)} />
                                    </Col>
                                    <Col className="text-end">
                                        <Space>
                                        <h6>{lang.pages.cart.order.total_amount}</h6>
                                        <h5>${totalAmount.toFixed(2)}</h5>
                                        </Space>
                                        <Button size="lg" onClick={handlePay} disabled={items.length === 0 ? true : false}>{lang.pages.cart.order.pay_button}</Button>
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
