import { useRef, useState } from "react";
import { Button, Col, Form, Nav, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faPenToSquare, faTrashAlt, faXmarkCircle, faFilePen } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import useSWR from "swr";
import axios from "axios";
import Space from "./Space";
import { Link } from "react-router-dom";
import { chr } from "../helpers";
import IconGap from "./IconGap";
import lang from "../lang";

function DataTable({ data = [], route, icon, columns = [], customEvent }) {
    return (
        <Table responsive bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    {columns.map((column, index) => {
                        return (
                            <th key={index}>{column.name}</th>
                        )
                    })}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map((x, index) => {
                    return (
                        <tr key={index}>
                            <td>{x.id}</td>
                            {columns.map((column, index) => {
                                return (
                                    <td key={index}>{x[column.key]}</td>
                                )
                            })}
                            <td className="text-center">

                                {icon && customEvent ? <Button variant="link" onClick={() => customEvent(x)}><FontAwesomeIcon icon={icon} size="lg" /></Button> : null}

                                <Link className="btn btn-link" to={route + chr(47) + "edit" + chr(47) + x.id}>
                                    <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                                </Link>
                                <Link className="btn btn-link text-danger" to={route + chr(47) + "delete" + chr(47) + x.id}>
                                    <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                                </Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}

function Search({ route, data, icon, columns, customEvent }) {
    const [show, setShow] = useState(false);

    const [search, setSearch] = useState([]);

    let timeout = useRef(null);

    const handleChange = event => {
        clearTimeout(timeout);
        timeout = setTimeout(async () => {
            try {
                let response = await axios.get(route + chr(63) + "search" + chr(61) + event.target.value);
                setSearch(response.data.data);
                setShow(true);

            } catch (error) { }
            clearTimeout(timeout);
            event.target.value = null;
        }, 600);
    };

    return (
        <div>
            <Space>
                <Row>
                    <Col xs={4} lg={6}>
                        <Link className="btn btn-primary" to={route + chr(47) + "create"}>
                            <IconGap icon={faFilePen}>{lang.components.data_table.create_button}</IconGap>
                        </Link>
                    </Col>
                    <Col>
                        <Form.Control placeholder={lang.components.data_table.search_here} onKeyDown={handleChange} />
                        {show ? <Button variant="link" onClick={() => setShow(false)}><IconGap icon={faXmarkCircle} size="lg">{lang.components.data_table.clear_search}</IconGap></Button> : null}
                    </Col>
                </Row>
            </Space>
            <DataTable data={show ? search : data} icon={icon} route={route} columns={columns} customEvent={customEvent} />
        </div>
    );
}

function DataCollector({ config, icon, customEvent }) {

    const [pageNumber, setPageNumber] = useState(1);

    const { data } = useSWR(config.route + chr(63) + "page" + chr(61) + pageNumber);

    return (
        <div>
            <Search data={data.data} route={config.route} icon={icon} columns={config.columns} customEvent={customEvent} />
            <Nav className="justify-content-end align-items-center">
                <Nav.Item>
                    <Space bottom={false} end>
                        <IconGap icon={faFile} size="lg">{lang.components.data_table.page + chr(58, 32) + pageNumber}</IconGap>
                    </Space>
                </Nav.Item>
                <Nav.Item>
                    <Button onClick={() => pageNumber > 1 ? setPageNumber(pageNumber - 1) : null}>
                        <FontAwesomeIcon icon={faArrowLeft} size="lg" fixedWidth />
                    </Button>
                </Nav.Item>
                <Nav.Item>
                    <Button onClick={() => data.data.length !== 0 ? setPageNumber(pageNumber + 1) : null}>
                        <FontAwesomeIcon icon={faArrowRight} size="lg" fixedWidth />
                    </Button>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default DataCollector;
