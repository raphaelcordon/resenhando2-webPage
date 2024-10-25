import AxiosMotion from "./_base.js";

const axios = AxiosMotion;

export const AuthenticateUser = async (data) => {
    try {
        const res = await axios.post("/auth/login", data);
        return res.data;
    } catch (error) {
        console.error('Login error response:', error.response);
        throw new Error(error.response?.data?.message || "No account found");
    }
}