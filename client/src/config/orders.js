import routes from "../routes";
import { faPeopleCarryBox } from "@fortawesome/free-solid-svg-icons";
import lang from "../lang";

const columns = [
    {
        name: lang.inputs.order_number,
        key: "order_number"
    },
    {
        name: lang.inputs.status,
        key: "status_id"
    },
    {
        name: lang.inputs.creation_date,
        key: "created_at",
    },
    {
        name: lang.inputs.last_update,
        key: "updated_at",
    },
];

const inputs = [
    {
        title: lang.inputs.order_number,
        name: "order_number",
        required: false,
        disabled: true,
    },
    {
        title: lang.inputs.status,
        name: "status_id",
        type: "select",
        route: routes.status,
        reference_key: "name",
    },
    {
        title: lang.inputs.description,
        name: "description",
        required: false,
    },
];

const config = {
    title: lang.config.orders,
    icon: faPeopleCarryBox,
    route: routes.orders,
    build_form: {
        reference_id: null,
        inputs: inputs,
    },
    columns: columns,
};

export default config;
