import routes from "../routes";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

const columns = [
    {
        name: "Número de pedido",
        key: "tracking_number"
    },
    {
        name: "Descripción",
        key: "description"
    },
];

const inputs = [
    {
        title: "Número de pedido",
        name: "tracking_number",
        required: false,
        disabled: true,
    },
    {
        title: "Clasificación",
        name: "sorting_id",
        type: "select",
        route: routes.sortings,
        reference_key: "name"
    },
    {
        title: "Descripción",
        name: "description",
        required: false,
        disabled: true,
    },
];

const config = {
    title: "Comentarios",
    icon: faCommentDots,
    build_form: {
        reference_id: null,
        inputs: inputs
    },
    route: routes.feedbacks,
    columns: columns,
};

export default config;