import routes from "../routes";
import { faBuildingUser } from "@fortawesome/free-solid-svg-icons";
import lang from "../lang";

const inputs = [
    {
        title: lang.inputs.full_name,
        name: "full_name",
        required: true
    },
    {
        title: lang.inputs.username,
        name: "username",
        required: true,
        disabled: true
    },
    {
        title: lang.inputs.password,
        name: "password",
        type: "password",
        required: false,
    },
    {
        title: lang.inputs.password_confirmation,
        name: "password_confirmation",
        type: "password",
        required: false,
    },
    {
        title: lang.inputs.role,
        name: "role_id",
        type: "select",
        route: routes.roles,
        reference_key: "name"
    }
];

const columns = [
    {
        name: lang.inputs.full_name,
        key: "full_name"
    },
    {
        name: lang.inputs.username,
        key: "username"
    },
    {
        name: lang.inputs.last_update,
        key: "updated_at"
    },
];

const config = {
    title: lang.config.users,
    icon: faBuildingUser,
    build_form: {
        reference_id: "user_id",
        inputs: inputs
    },
    route: routes.users,
    columns: columns
};

export default config;
