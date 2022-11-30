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
import { Fragment } from "react";

function ConfirmDelete({ config }) {

    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await axios.delete(config.route + chr(47) + id);
            toast.success(lang.success.delete);
            navigate(-1);

        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <Fragment>
            <Title>{config.title + chr(32, 47, 32) + id}</Title>
            <Card bg="danger" className="text-white">
                <Card.Body>
                    <Space>
                        <h5>{lang.pages.confirm_delete.title}</h5>
                        <p>{lang.pages.confirm_delete.warning_text}</p>
                    </Space>
                    <Button variant="danger" onClick={handleDelete}>
                        <IconGap icon={faTrash} size={null}>{lang.buttons.accept}</IconGap>
                    </Button>
                </Card.Body>
            </Card>
        </Fragment>
    );
}

export default ConfirmDelete;
