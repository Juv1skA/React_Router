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
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from './routes/contact' // contact component
import EditContact, {
  action as editAction,
} from './routes/edit'; // contact edit component
import { action as destroyAction } from "./routes/destroy"; // contact destroy component
import Index from "./routes/index"; // default index route

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
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            // contact editor route
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            // contact destroy route
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error</div>
          },
        ],
      },
    ],
  },
]);

// root route
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
