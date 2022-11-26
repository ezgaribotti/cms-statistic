import routes from "../routes";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const columns = [
    {
        name: "Nombre",
        key: "first_name",
        important: true
    },
    {
        name: "Apellido",
        key: "last_name",
        important: true
    },
    {
        name: "Teléfono",
        key: "phone"
    },
    {
        name: "Localidad",
        key: "city"
    },
    {
        name: "Dirección",
        key: "street_address"
    },
    {
        name: "Compras totales",
        key: "total_purchases",
        important: true,
        hide: true
    },
];

const inputs = [
    {
        title: "Nombre",
        name: "first_name",
        required: true
    },
    {
        title: "Apellido",
        name: "last_name",
        required: true
    },
    {
        title: "Teléfono",
        name: "phone",
        disabled: true,
        required: true
    },
    {
        title: "Correo electrónico",
        name: "email",
        type: "email",
        required: true
    },
    {
        title: "Género",
        name: "gender_id",
        type: "select",
        route: routes.genders,
        reference_key: "name"
    },
    {
        title: "Provincia",
        name: "province_id",
        type: "select",
        route: routes.provinces,
        reference_key: "name"
    },
    {
        title: "Localidad",
        name: "city",
        required: true
    },
    {
        title: "Dirección",
        name: "street_address",
        required: true
    },
    {
        title: "Total de compras",
        name: "total_purchases",
        disabled: true,
        required: false,
    },
];

const config = {
    title: "Clientes",
    icon: faUsers,
    build_form: {
        reference_id: "customer_id",
        inputs: inputs,
    },
    route: routes.customers,
    columns: columns,
};

export default config;