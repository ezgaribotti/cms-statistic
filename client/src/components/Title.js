import IconGap from "./IconGap";
import { Link } from "react-router-dom";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Space from "./Space";
import { faCalendarCheck, faCalendarPlus } from "@fortawesome/free-regular-svg-icons";
import { Col, Row } from "react-bootstrap";
import { chr } from "../helpers";
import lang from "../lang";

function Title({ children, size = 30 }) {
    return (
        <Space size={size}>
            <Link to={-1}>
                <IconGap icon={faArrowAltCircleLeft} size="xl">{children}</IconGap>
            </Link>
        </Space>
    );
}

function CreationDate({ children, createdAt }) {
    return (
        <Space>
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

function LastUpdate({ updatedAt }) {
    return (
        <Space top bottom={false}>
            <IconGap justifyContent="end" icon={faCalendarCheck}>{lang.inputs.last_update + chr(58, 32) + updatedAt}</IconGap>
        </Space>
    );
}

export default Object.assign(Title, { CreationDate, LastUpdate });
