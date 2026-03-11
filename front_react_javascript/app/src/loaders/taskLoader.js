import { taskGetList } from "../services/taskFetch";

export const taskLoader = async () => {
    const tasks = await taskGetList();

    if (!Array.isArray(tasks)) {
        return [];
    }

    return tasks;
}