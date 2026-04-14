import { Form } from "react-router-dom";
import { useState } from "react";

function FormLayout({ fields, form, setForm }) {
    const [validated, setValidated] = useState(false)

    const handleSubmit = (event) => {
        const formElement = event.currentTarget;

        if (!formElement.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }

    const handleChange = (event, name) => {
        setForm({
            ...form,
            [name]: event.target.value
        })
    }

    return (
        <>
            <div className="w-100 min-vh-100  d-flex justify-content-center align-items-center  " >
                <Form
                    method="post"
                    className={`card w-100 p-4 rounded-5 shadow-lg needs-validation ${validated ? "was-validated" : ""}`}
                    noValidate
                    onSubmit={handleSubmit}
                >
                    <div className="d-flex flex-column row-gap-3">
                        {
                            fields.map((field) => (

                                <div className="mb-2 position-relative" key={field.name}>
                                    <label htmlFor={field.name} className="form-label">
                                        {field.label}
                                    </label>
                                    {
                                        field.textArea
                                            ?
                                            <textarea
                                                className="form-control"
                                                name={field.name}
                                                id={field.name}
                                                value={form[field.name] || ""}
                                                placeholder={field.placeholder}
                                                onChange={(e) => { handleChange(e, field.name) }}
                                                rows="3">
                                            </textarea>
                                            :
                                            <input
                                                className="form-control"
                                                type={field.type}
                                                id={field.name}
                                                placeholder={field.placeholder}
                                                name={field.name}
                                                value={form[field.name] || ""}
                                                onChange={(e) => { handleChange(e, field.name) }}
                                                required={field.required}
                                            />
                                    }
                                    <div class="valid-tooltip">
                                        Campo completo
                                    </div>
                                    <div class="invalid-tooltip">
                                        Este campo es obligatorio
                                    </div>
                                </div>
                            ))
                        }
                        <div className="d-flex justify-content-end gap-2">
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>
                    </div>
                </Form>
            </div>

        </>
    )
}

export default FormLayout