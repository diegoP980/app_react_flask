import { taskListLoader } from "../loaders/taskLoader";
import { createTaskAction, deleteTaskAction, updateTaskAction } from "../loaders/taskAction";
import CreateTask from "./CreateTask";
import NavBar from "./partials/navbar";
import TaskList from "./TaskList";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


function Layout() {
    return (
        <>
            <NavBar />
            <main className="min-vh-100">
                <Outlet />
            </main>
        </>
    )
}

function Base() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <TaskList />,
                    loader: taskListLoader
                },
                {
                    path: "create",
                    element: <CreateTask />,
                    action: createTaskAction
                },
                {
                    path: "task/:id/update",
                    action:updateTaskAction
                },
                {
                    path: "task/:id/delete",
                    action:deleteTaskAction
                },
            ]
        }
    ])

    return <RouterProvider router={routes} />
}

export default Base;