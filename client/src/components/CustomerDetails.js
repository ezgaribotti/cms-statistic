import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { Badge, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { chr } from "../helpers";
import lang from "../lang";
import routes from "../routes";
import Space from "./Space";

function CustomerDetails({ data }) {
    const details = [
        {
            title: lang.inputs.full_name,
            data: data.first_name + chr(32) + data.last_name
        },
        {
            title: lang.inputs.phone,
            data: data.phone
        },
        {
            title: lang.inputs.email,
            data: data.email
        },
        {
            title: lang.inputs.full_address,
            data: data.city + chr(44, 32) + data.street_address
        },
    ];

    return (
        <Fragment>
            <Badge>{lang.components.customer_details.title}</Badge>
            <Card>
                <Card.Body>
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
                    <Link className="btn btn-outline-primary" to={routes.customers + chr(47) + routes.path.edit + chr(47) + data.id}>
                        <FontAwesomeIcon icon={faUserPen} size="lg" />
                    </Link>
                </Card.Body>
            </Card>
        </Fragment>
    );
}

export default CustomerDetails;