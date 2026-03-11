import { useState } from 'react'
import './App.css'
import Task from './components/TaskList'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { taskLoader } from './loaders/taskLoader'

function Layout() {
  return (
    <div>
      <Task />
    </div>
  )
}

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element : <Layout/>,
      loader : taskLoader
    }
  ])

  return <RouterProvider router={routes}/>
}

export default App
