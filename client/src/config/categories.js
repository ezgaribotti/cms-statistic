import routes from "../routes";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import lang from "../lang";

const columns = [
    {
        name: lang.inputs.name,
        key: "name"
    },
];

const inputs = [
    {
        title: lang.inputs.name,
        name: "name",
        required: true
    },
];

const config = {
    title: lang.config.categories,
    icon: faTags,
    route: routes.categories,
    build_form: {
        reference_id: "category_id",
        inputs: inputs
    },
    columns: columns,
};

export default config;
