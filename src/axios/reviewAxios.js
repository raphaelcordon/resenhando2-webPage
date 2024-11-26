import AxiosMotion from "./_base.js";

const axios = AxiosMotion;

const getAxiosConfig = () => {
    const token = window.localStorage.getItem("resenhando:authToken");
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
        const config = getAxiosConfig();
        const res = await axios.post("review", data, config);
        return res;
    } catch (error) {
        console.log('Registration error response:', error.response);
        throw new Error("Fail, please try again");
    }
}

export const GetReviews = async (reviewType, skip = 0, take = 10) => {
    try {
        const config = getAxiosConfig();
        const res = await axios.get(`/review`, {
            params: { reviewType, skip, take },
            ...config,
        });
        return res.data;
    } catch (error) {
        throw new Error("Not possible to fetch data");
    }
};

export const GetReviewById = async (id) => {
    try {
        const config = getAxiosConfig();
        const res = await axios.get(`review/${id}/`, config);
        return res.data;
    } catch (error) {
        throw new Error("Not possible to fetch data");
    }
};

export const UpdateReview = async (data) => {
    const config = getAxiosConfig();
    try {
        const res = await axios.put(`review/`, data, config);
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const DeleteReview = async (id) => {
    try {
        const config = getAxiosConfig();
        const res = await axios.delete(`review/${id}/`, config);
        return res.data;
    } catch (error) {
        throw new Error("Fail to delete, please try again");
    }
};


