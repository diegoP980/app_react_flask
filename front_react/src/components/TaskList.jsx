import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import TaskCard from "./partials/TaskCard";
import TaskModal from "./partials/modal";
import { isEmpty, setColorStatus } from "../utils/functions";
import Alert from "./partials/alert";

function TaskList() {
    const [selectedTask, setSelectedTask] = useState(null)
    const tasks = useLoaderData() ?? [];
    const modalId = "taskModal";

    const alert = {
        header: null,
        body: "Aún no ha creado ninguna tarea.",
        footer: null,
        color: "warning",
        dimiss: false
    };

    const dateOptions = {
        dateStyle: "full",
        timeStyle: "short",
    }

    const noTaskList = (taskList) => {
        if (isEmpty(taskList)) {
            return <Alert att={alert} />
        }
        return (
            tasks.map((taskList) => (
                <TaskCard key={taskList.id} task={taskList} modalId={`#${modalId}`} onButtonClick={setSelectedTask} taskColorStatus={setColorStatus} dateOptions={dateOptions} />
            ))
        );
    }

    return (
        <>
            <div className="container" style={{ marginTop: 70 }}>
                <div className="row">
                    {noTaskList(tasks)}
                </div>
            </div>
            {selectedTask && (<TaskModal task={selectedTask} taskColorStatus={setColorStatus} onClose={() => setSelectedTask(null)} />)}
        </>
    )
}

export default TaskList;