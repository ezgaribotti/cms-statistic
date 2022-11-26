import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { chr } from "../helpers";
import lang from "../lang";
import routes from "../routes";
import IconGap from "./IconGap";
import Space from "./Space";

function CustomerDetails({ data }) {
    const details = [
        {
            title: lang.components.customer_details.data.full_name,
            data: data.first_name + chr(32) + data.last_name
        },
        {
            title: lang.components.customer_details.data.phone,
            data: data.phone
        },
        {
            title: lang.components.customer_details.data.email,
            data: data.email
        },
        {
            title: lang.components.customer_details.data.full_address,
            data: data.city + chr(44, 32) + data.street_address
        },
    ];

    return (
        <Card>
            <Card.Body>
                <Space>
                    <h6>{lang.components.customer_details.title}</h6>
                </Space>
                <Space>
                    <ListGroup variant="flush">
                        {details.map((detail, index) => {
                            return (
                                <ListGroup.Item key={index}>
                                    <p className="text-muted small">{detail.title}</p>
                                    <h6>{detail.data}</h6>
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </Space>
                <Link className="btn btn-primary" to={routes.customers + chr(47) + routes.path.edit + chr(47) + data.id}>
                    <IconGap icon={faUser} size={null}>{lang.components.customer_details.redirect_link}</IconGap>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default CustomerDetails;