import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import TaskCard from "./partials/TaskCard";
import TaskModal from "./partials/modal";
import { setStatus } from "../utils/functions";

function TaskList() {
    const [selectedTask, setSelectedTask] = useState(null)
    const tasks = useLoaderData() ?? [];
    const modalId = "taskModal";
    // const task = 
    // console.log(tasks);

    // const handleOpenModal = (uniqueTask) => {
    //     setSelectedTask(uniqueTask);
    // }

    return (
        <>
            <div className="container" style={{ marginTop: 70 }}>
                <div className="row">
                    {
                        tasks.map((task) => (
                            <TaskCard key={task.id} task={task} modalId={`#${modalId}`} onButtonClick={setSelectedTask} taskStatus={setStatus} />
                        ))
                    }
                </div>
            </div>
            {selectedTask && (<TaskModal task={selectedTask} taskStatus={setStatus} onClose={() => setSelectedTask(null)} />)}
        </>
    )
}

export default TaskList;