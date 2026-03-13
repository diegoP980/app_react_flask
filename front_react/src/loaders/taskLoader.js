import { getTask, taskGetList } from "../services/taskFetch";

export const taskListLoader = async () => {
    const tasks = await taskGetList();  

    if (!Array.isArray(tasks)) {
        return [];
    }

    return tasks;
}

export const getTaskLoader = async () => {
    const task = await getTask();

    if (!Array.isArray(task)) {
        return [];
    }

    return task;
}