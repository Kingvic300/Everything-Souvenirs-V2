import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/Home.jsx"));
const AboutUs = lazy(() => import("../pages/AboutUs.jsx"));
const AdminLayout = lazy(() => import("../layouts/AdminLayout.jsx"));
const ImageManagement = lazy(() => import("../pages/admin/ImageManagement.jsx"));
const Orders = lazy(() => import("../pages/admin/Orders.jsx"));
const UserManagement = lazy(() => import("../pages/admin/UserManagement.jsx"));
const Settings = lazy(() => import("../pages/admin/Settings.jsx"));
const NotFound = lazy(() => import("../reusable/NotFound.jsx"));

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <AboutUs />,
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "images",
                element: <ImageManagement />,
            },
            {
                path: "orders",
                element: <Orders />,
            },
            {
                path: "users",
                element: <UserManagement />,
            },
            {
                path: "settings",
                element: <Settings />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default routes;
