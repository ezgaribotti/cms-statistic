import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Space from "../components/Space";
import Title from "../components/Title";
import axios from "axios";
import lang from "../lang";
import { toast } from "react-toastify";
import { chr } from "../helpers";
import IconGap from "../components/IconGap";

function ConfirmDelete({ config }) {

    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await axios.delete(config.route + chr(47) + id);
            toast.success(lang.confirm_delete.success);
            navigate(-1);

        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <div>
            <Space>
                <Title>{config.title + chr(32, 47, 32) + id}</Title>
            </Space>
            <Card bg="danger" className="text-white">
                <Card.Body>
                    <Card.Title>{lang.confirm_delete.alert.title}</Card.Title>
                    <Card.Text>{lang.confirm_delete.alert.warning_text}</Card.Text>

                    <Space top bottom={false}>
                        <Button variant="danger" onClick={handleDelete}>
                            <IconGap icon={faTrash}>{lang.confirm_delete.confirm_button}</IconGap>
                        </Button>
                    </Space>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ConfirmDelete;
