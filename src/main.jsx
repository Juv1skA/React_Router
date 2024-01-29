import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Root, {loader as rootLoader } from "./routes/root" // root layout component and data loader
import ErrorPage from './error-page' // error page
import Contact from './routes/contact' // contact component

// defined root route
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children : [
      {
        // contact route inside root
        path: "contacts/:contactId",
        element: <Contact />,
      }
    ]
  },
])

// root route
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
