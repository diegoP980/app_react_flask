import FormLayout from "./partials/form";

function CreateTask() {
    const fields = [
        {
            name: "title",
            label: "Título",
            type: "text",
            placeholder: "Agrega un título...",
            required: true
        },
        {
            name: "description",
            label: "Descripción",
            type: "text",
            placeholder: "Describe la tarea...",
            required: false
        }
    ];

    return (
        <>
            <FormLayout fields={fields} />
        </>
    )
}

export default CreateTask;