import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export default IconGap;
