import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import Space from "./Space";
import themes from "../themes";

function IconGap({ icon, size = "lg", children, justifyContent = "start", className, color }) {

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
            <FontAwesomeIcon icon={icon} color={color} size={size} />
            <span>{children}</span>
        </div>
    );
}

function Box({ icon, title, children }) {
    return (
        <Card>
            <Card.Body>
                <IconGap icon={icon} color={themes.secondary}>{title}</IconGap>
                <Space top bottom={false} className="text-end">
                    <h5>{children}</h5>
                </Space>
            </Card.Body>
        </Card>
    );
}

export default Object.assign(IconGap, { Box });
