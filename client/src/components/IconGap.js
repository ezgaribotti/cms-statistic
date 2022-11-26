import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import Space from "./Space";

function IconGap({ icon, size = "lg", children, justifyContent = "start", className }) {

    const style = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
        justifyContent: justifyContent,
        gap: 10,
    };

    return (
        <div style={style} className={className}>
            <FontAwesomeIcon icon={icon} size={size} />
            <span>{children}</span>
        </div>
    );
}

function Box({ icon, title, children }) {
    return (
        <Card>
            <Card.Body>
                <IconGap icon={icon}>{title}</IconGap>
                <Space top bottom={false} className="text-end">
                    <h5>{children}</h5>
                </Space>
            </Card.Body>
        </Card>
    );
}

export default Object.assign(IconGap, { Box });
