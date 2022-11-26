import useSWR from "swr";
import lang from "../lang";
import routes from "../routes";
import { faUsers, faPeopleCarryBox, faCircleExclamation, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Card } from "react-bootstrap";
import IconGap from "../components/IconGap";
import Space from "../components/Space";
import Title from "../components/Title";
import { chr, convertChartData as ccd } from "../helpers";
import config from "../config/dashboard";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import themes from "../themes";
import { Fragment } from "react";

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

function OverallStatus({ data, chartOptions }) {

    const title = [lang.pages.dashboard.overall_status.genders, lang.pages.dashboard.overall_status.feedback_rating, lang.pages.dashboard.overall_status.active_customers];

    return (
        <Row className={chr(103, 45) + 3}>
            {[ccd(data.genders), ccd(data.feedback_rating), ccd(data.active_customers)].map((x, index) => {
                return (
                    <Col lg={4} key={index}>
                        <Card>
                            <Card.Body>
                                <Space>
                                    <h6>{title[index]}</h6>
                                </Space>
                                <Doughnut data={x} options={chartOptions} />
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

    Chart.register(ArcElement, Tooltip, Legend);

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
            <Title>{config.title}</Title>
            <Space>
                <FullCount data={statistics.data.total} />
            </Space>
            <OverallStatus data={statistics.data} chartOptions={chartOptions} />
        </Fragment>
    );
}

export default Dashboard;
