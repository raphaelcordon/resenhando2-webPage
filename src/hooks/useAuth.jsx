import {useDispatch} from "react-redux";
import {useCallback, useState} from "react";
import {loginUser, storeUserData} from "../store/reducers/userReducer.js";
import {AuthenticateUser} from "../axios/accountAxios.js";

const useAuth = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    const authenticateUser = useCallback(async (data) => {
        setError(null);
        try {
            const authResponse = await AuthenticateUser(data);
            window.localStorage.setItem("resenhando:authToken", authResponse.token);
            dispatch(loginUser(authResponse.token));
            dispatch(storeUserData(authResponse.userLoggedIn))
            console.log(authResponse.userLoggedIn)
        } catch (error) {
            setError(error.message || "An error occurred during login.");
            throw error;
        }
    }, [dispatch]);

    return { authenticateUser, error };
};
export default useAuth;