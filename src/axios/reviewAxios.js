import AxiosMotion from "./_base.js";

const axios = AxiosMotion;

const getAxiosConfig = () => {
    const token = window.localStorage.getItem("token");
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const config = {
        headers,
    };
    return config;
};


export const Create = async (data) => {
    try {
        await axios.post("review", data);
    } catch (error) {
        console.log('Registration error response:', error.response);
        throw new Error("Fail, please try again");
    }
}

export const Get = async () => {
    try {
        const config = getAxiosConfig();
        const res = await axios.get("review/", config);
        return res.data;
    } catch (error) {
        throw new Error("Not possible to fetch data");
    }
};

export const GetById = async (id) => {
    try {
        const config = getAxiosConfig();
        const res = await axios.get(`review/${id}/`, config);
        return res.data;
    } catch (error) {
        throw new Error("Not possible to fetch data");
    }
};

export const Update = async (data) => {
    const config = getAxiosConfig();
    try {
        const res = await axios.put(`review/`, data, config);
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const Delete = async (id) => {
    try {
        const config = getAxiosConfig();
        const res = await axios.delete(`review/${id}/`, config);
        return res.data;
    } catch (error) {
        throw new Error("Fail to delete, please try again");
    }
};


