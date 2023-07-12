import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Refacciones, { loader as refaccionesLoader } from "./pages/Refacciones";
import Header from "./components/Header.jsx";
import Index from "./pages/Index";
import awsconfig from "../src/aws-exports";
import { Amplify } from "aws-amplify";
import LayoudVentas from "./components/LayoudVentas";
import AppServicios from "./pages/AppServicios";
Amplify.configure(awsconfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/servicios",
        element: <AppServicios />,
      },
      {
        path: "/refacciones",
        element: <Refacciones />,
        loader: refaccionesLoader,
      },
    ],
  },
  {
    path: "/ventas",
    element: <LayoudVentas />,
    // loader: refaccionesLoader,
    // children: [
    //   {
    //     path: "/refaccionesAdmin",
    //     element: <h2>Hola</h2>,
    //   },
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
