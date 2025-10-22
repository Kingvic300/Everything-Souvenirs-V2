import "./App.css";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import router from "./router/routes.jsx";
import Loading from "./reusable/Loading.jsx";

function App() {
    return (
        <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-indigo-100 via-white to-pink-100">
            <ToastContainer position="top-right" autoClose={3000} />
            <Suspense fallback={<Loading />}>
                <RouterProvider router={router} />
            </Suspense>
        </div>
    );
}

export default App;
