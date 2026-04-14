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
        body: "Aún no ha creado ningúna tarea.",
        footer: null,
        color: "warning",
        dimiss: false
    };

    const dateOptions = {
        dateStyle: "full",
        timeStyle: "short",
    }

    const theresTaskList = (taskList) => {
        if (isEmpty(taskList)) {
            return (
                <>
                    <div className="d-flex align-items-center justify-content-center min-vh-100">
                        <Alert att={alert} />
                    </div>
                </>
            )
        }
        return (
            <>
                <div className="row" style={{ marginTop: 70 }}>
                    {
                        taskList.map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                modalId={`#${modalId}`}
                                onButtonClick={setSelectedTask}
                                taskColorStatus={setColorStatus}
                                dateOptions={dateOptions}
                            />
                        ))
                    }
                </div>
            </>
        );
    }

    return (
        <>
            <div className="container">
                {theresTaskList(tasks)}
            </div>
            {selectedTask && (<TaskModal task={selectedTask} taskColorStatus={setColorStatus} onClose={() => setSelectedTask(null)} />)}
        </>
    )
}

export default TaskList;