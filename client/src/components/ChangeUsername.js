import { Fragment } from "react";
import { Alert, Badge, Card } from "react-bootstrap";
import lang from "../lang";

function ChangeUsername() {
    return (
        <Fragment>
            <Badge>{lang.components.change_username.title}</Badge>
            <Card>
                <Card.Body>
                    <Alert variant="light">{lang.components.change_username.warning_text}</Alert>
                </Card.Body>
            </Card>
        </Fragment>
    );
}

export default ChangeUsername;