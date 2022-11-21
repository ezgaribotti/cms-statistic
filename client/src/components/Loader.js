import Space from "./Space";
import { Row, Col, Spinner } from "react-bootstrap";
import lang from "../lang";

function Loader() {
    return (
        <Space top>
            <Row>
                <Col className="text-center">
                    <Space>
                        <Spinner animation="border" variant="primary" role="status" />
                    </Space>
                    <h6>{lang.components.loader.loading_info}</h6>
                </Col>
            </Row>
        </Space>
    );
}

export default Loader;
