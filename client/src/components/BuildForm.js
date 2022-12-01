import { Button, Card, Col, Form, Row } from "react-bootstrap";
import useSWRImmutable from "swr/immutable";
import Space from "./Space";

function SelectData({ input, onChange }) {
    const { data } = useSWRImmutable(input.route);
    return (
        <Form.Select onChange={onChange} name={input.name} required>
            {input.defaultValue ? <option value={input.defaultValue}>{data.data.find(x => x.id === input.defaultValue)[input.reference_key]}</option> : <option></option>}
            {data.data.map((x, index) => {
                return (
                    <option key={index} value={x.id}>{x[input.reference_key]}</option>
                )
            })}
        </Form.Select>
    );
}

function SelectOptions({ input, onChange }) {
    return (
        <Form.Select onChange={onChange} name={input.name} required>
            {input.defaultValue >= 0 ? <option value={input.defaultValue}>{input.options[input.defaultValue]}</option> : <option></option>}
            {input.options.map((option, index) => {
                return (
                    <option key={index} value={index}>{option}</option>
                )
            })}
        </Form.Select>
    );
}

function BuildForm({ inputs = [], modeEdit, submitButton, onSubmit, onChange }) {
    return (
        <Card>
            <Card.Body>
                <Form noValidate onSubmit={onSubmit}>
                    <Row>
                        {inputs.map((input, index) => {
                            return (
                                <Col lg={6} key={index}>
                                    <Space size={20}>
                                        <Form.Label>{input.title}</Form.Label>

                                        {input.type === "select" && input.route ? <SelectData input={input} onChange={onChange} /> : (input.options ? <SelectOptions input={input} onChange={onChange} /> : <Form.Control type={input.type} required={input.required} disabled={modeEdit ? input.disabled : false} defaultValue={input.defaultValue} name={input.name} onChange={onChange} />)}
                                    </Space>
                                </Col>
                            )
                        })}
                    </Row>
                    <div className="text-end">
                        <Button type="submit">{submitButton}</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default BuildForm;
