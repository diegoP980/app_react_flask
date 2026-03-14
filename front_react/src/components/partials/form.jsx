import { Form } from "react-router-dom"

function FormLayout({ fields }) {
    return (
        <>
            <div className="w-100 min-vh-100  d-flex justify-content-center align-items-center">
                <Form method="post" className="w-25 p-4 rounded-5 shadow-lg">
                    <div className="d-flex flex-column row-gap-3">
                        {
                            fields.map((field) => (
                                <>
                                    <div className="mb-2" key={field.name}>
                                        <label htmlFor={field.name} className="form-label">
                                                {field.label}
                                        </label>
                                        <input
                                            className="form-control"
                                            type={field.type}
                                            id={field.name}
                                            placeholder={field.placeholder}
                                            name={field.name}
                                        />
                                    </div>
                                </>
                            ))
                        }
                        <div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>
                    </div>
                </Form>
            </div>

        </>
    )
}

export default FormLayout