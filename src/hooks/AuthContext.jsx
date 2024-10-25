import { createContext, useContext, useEffect, useState } from 'react';
import { GetFromClaim } from "../axios/userAxios.js";
import { useDispatch } from 'react-redux';
import { storeUserData } from '../store/slices/userReducer';

const AuthContext = createContext({
    auth: null,
    setAuth: () => {},
    user: null,
});

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const checkAuthStatus = async () => {
            const token = window.localStorage.getItem("token");
            if (!token) {
                setAuth(false);
                setUser(null);
                return;
            }

            try {
                const res = await GetFromClaim();
                setUser(res.data);
                dispatch(storeUserData(res.data));
                setAuth(true);
            } catch (error) {
                setAuth(false);
                setUser(null);
            }
        };

        if (auth === null) {
            checkAuthStatus().catch((error) => {
                console.error("Error checking auth status:", error);
            });
        }
    }, [auth, dispatch]);

    return (
        <AuthContext.Provider value={{ auth, setAuth, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
