import { Link } from "react-router-dom";
import routes from "../routes";

function Home() {
    return (
        <Link to={routes.login}>Iniciar sesión</Link>
    );
}

export default Home;
