import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import themes from "../themes";
import Space from "../components/Space";
import IconGap from "../components/IconGap";

function Title({ children }) {
    return (
        <Space>
            <IconGap color={themes.tertiary} size="xl" icon={faArrowRight}>{children}</IconGap>
        </Space>
    );
}

export default Title;
