import { Fragment, useEffect, useReducer, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import BuildForm from "../components/BuildForm";
import Title from "../components/Title";
import axios from "axios";
import Space from "../components/Space";
import lang from "../lang";
import { chr } from "../helpers";

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
                if (config.transport_file) {
                    const formData = new FormData();

                    inputs.forEach(input => {
                        if (input.receive_file) {
                            let uploadedFile = event.target[input.name].files[0];
                            if (uploadedFile) formData.append(input.name, uploadedFile);

                        } else {
                            formData.append(input.name, data[input.name]);
                        }
                    });

                    await axios.post(config.route + chr(47) + id, formData);

                } else {
                    await axios.put(config.route + chr(47) + id, data);
                }
                toast.success(lang.success.edit);
                navigate(-1);

            } catch (error) {
                toast.error(error.response.data.message);
            }
        } else {
            toast.error(lang.errors.required);
        }
    };

    useEffect(() => {
        const handleSetDefaultValues = async inputs => {

            let { data } = await axios.get(config.route + chr(47) + id);
    
            inputs.forEach(input => {
                input.defaultValue = data.data[input.name];
                setData({ name: input.name, value: data.data[input.name] });
            });
    
            setDefaultInputs({ created_at: data.data.created_at, updated_at: data.data.updated_at });
            setInputs(inputs);
        };
        
        handleSetDefaultValues(config.build_form.inputs);
    }, [id, config]);

    return (
        <Fragment>
            <Title.CreationDate createdAt={defaultInputs.created_at}>{config.title + chr(32, 47, 32) + id}</Title.CreationDate>
            <Space size={15}>
                <BuildForm inputs={inputs} submitButton={lang.buttons.edit} modeEdit onSubmit={handleSubmit} onChange={handleChange} />
            </Space>
            <Title.LastUpdate updatedAt={defaultInputs.updated_at} />
        </Fragment>
    );
}

export default EditForm;
