import routes from "../routes";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";
import lang from "../lang";

const config = {
    title: lang.config.user_profile,
    icon: faUserGear,
    route: routes.user_profile
};

export default config;
