import { Fragment } from "react";
import config from "../config/categories";
import Title from "../components/Title";
import DataTable from "../components/DataTable";

function Categorias() {
    return (
        <Fragment>
            <Title>{config.title}</Title>
            <DataTable config={config} />
        </Fragment>
    );
}

export default Categorias;
