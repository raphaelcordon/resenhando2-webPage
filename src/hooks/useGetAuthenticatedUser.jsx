import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { storeUserData, logoutUser } from "../store/slices/userReducer.js";
import { GetFromClaim } from "../axios/userAxios.js";

const useGetAuthenticatedUser = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    const getUser = useCallback(async () => {
        setError(null);
        try {
            const res = await GetFromClaim();
            dispatch(storeUserData(res.data)); // Store user data if successful
        } catch (error) {
            setError(error);
            window.localStorage.removeItem("resenhando:authToken");
            dispatch(logoutUser()); // Clear Redux state
            console.error("Error fetching user data:", error);
        }
    }, [dispatch]);

    return { getUser, error };
};

export default useGetAuthenticatedUser;