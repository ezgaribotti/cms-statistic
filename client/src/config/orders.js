import routes from "../routes";
import { faPeopleCarryBox } from "@fortawesome/free-solid-svg-icons";

const columns = [
    {
        name: "Número de pedido",
        key: "order_number"
    },
    {
        name: "Estado",
        key: "status_id"
    },
    {
        name: "Fecha de creación",
        key: "created_at",
    },
    {
        name: "Fecha de actualización",
        key: "updated_at",
    },
];

const inputs = [
    {
        title: "Número de pedido",
        name: "order_number",
        required: false,
        disabled: true,
    },
    {
        title: "Estado",
        name: "status_id",
        type: "select",
        route: routes.status,
        reference_key: "name",
    },
    {
        title: "Descripción",
        name: "description",
        required: false,
    },
];

const config = {
    title: "Pedidos",
    icon: faPeopleCarryBox,
    route: routes.orders,
    build_form: {
        reference_id: null,
        inputs: inputs,
    },
    columns: columns,
};

export default config;