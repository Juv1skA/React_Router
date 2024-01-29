import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Root, {
  loader as rootLoader, 
  action as rootAction,
} from "./routes/root" // root layout component with data loader and contact creator
import ErrorPage from './error-page' // error page
import Contact from './routes/contact' // contact component

// defined root route
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
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
