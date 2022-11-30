import { faCartShopping, faEye, faReceipt, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setShowCartBar } from "../app/actions";
import routes from "../routes";
import IconGap from "./IconGap";
import Space from "./Space";

function CartBar() {

    const { show, total_amount, total_items } = useSelector(state => state.cart.payload);

    const dispatch = useDispatch();

    return (
        <Offcanvas show={show} backdrop={false} className="bg-secondary text-white" scroll style={{ height: 65 }} placement="bottom">
            <Space top size={15} className="hstack justify-content-center">
                <IconGap icon={faCartShopping}>{total_items}</IconGap>
                <Space start end bottom={false}>
                    <IconGap icon={faReceipt}>${total_amount.toFixed(2)}</IconGap>
                </Space>
                <Link className="btn btn-secondary" to={routes.cart}>
                    <FontAwesomeIcon icon={faEye} color="white" size="lg" />
                </Link>
                <Button variant="secondary" onClick={() => dispatch(setShowCartBar(false))}>
                    <FontAwesomeIcon icon={faXmark} color="white" size="lg" />
                </Button>
            </Space>
        </Offcanvas>
    );
}

export default CartBar;
