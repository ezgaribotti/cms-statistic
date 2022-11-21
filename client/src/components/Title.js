import IconGap from "./IconGap";
import { Link } from "react-router-dom";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

function Title({ children }) {
    return (
        <div>
            <Link to={-1} className="btn btn-link">
                <IconGap icon={faArrowAltCircleLeft} size="lg">{children}</IconGap>
            </Link>
        </div>
    );
}

export default Title;
