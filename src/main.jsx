import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import Header from './Header.jsx';
import SignUp from './SignUp.jsx';
import Login from './Login.jsx';
import Layout from './Layout.jsx';
import App from './App.jsx';
import Todo from './Todo.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
