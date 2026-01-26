import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// Pages publiques
import Home from "./Pages/Home.jsx";


const router = createBrowserRouter([
  // -------------------------
  // PAGES PUBLIQUES
  // -------------------------
  {
    path: "/",
    element: <Home />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
