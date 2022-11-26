import { Fragment } from "react";
import config from "../config/orders";
import Title from "../components/Title";
import DataTable from "../components/DataTable";
import { useNavigate } from "react-router-dom";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import routes from "../routes";
import { chr } from "../helpers";

function Orders() {

    const navigate = useNavigate();

    const handleOrderDetails = data => navigate(routes.order_details + chr(47) + data.id);

    return (
        <Fragment>
            <Title>{config.title}</Title>
            <DataTable customEvent={handleOrderDetails} icon={faEye} config={config} />
        </Fragment>
    );
}

export default Orders;
