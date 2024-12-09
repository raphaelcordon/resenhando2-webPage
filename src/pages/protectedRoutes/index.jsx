import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ProtectedRoutes() {

    const location = useLocation()
    const token = useSelector((state) => state.user.accessToken)
    
    const isUserLoggedIn = !!token;

    if (!isUserLoggedIn) {
        // Toast message
        toast.error("Please, make the login first.", {
            position: "top-center",
            autoClose: 3000, // Auto-close after 3 seconds
        });

        return <Navigate to="/login" state={{ from: location.pathname }} replace />;

    }

    return (
        <>
            <ToastContainer />
            <div className="flex-grow">
                <Outlet />
            </div>
        </>
    );
};