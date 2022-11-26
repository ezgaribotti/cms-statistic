import useSWR from "swr";
import lang from "../lang";
import routes from "../routes";
import { faUsers, faPeopleCarryBox, faCircleExclamation, faCommentDots, faEye } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Card, ListGroup, Table, Badge } from "react-bootstrap";
import IconGap from "../components/IconGap";
import Space from "../components/Space";
import Title from "../components/Title";
import { chr, convertChartDataPie as ccdp, convertChartDataHistory as ccdh, clearArrayImportant } from "../helpers";
import config from "../config";
import { Chart, ArcElement, Tooltip, Legend, LinearScale, CategoryScale, PointElement, LineElement } from "chart.js";
import { Pie, Line } from "react-chartjs-2";
import themes from "../themes";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FullCount({ data }) {
    const counts = [
        {
            icon: faUsers,
            title: lang.pages.dashboard.full_count.customers,
            total_number: data.customers
        },
        {
            icon: faPeopleCarryBox,
            title: lang.pages.dashboard.full_count.orders,
            total_number: data.orders
        },
        {
            icon: faCircleExclamation,
            title: lang.pages.dashboard.full_count.canceled_orders,
            total_number: data.canceled_orders
        },
        {
            icon: faCommentDots,
            title: lang.pages.dashboard.full_count.feedbacks,
            total_number: data.feedbacks
        },
    ];

    return (
        <Row className={chr(103, 45) + 3}>
            {counts.map((count, index) => {
                return (
                    <Col key={index} lg={3}>
                        <IconGap.Box icon={count.icon} title={count.title}>{count.total_number}</IconGap.Box>
                    </Col>
                )
            })}
        </Row>
    );
}

function Wallet({ data, chartOptions }) {

    const wallet = [
        {
            title: lang.pages.dashboard.wallet.profit_amount,
            data: data.profit_amount.total_number
        },
        {
            title: lang.pages.dashboard.wallet.refund_amount,
            data: data.refund_amount.total_number
        },
        {
            title: lang.pages.dashboard.wallet.income_amount,
            data: (data.profit_amount.total_number - data.refund_amount.total_number).toFixed(2)
        },
    ];

    return (
        <Card>
            <Card.Body>
                <Space>
                    <h6>{lang.pages.dashboard.wallet.title}</h6>
                </Space>
                <Space>
                    <Pie data={ccdp(data)} options={chartOptions} />
                </Space>
                <ListGroup variant="flush">
                    {wallet.map((x, index) => {
                        return (
                            <ListGroup.Item key={index}>
                            <p className="text-muted small">{x.title}</p>
                            <h6>${x.data}</h6>
                        </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

function Leaderboard({ route, columns = [], data }) {
    return (
        <Table responsive bordered hover className="bg-white">
            <thead>
                <tr>
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
                        <tr key={index} className={index === 0 ? "table-warning" : null}>
                            {columns.map((column, index) => {
                                return (
                                    <td key={index}>{x[column.key]}</td>
                                )
                            })}
                            <td className="text-center">
                                <Link className="btn btn-link" to={route + chr(47) + routes.path.edit + chr(47) + x.id}>
                                    <FontAwesomeIcon icon={faEye} size="lg" />
                                </Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}

function OverallStatus({ data, chartOptions }) {

    const titles = [lang.pages.dashboard.overall_status.genders, lang.pages.dashboard.overall_status.feedback_rating, lang.pages.dashboard.overall_status.active_customers];

    return (
        <Row className={chr(103, 45) + 3}>
            {[ccdp(data.genders), ccdp(data.feedback_rating), ccdp(data.active_customers)].map((x, index) => {
                return (
                    <Col lg={4} key={index}>
                        <Card>
                            <Card.Body>
                                <Space>
                                    <h6>{titles[index]}</h6>
                                </Space>
                                <Pie data={x} options={chartOptions} />
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    );
}

function Dashboard() {

    const { data: statistics } = useSWR(routes.statistics);

    Chart.register(ArcElement, Tooltip, Legend, LinearScale, CategoryScale, PointElement, LineElement);

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    padding: 18
                }
            },
            tooltip: {
                displayColors: false,
                padding: 12,
                backgroundColor: themes.primary
            }
        }
    };

    return (
        <Fragment>
            <Title>{config.dashboard.title}</Title>
            <Space>
                <FullCount data={statistics.data.total} />
            </Space>
            <Space>
                <OverallStatus data={statistics.data} chartOptions={chartOptions} />
            </Space>
            <Row className={chr(103, 45) + 3}>
                <Col lg={8}>
                    <Row className={chr(103, 45) + 3}>
                        <Col lg={12}>
                            <Card>
                                <Card.Body>
                                    <Space>
                                        <h6>{lang.pages.dashboard.history.title}</h6>
                                    </Space>
                                    <Line data={ccdh(statistics.data.statistics)} options={chartOptions} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={12}>
                            <Badge>{lang.pages.dashboard.featured.customers}</Badge>
                            <Leaderboard route={config.customers.route} columns={clearArrayImportant(config.customers.columns)} data={statistics.data.leaderboards.customers} />
                        </Col>
                        <Col lg={12}>
                            <Badge>{lang.pages.dashboard.featured.products}</Badge>
                            <Leaderboard route={config.products.route} columns={clearArrayImportant(config.products.columns)} data={statistics.data.leaderboards.products} />
                        </Col>
                    </Row>
                </Col>
                <Col lg={4}>
                    <Wallet data={statistics.data.wallet} chartOptions={chartOptions} />
                </Col>
            </Row>
        </Fragment>
    );
}

export default Dashboard;
