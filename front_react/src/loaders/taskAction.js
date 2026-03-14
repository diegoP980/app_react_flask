import { createTask, updateTask } from "../services/taskFetch";
import { redirect } from "react-router-dom";

export const createTaskAction = async ({ request }) => {
    const formData = await request.formData();

        // if (!formData) {
        //     throw new Error("Datos inválidos o vacíos");
        // }

        const taskData = {
            title: formData.get("title"),
            description: formData.get("description")
        };

        console.log(taskData);

        await createTask(taskData);

        return redirect("/");
}

export const updateTaskAction = async ({ request, params }) => {
    const formData = await request.formData();

    const data = {
        title: formData.get("title"),
        description: formData.get("description"),
        status: formData.get("status"),
    };

    await updateTask(data, params.id);

    return null;

}
