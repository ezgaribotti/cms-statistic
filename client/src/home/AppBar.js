import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toggleLogin } from "../app/actions";
import images from "../assets/images";
import { chr } from "../helpers";
import lang from "../lang";
import routes from "../routes";
import IconGap from "../components/IconGap";
import Space from "../components/Space";

function AppBar() {
    const [color, setColor] = useState();
    const dispatch = useDispatch();

    const handleChangeColor = () => {
        window.scrollY >= 500 ? setColor("primary") : setColor(null);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleChangeColor);

        return () => {
            window.removeEventListener("scroll", handleChangeColor);
        };
    }, []);

    const links = [
        {
            title: lang.home.app_bar.about_us,
            copyright: true,
            href: routes.home.about_us
        },
        {
            title: lang.home.app_bar.usage,
            href: routes.home.usage
        },
        {
            title: lang.home.app_bar.create_feedback,
            href: routes.home.create_feedback
        },
    ];

    return (
        <Navbar expand="lg" bg={color} variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href={chr(35)}>
                    <Image src={images.logo} width={30} />
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        {links.map((link, index) => {
                            return (
                                <Nav.Link key={index} href={chr(35) + link.href}>{link.title} {(link.copyright ? <span>&copy;</span> : null)}</Nav.Link>
                            );
                        })}
                        <Space start bottom={false}>
                            <Button variant="outline-light" onClick={() => dispatch(toggleLogin())}>
                                <IconGap icon={faDoorOpen} size={null}>{lang.buttons.login}</IconGap>
                            </Button>
                        </Space>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppBar;
