import { Alert, Badge, Col, Row, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Space from "../components/Space";
import Title from "../components/Title";
import routes from "../routes";
import config from "../config/orders";
import { Fragment } from "react";
import { chr } from "../helpers";
import lang from "../lang";
import { faArrowTrendDown, faArrowTrendUp, faEye, faPeopleCarryBox, faTruck } from "@fortawesome/free-solid-svg-icons";
import IconGap from "../components/IconGap";
import CustomerDetails from "../components/CustomerDetails";

function OverallDetails({ data }) {
    const details = [
        {
            title: lang.inputs.order_number,
            icon: faPeopleCarryBox,
            data: data.order_number
        },
        {
            title: lang.inputs.status,
            icon: faTruck,
            data: data.status.name
        },
        {
            title: lang.inputs.total_amount,
            icon: faArrowTrendUp,
            data: data.preference.payment_amount,
            dollar: true
        },
        {
            title: lang.inputs.refund_amount,
            icon: faArrowTrendDown,
            data: data.preference.refund_amount,
            dollar: true
        },
    ];

    return (
        <Row className={chr(103, 45) + 3}>
            {details.map((detail, index) => {
                return (
                    <Col lg={3} key={index}>
                        <IconGap.Box icon={detail.icon} title={detail.title}>{detail.dollar ? chr(36) + detail.data : detail.data}</IconGap.Box>
                    </Col>
                )
            })}
        </Row>
    );
}

function ItemsTable({ data }) {
    return (
        <Table responsive bordered hover className="bg-white">
            <thead>
                <tr>
                    <th>{lang.inputs.id}</th>
                    <th>{lang.inputs.name}</th>
                    <th>{lang.inputs.fixed_price}</th>
                    <th>{lang.inputs.quantity}</th>
                    <th>{lang.inputs.partial_amount}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.preference_has_order.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.product_id}</td>
                            <td>{item.product.name}</td>
                            <td>${item.fixed_price}</td>
                            <td>{item.quantity}</td>
                            <td>${item.partial_amount}</td>
                            <td className="text-center">
                                <Link className="btn btn-link" to={routes.products + chr(47) + routes.path.edit + chr(47) + item.product_id}>
                                    <FontAwesomeIcon icon={faEye} size="lg" />
                                </Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}

function OrderDetails() {
    const { id } = useParams();
    const { data } = useSWR(config.route + chr(47) + id);

    return (
        <Fragment>
            <Title.CreationDate createdAt={data.data.created_at}>{config.title + chr(32, 47, 32) + id}</Title.CreationDate>
            <Space>
                <OverallDetails data={data.data} />
            </Space>
            <Row>
                <Col lg={8}>
                    <Badge>{lang.pages.order_details.title}</Badge>
                    <ItemsTable data={data.data} />
                    <Alert>
                        <h5>{lang.inputs.description}</h5>
                        <p>{data.data.description}</p>
                    </Alert>
                </Col>
                <Col>
                    <CustomerDetails data={data.data.customer} />
                    <Title.LastUpdate updatedAt={data.data.updated_at} />
                </Col>
            </Row>
        </Fragment>
    );
}

export default OrderDetails;
