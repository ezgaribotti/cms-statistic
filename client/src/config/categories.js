import routes from "../routes";
import { faTags } from "@fortawesome/free-solid-svg-icons";

const columns = [
    {
        name: "Nombre",
        key: "name"
    },
];

const inputs = [
    {
        title: "Nombre",
        name: "name",
        required: true
    },
];

const config = {
    title: "Categorias",
    icon: faTags,
    route: routes.categories,
    build_form: {
        reference_id: "category_id",
        inputs: inputs
    },
    columns: columns,
};

export default config;
