import { Fragment } from "react";
import DataTable from "../components/DataTable";
import Title from "../components/Title";
import config from "../config/users";

function Users() {
    return (
        <Fragment>
            <Title>{config.title}</Title>
            <DataTable config={config} />
        </Fragment>
    );
}

export default Users;
