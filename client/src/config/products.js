import routes from "../routes";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import lang from "../lang";

const columns = [
    {
        name: lang.inputs.image,
        key: "image"
    },
    {
        name: lang.inputs.name,
        key: "name",
        important: true
    },
    {
        name: lang.inputs.unit_price,
        key: "unit_price",
        important: true
    },
    {
        name: lang.inputs.status,
        key: "active",
    },
    {
        name: lang.inputs.total_sales,
        key: "total_sales",
        important: true
    },
];

const inputs = [
    {
        title: lang.inputs.name,
        name: "name",
        required: true
    },
    {
        title: lang.inputs.unit_price,
        name: "unit_price",
        type: "number",
        required: true
    },
    {
        title: lang.inputs.status,
        name: "active",
        type: "select",
        options: ["Oculto" , "Visible"]
    },
    {
        title: lang.inputs.category,
        name: "category_id",
        type: "select",
        route: routes.categories,
        reference_key: "name"
    },
    {
        title: lang.inputs.description,
        name: "description",
        required: false,
    },
    {
        title: lang.inputs.image,
        name: "image_file",
        type: "file",
        receive_file: true,
        required: false,
    },
    {
        title: lang.inputs.total_sales,
        name: "total_sales",
        disabled: true,
        required: false,
    },
];

const config = {
    title: lang.config.products,
    icon: faStore,
    route: routes.products,
    build_form: {
        reference_id: "product_id",
        inputs: inputs
    },
    columns: columns,
    transport_file: true
};

export default config;
