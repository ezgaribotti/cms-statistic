import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toggleLogin } from "../app/actions";
import images from "../assets/images";
import lang from "../lang";
import IconGap from "../components/IconGap";
import Space from "../components/Space";

function Header() {
    const dispatch = useDispatch();

    return (
        <header className="d-flex align-items-center">
            <Container>
                <Row>
                    <Col lg={4} className="mx-auto text-center">
                        <Space>
                            <Image src={images.full_logo_white} fluid width={260} />
                        </Space>
                        <Button variant="outline-light" onClick={() => dispatch(toggleLogin())}>
                            <IconGap icon={faDoorOpen} size={null}>{lang.buttons.login}</IconGap>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
