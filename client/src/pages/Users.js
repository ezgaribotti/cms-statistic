import DataTable from "../components/DataTable";
import Space from "../components/Space";
import Title from "../components/Title";
import config from "../config/users";

function Users() {
    return (
        <div>
            <Space>
                <Title>{config.title}</Title>
            </Space>
            <DataTable config={config} />
        </div>
    );
}

export default Users;
