import { faArrowAltCircleUp, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Space from "../components/Space";
import { chr } from "../helpers";
import lang from "../lang";
import routes from "../routes";
import Title from "./Title";
import axios from "axios";
import useSWR from "swr";
import IconGap from "../components/IconGap";
import { useReducer } from "react";
import { toast } from "react-toastify";

function CreateFeedback() {

    const { data: sortings } = useSWR(routes.sortings);

    const [data, setData] = useReducer((state, event) => {
        return {
            ...state,
            [event.name]: event.value
        };
    }, {});

    const handleSubmit = async event => {
        event.preventDefault();

        if (event.currentTarget.checkValidity()) {
            try {
                await axios.post(routes.feedbacks, data);
                toast.success(lang.success.create);

            } catch (error) {
                toast.error(error.response.data.message);
            }

        } else {
            toast.error(lang.errors.required);
        }
    };

    const handleChange = event => setData({ name: event.target.name, value: event.target.value });

    return (
        <footer>
            <Container id={routes.home.create_feedback}>
                <Title>{lang.home.app_bar.create_feedback}</Title>
                <Row className={chr(103, 45) + 3}>
                    <Col lg={4}>
                        <h3 className="fw-semibold">{lang.home.create_feedback.title}</h3>
                        <Space top><p>{lang.home.create_feedback.info_text}</p></Space>
                        <Button href={chr(35) + routes.home.usage}>
                            <IconGap icon={faArrowAltCircleUp} size={null}>{lang.home.app_bar.usage}</IconGap>
                        </Button>
                    </Col>
                    <Col lg={6} className="ms-auto">
                        <Form noValidate onSubmit={handleSubmit}>
                            <Space size={20}>
                                <Row>
                                    <Col>
                                        <Form.Label>{lang.inputs.order_number}</Form.Label>
                                        <Form.Control name="tracking_number" onChange={handleChange} required />
                                    </Col>
                                    <Col>
                                        <Form.Label>{lang.inputs.sorting}</Form.Label>
                                        <Form.Select name="sorting_id" onChange={handleChange} required>
                                            <option></option>
                                            {sortings.data.map((sorting, index) => {
                                                return (
                                                    <option key={index} value={sorting.id}>{sorting.name}</option>
                                                );
                                            })}
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </Space>
                            <Space size={20}>
                                <Form.Label>{lang.inputs.description}</Form.Label>
                                <Form.Control as="textarea" name="description" onChange={handleChange} required />
                            </Space>
                            <Space className="text-center">
                                <Button type="submit">
                                    <IconGap icon={faPaperPlane} size={null}>{lang.buttons.send}</IconGap>
                                </Button>
                            </Space>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default CreateFeedback;
