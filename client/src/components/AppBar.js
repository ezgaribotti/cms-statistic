import { Button, Container, Dropdown, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, logout } from "../app/actions";
import IconGap from "./IconGap";
import lang from "../lang";

function AppBar() {

    const dispatch = useDispatch();
    const { full_name } = useSelector(state => state.auth.payload.user_profile);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Button variant="link" onClick={() => dispatch(toggleSidebar())}>
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </Button>
                <Dropdown>

                    <Dropdown.Toggle variant="link" className="hstack">
                        <IconGap icon={faCircleUser} size="lg">{full_name}</IconGap>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as="button" onClick={() => dispatch(logout())}>
                            <IconGap icon={faRightFromBracket}>{lang.components.app_bar.logout_button}</IconGap>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    );
}

export default AppBar;
