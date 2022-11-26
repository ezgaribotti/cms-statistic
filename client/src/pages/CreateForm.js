import { Fragment, useEffect, useReducer, useState } from "react";
import BuildForm from "../components/BuildForm";
import Title from "../components/Title";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import lang from "../lang";

function CreateForm({ config }) {

    const [inputs, setInputs] = useState([]);

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
            const formData = new FormData();

            inputs.forEach(input => {
                if (input.receive_file) {
                    formData.append(input.name, event.target[input.name].files[0]);

                } else {
                    formData.append(input.name, data[input.name]);
                }
            });

            try {
                await axios.post(config.route, formData);
                toast.success(lang.pages.create_form.success);
                navigate(-1);

            } catch (error) {
                toast.error(error.response.data.message);
            }

        } else {
            toast.error(lang.errors.required);
        }
    };

    const handleClearDefaults = inputs => {
        inputs.forEach(input => {
            input.defaultValue = null;
        });

        setInputs(inputs);
    };

    useEffect(() => {
        handleClearDefaults(config.build_form.inputs);
    }, []);

    return (
        <Fragment>
            <Title>{config.title}</Title>
            <BuildForm inputs={inputs} submitButton={lang.pages.create_form.submit_button} onSubmit={handleSubmit} onChange={handleChange} />
        </Fragment>
    );
}

export default CreateForm;
