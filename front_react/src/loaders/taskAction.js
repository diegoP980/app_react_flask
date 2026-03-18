import { createTask, deleteTask, updateTask } from "../services/taskFetch";
import { redirect } from "react-router-dom";

export const createTaskAction = async ({ request }) => {
    const formData = await request.formData();

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

export const deleteTaskAction = async ({ params }) => {
    const response = await deleteTask(params.id);
    // await deleteTask(params.id);

    if (!response.success) {
        throw new Error(`Ocurrio un error: ${response.status}`);
    }

    return null;
}
