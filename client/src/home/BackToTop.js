import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import images from "../assets/images";
import routes from "../routes";
import IconGap from "../components/IconGap";
import Space from "../components/Space";
import { chr } from "../helpers";
import lang from "../lang";

function BackToTop() {
    return (
        <article>
            <Container>
                <Row>
                    <Col lg={4} className="mx-auto text-center">
                        <Space>
                            <Image src={images.full_logo_white} fluid width={240} />
                        </Space>
                        <Button variant="link" className="text-white" href={routes.index + chr(35)}>
                            <IconGap justifyContent="center" icon={faArrowAltCircleUp}>{lang.home.back_to_top.title}</IconGap>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </article>
    );
}

export default BackToTop;
