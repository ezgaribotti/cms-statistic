import routes from "../routes";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import lang from "../lang";

const config = {
    title: lang.config.dashboard,
    icon: faHome,
    route: routes.dashboard
};

export default config;
