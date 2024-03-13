import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { useRoutes } from "react-router-dom";
import Contact from "../pages/Contact.jsx";
import Home from "../pages/Home.jsx";

let routes = useRoutes([
  { path: "/wf-test/", element: <Home /> },
  { path: "/wf-test/contact", element: <Contact /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>{routes}</BrowserRouter>
  </React.StrictMode>
);
