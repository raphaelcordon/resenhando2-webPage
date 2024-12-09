import { logoutUser as logoutAction } from "../store/reducers/userReducer.js";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = useCallback(() => {
        dispatch(logoutAction());
        window.localStorage.removeItem("resenhando:authToken");
        navigate("/"); // Redirect after logout
    }, [dispatch, navigate]);

    return { logout };
};

export default useLogout;