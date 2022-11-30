import routes from "../routes";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import lang from "../lang";

const columns = [
    {
        name: lang.inputs.order_number,
        key: "tracking_number"
    },
    {
        name: lang.inputs.description,
        key: "description"
    },
];

const inputs = [
    {
        title: lang.inputs.order_number,
        name: "tracking_number",
        required: false,
        disabled: true,
    },
    {
        title: lang.inputs.sorting,
        name: "sorting_id",
        type: "select",
        route: routes.sortings,
        reference_key: "name"
    },
    {
        title: lang.inputs.description,
        name: "description",
        required: false,
        disabled: true,
    },
];

const config = {
    title: lang.config.feedbacks,
    icon: faCommentDots,
    build_form: {
        reference_id: null,
        inputs: inputs
    },
    route: routes.feedbacks,
    columns: columns,
};

export default config;