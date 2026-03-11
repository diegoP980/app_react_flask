import { useLoaderData } from "react-router-dom";
import TaskCard from "./partials/TaskCard";

function TaskList() {
    const tasks = useLoaderData() ?? [];
    console.log(tasks);

    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        tasks.map((task) => (
                            <TaskCard key={task.id} task={task} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default TaskList;