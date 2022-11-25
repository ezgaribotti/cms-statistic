import { Fragment, useEffect, useReducer, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import BuildForm from "../components/BuildForm";
import Title from "../components/Title";
import axios from "axios";
import Space from "../components/Space";
import lang from "../lang";
import { chr } from "../helpers";
import IconGap from "../components/IconGap";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";

function EditForm({ config }) {

    const { id } = useParams();

    const [inputs, setInputs] = useState([]);
    const [defaultInputs, setDefaultInputs] = useState({ created_at: null, updated_at: null });

    const navigate = useNavigate();

    const [data, setData] = useReducer((state, event) => {
        return {
            ...state,
            [event.name]: event.value
        };
    }, {});

    const handleChange = event => setData({ name: event.target.name, value: event.target.value });

    const handleSubmit = async event => {
        event.preventDefault();

        if (event.currentTarget.checkValidity()) {
            try {
                await axios.put(config.route + chr(47) + id, data);
                toast.success(lang.edit_form.success);
                navigate(-1);

            } catch (error) {
                toast.error(error.response.data.message);
            }
        } else {
            toast.error(lang.errors.required);
        }
    };

    const handleSetDefaultValues = async inputs => {

        let { data } = await axios.get(config.route + chr(47) + id);

        inputs.forEach(input => {
            input.defaultValue = data.data[input.name];
            setData({ name: input.name, value: data.data[input.name] });
        });

        setDefaultInputs({ created_at: data.data.created_at, updated_at: data.data.updated_at });
        setInputs(inputs);
    };

    useEffect(() => {
        handleSetDefaultValues(config.build_form.inputs);
    }, []);

    return (
        <Fragment>
            <Title.IconGap createdAt={defaultInputs.created_at}>{config.title + chr(32, 47, 32) + id}</Title.IconGap>
            <Space size={15}>
                <BuildForm inputs={inputs} submitButton={lang.edit_form.submit_button} modeEdit onSubmit={handleSubmit} onChange={handleChange} />
            </Space>
            <IconGap justifyContent="end" icon={faCalendarCheck}>{lang.edit_form.default_inputs.updated_at + chr(58, 32) + defaultInputs.updated_at}</IconGap>
        </Fragment>
    );
}

export default EditForm;
