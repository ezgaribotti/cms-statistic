import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Offcanvas, Button, Nav, Image } from "react-bootstrap";
import { toggleSidebar } from "../app/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import config from "../config";
import images from "../assets/images";
import IconGap from "./IconGap";
import lang from "../lang";

function Sidebar() {

    const dispatch = useDispatch();
    const { sidebar } = useSelector(state => state.global.payload);

    return (
        <Offcanvas show={sidebar} scroll backdrop={false}>
            <Offcanvas.Header>
                <Image src={images.logo} width={60} />
                <Button onClick={() => dispatch(toggleSidebar())}>
                    <FontAwesomeIcon icon={faXmark} size="xl" />
                </Button>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <h6 className="small text-muted">{lang.components.sidebar.quick_access}</h6>
                <Nav className="flex-column">
                    {Object.entries(config).map(([key, x], index) => {
                        return (
                            <Nav.Item key={index}>
                                <Link to={x.route} className="nav-link">
                                    <IconGap icon={x.icon} size={null}>{x.title}</IconGap>
                                </Link>
                            </Nav.Item>
                        )
                    })}
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Sidebar;
