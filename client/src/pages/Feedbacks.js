import { Fragment } from "react";
import config from "../config/feedbacks";
import Title from "../components/Title";
import DataTable from "../components/DataTable";

function Feedbacks() {
    return (
        <Fragment>
            <Title>{config.title}</Title>
            <DataTable config={config} />
        </Fragment>
    );
}

export default Feedbacks;
