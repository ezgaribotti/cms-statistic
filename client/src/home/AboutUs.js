import lang from "../lang";
import routes from "../routes";
import images from "../assets/images";
import Title from "./Title";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { faArrowAltCircleDown, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import Space from "../components/Space";
import IconGap from "../components/IconGap";
import themes from "../themes";
import { chr } from "../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutUs() {
    return (
        <Container id={routes.home.about_us}>
            <Title>{lang.home.app_bar.about_us} &copy;</Title>
            <Space size={80}>
                <Row className={chr(103, 45) + 3}>
                    <Col lg={4}>
                        <h3 className="fw-semibold">{lang.home.about_us.title}</h3>
                        <h6><em>{lang.home.about_us.subtitle}</em></h6>
                        <Space top>
                            <p>{lang.home.about_us.info_text}</p>
                        </Space>
                        <Button href={chr(35) + routes.home.usage}>
                            <IconGap icon={faArrowAltCircleDown} size={null}>{lang.buttons.continue}</IconGap>
                        </Button>
                    </Col>
                    <Col lg={6} className="ms-auto">
                        <Image src={images.desktop} fluid />
                    </Col>
                </Row>
            </Space>
            <Row>
                <Col lg={4} className="mx-auto text-center">
                    <Space>
                        <FontAwesomeIcon icon={faCircleQuestion} size="2x" color={themes.tertiary} />
                    </Space>
                    <h5>{lang.home.about_us.questions}</h5>
                    <p>{lang.home.about_us.contact_me}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;
