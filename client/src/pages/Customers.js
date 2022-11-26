import { Fragment } from "react";
import config from "../config/customers";
import Title from "../components/Title";
import DataTable from "../components/DataTable";
import { useDispatch } from "react-redux";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { setPayer } from "../app/actions";
import { useNavigate } from "react-router-dom";
import routes from "../routes";
import { toast } from "react-toastify";
import lang from "../lang";

function Customers() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSetPayer = data => {
        dispatch(setPayer(data));
        toast.success(lang.pages.customers.set_payer);
        return navigate(routes.cart);
    };

    return (
        <Fragment>
            <Title>{config.title}</Title>
            <DataTable customEvent={handleSetPayer} icon={faUserPlus} config={config} />
        </Fragment>
    );
}

export default Customers;
