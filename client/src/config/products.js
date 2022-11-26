import routes from "../routes";
import { faStore } from "@fortawesome/free-solid-svg-icons";

const columns = [
    {
        name: "Imagen",
        key: "image"
    },
    {
        name: "Nombre",
        key: "name",
        important: true
    },
    {
        name: "Precio unitario",
        key: "unit_price",
        important: true
    },
    {
        name: "Estado",
        key: "active",
    },
    {
        name: "Ventas totales",
        key: "total_sales",
        important: true
    },
];

const inputs = [
    {
        title: "Nombre",
        name: "name",
        required: true
    },
    {
        title: "Precio unitario",
        name: "unit_price",
        type: "number",
        required: true
    },
    {
        title: "Activo",
        name: "active",
        type: "select",
        options: ["Oculto" , "Visible"]
    },
    {
        title: "Categoria",
        name: "category_id",
        type: "select",
        route: routes.categories,
        reference_key: "name"
    },
    {
        title: "Descripción",
        name: "description",
        required: false,
    },
    {
        title: "Imagen",
        name: "image_file",
        type: "file",
        receive_file: true,
        required: false,
    },
    {
        title: "Total de ventas",
        name: "total_sales",
        disabled: true,
        required: false,
    },
];

const config = {
    title: "Productos",
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
