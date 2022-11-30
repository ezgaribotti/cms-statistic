import { Col, Container, Row } from "react-bootstrap";
import lang from "../lang";

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h6 className="text-muted">{lang.components.footer.copyright} &copy;</h6>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;