import { Fragment } from "react";
import config from "../config/products";
import Title from "../components/Title";
import DataTable from "../components/DataTable";
import { useDispatch } from "react-redux";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { addItem, setShowCartBar } from "../app/actions";

function Products() {

    const dispatch = useDispatch();

    const handleAddProduct = data => {
        dispatch(addItem(data));
        dispatch(setShowCartBar(true));
    };

    return (
        <Fragment>
            <Title>{config.title}</Title>
            <DataTable customEvent={handleAddProduct} icon={faCartPlus} config={config} />
        </Fragment>
    );
}

export default Products;
