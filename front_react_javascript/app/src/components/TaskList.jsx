import { useLoaderData } from "react-router-dom";

function Task() {
    const tasks = useLoaderData() ?? [];
    console.log(tasks);

    return (
        <>
            <h1>Lista de tareas:</h1>
            {
                tasks.map((task) => (
                    <div key={task.id}>
                        <h3>{task.title}</h3>
                        <ul>
                            <li>Descripción: {task.description}</li>
                            <li>Creada el: {task.created_date}</li>
                        </ul>
                    </div>
                ))
            }
        </>
    )
}

export default Task;




