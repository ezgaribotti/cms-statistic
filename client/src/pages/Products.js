import { Fragment } from "react";
import config from "../config/products";
import { toast } from "react-toastify";
import Title from "../components/Title";
import DataTable from "../components/DataTable";
import { useDispatch } from "react-redux";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { addItem } from "../app/actions";
import lang from "../lang";

function Products() {

    const dispatch = useDispatch();

    const handleAddProduct = data => {
        dispatch(addItem(data));
        toast.success(lang.pages.products.add_item);
    };

    return (
        <Fragment>
            <Title>{config.title}</Title>
            <DataTable customEvent={handleAddProduct} icon={faCartPlus} config={config} />
        </Fragment>
    );
}

export default Products;
