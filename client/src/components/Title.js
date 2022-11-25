import IconGap from "./IconGap";
import { Link } from "react-router-dom";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Space from "./Space";
import { faCalendarPlus } from "@fortawesome/free-regular-svg-icons";
import { Col, Row } from "react-bootstrap";

function Title({ children, size = 15 }) {
    return (
        <Space size={size}>
            <Link to={-1} className="btn btn-link">
                <IconGap icon={faArrowAltCircleLeft} size="xl">{children}</IconGap>
            </Link>
        </Space>
    );
}

function Gap({ children, createdAt }) {
    return (
        <Space size={15}>
            <Row className="align-items-center">
                <Col xs={6}>
                    <Title size={null}>{children}</Title>
                </Col>
                <Col>
                    <IconGap justifyContent="end" icon={faCalendarPlus}>{createdAt}</IconGap>
                </Col>
            </Row>
        </Space>
    );
}

export default Object.assign(Title, { IconGap: Gap });
