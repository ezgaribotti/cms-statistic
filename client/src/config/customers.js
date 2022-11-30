import routes from "../routes";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import lang from "../lang";

const columns = [
    {
        name: lang.inputs.name,
        key: "first_name",
        important: true
    },
    {
        name: lang.inputs.last_name,
        key: "last_name",
        important: true
    },
    {
        name: lang.inputs.phone,
        key: "phone"
    },
    {
        name: lang.inputs.city,
        key: "city"
    },
    {
        name: lang.inputs.street_address,
        key: "street_address"
    },
    {
        name: lang.inputs.total_purchases,
        key: "total_purchases",
        important: true,
        hide: true
    },
];

const inputs = [
    {
        title: lang.inputs.name,
        name: "first_name",
        required: true
    },
    {
        title: lang.inputs.last_name,
        name: "last_name",
        required: true
    },
    {
        title: lang.inputs.phone,
        name: "phone",
        disabled: true,
        required: true
    },
    {
        title: lang.inputs.email,
        name: "email",
        type: "email",
        required: true
    },
    {
        title: lang.inputs.gender,
        name: "gender_id",
        type: "select",
        route: routes.genders,
        reference_key: "name"
    },
    {
        title: lang.inputs.province,
        name: "province_id",
        type: "select",
        route: routes.provinces,
        reference_key: "name"
    },
    {
        title: lang.inputs.city,
        name: "city",
        required: true
    },
    {
        title: lang.inputs.street_address,
        name: "street_address",
        required: true
    },
    {
        title: lang.inputs.total_purchases,
        name: "total_purchases",
        disabled: true,
        required: false,
    },
];

const config = {
    title: lang.config.customers,
    icon: faUsers,
    build_form: {
        reference_id: "customer_id",
        inputs: inputs,
    },
    route: routes.customers,
    columns: columns,
};

export default config;