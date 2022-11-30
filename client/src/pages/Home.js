import Header from "../home/Header";
import AppBar from "../home/AppBar";
import Login from "../home/Login";
import AboutUs from "../home/AboutUs";
import Usage from "../home/Usage";
import BackToTop from "../home/BackToTop";
import CreateFeedback from "../home/CreateFeedback";
import { Col, Container, Row } from "react-bootstrap";
import Space from "../components/Space";
import lang from "../lang";
import Footer from "../components/Footer";

function Home() {
    return (
        <section>
            <AppBar />
            <Login />
            <Header />
            <Container fluid className="bg-secondary">
                <Row>
                    <Col className="text-center">
                        <Space size={15} top>
                            <h6 className="text-white">&#127881; {lang.home.special_bar} &#127881;</h6>
                        </Space>
                    </Col>
                </Row>
            </Container>
            <Space top><AboutUs /></Space>
            <Usage />
            <BackToTop />
            <CreateFeedback />
            <Footer />
        </section>
    );
}

export default Home;
