import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FormComponent from './Components/Form.tsx';
import UserComponent from './Components/User.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/form",
        element: <FormComponent />,
    },
    {
        path: "/user",
        element: <UserComponent />,
    },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>,
)
