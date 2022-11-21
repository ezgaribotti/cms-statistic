import { useEffect, useReducer, useState } from "react";
import BuildForm from "../components/BuildForm";
import Title from "../components/Title";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Space from "../components/Space";
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
            try {
                await axios.post(config.route, data);
                toast.success(lang.create_form.success);
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
        <div>
            <Space>
                <Title>{config.title}</Title>
            </Space>
            <BuildForm inputs={inputs} submitButton={lang.create_form.submit_button} onSubmit={handleSubmit} onChange={handleChange} />
        </div>
    );
}

export default CreateForm;
