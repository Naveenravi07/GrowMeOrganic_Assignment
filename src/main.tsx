import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FormComponent from './Components/Form.tsx';
import DataPage from './Pages/DataPage.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <FormComponent />,
    },
    {
        path: "/data",
        element: <DataPage/>,
    },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>,
)
