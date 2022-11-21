import routes from "../routes";
import { faBuildingUser } from "@fortawesome/free-solid-svg-icons";

const inputs = [
    {
        title: "Nombre completo",
        name: "full_name",
        required: true
    },
    {
        title: "Usuario",
        name: "username",
        required: true,
        disabled: true
    },
    {
        title: "Contraseña",
        name: "password",
        type: "password",
        required: false,
    },
    {
        title: "Confirmar contraseña",
        name: "password_confirmation",
        type: "password",
        required: false,
    },
    {
        title: "Rol",
        name: "role_id",
        type: "select",
        route: routes.roles,
        reference_key: "name"
    }
];

const columns = [
    {
        name: "Nombre completo",
        key: "full_name"
    },
    {
        name: "Usuario",
        key: "username"
    },
    {
        name: "Última actualización",
        key: "updated_at"
    },
];

const config = {
    title: "Usuarios",
    icon: faBuildingUser,
    build_form: {
        reference_id: "user_id",
        inputs: inputs
    },
    route: routes.users,
    columns: columns
};

export default config;
