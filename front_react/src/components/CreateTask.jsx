import FormLayout from "./partials/form";
import TaskCard from "./partials/TaskCard";
import { useState, useEffect } from "react";

function CreateTask() {
    const [task, setTask] = useState({
        title: "",
        description: "",
        created_date: new Date(),
        status: "Incomplete",
    });

    const dateOptions = {
        dateStyle: "full",
        timeStyle: "medium",
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTask(prev => ({
                ...prev,
                created_date: new Date()
            }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const fields = [
        {
            name: "title",
            label: "Título",
            type: "text",
            placeholder: "Agrega un título...",
            textArea: false,
            required: true,
        },
        {
            name: "description",
            label: "Descripción",
            type: "text",   
            placeholder: "Describe la tarea...",
            textArea: true,
            required: false
        }
    ];

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <FormLayout fields={fields} form={task} setForm={setTask} />
                    </div>
                    <div className="col-8">
                        <div className="w-100 min-vh-100 d-flex align-items-center">
                            <TaskCard task={task} dateOptions={dateOptions}/>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default CreateTask;