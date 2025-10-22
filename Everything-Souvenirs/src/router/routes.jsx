import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/Home.jsx"));
const NotFound = lazy(() => import("../reusable/NotFound.jsx"));

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default routes;
