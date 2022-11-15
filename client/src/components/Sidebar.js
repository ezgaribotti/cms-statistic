import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../app/actions";
import routes from "../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => dispatch(logout()).then(unwrapResult).then(response => navigate(routes.login));

    return (
        <button onClick={handleLogout}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" />
        </button>
    );
}

export default Sidebar;
