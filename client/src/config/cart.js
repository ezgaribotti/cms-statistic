import routes from "../routes";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import lang from "../lang";

const config = {
    title: lang.config.cart,
    icon: faCartShopping,
    route: routes.cart,
};

export default config;