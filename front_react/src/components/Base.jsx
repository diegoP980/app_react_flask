import { taskListLoader } from "../loaders/taskLoader";
import NavBar from "./partials/navbar";
import TaskList from "./TaskList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function Layout() {
    return (
        <>
            <NavBar />
            <TaskList />
        </>
    )
}

function Base() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            loader : taskListLoader
        }
    ])

    return <RouterProvider router={routes} />
}

export default Base;