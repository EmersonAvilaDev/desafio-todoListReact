import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Global.scss";
import Home from "./view/Home/Home";
import { db } from "./mock/tasks.mock"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={db}/>
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
