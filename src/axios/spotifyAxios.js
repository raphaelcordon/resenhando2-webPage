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

export const GetArtistById = async (id) => {
    try {
        const config = getAxiosConfig();
        const res = await axios.get(`spotify/artist/${id}/`, config);
        return res.data;
    } catch (error) {
        throw new Error("Not possible to fetch data");
    }
};

export const SearchArtistByName = async (name) => {
    try {
        const config = getAxiosConfig();
        const res = await axios.get(`spotify/artist/searchbyname/${name}/`, config);
        return res.data;
    } catch (error) {
        throw new Error("Not possible to fetch data");
    }
};

export const ListAlbumsByArtistId = async (id) => {
    try {
        const config = getAxiosConfig();
        const res = await axios.get(`spotify/artist/listalbums/${id}/`, config);
        return res.data;
    } catch (error) {
        throw new Error("Not possible to fetch data");
    }
};

export const GetAlbumById = async (id) => {
    try {
        const config = getAxiosConfig();
        const res = await axios.get(`spotify/album/${id}/`, config);
        return res.data;
    } catch (error) {
        throw new Error("Not possible to fetch data");
    }
};

export const GetTrackById = async (id) => {
    try {
        const config = getAxiosConfig();
        const res = await axios.get(`spotify/track/${id}/`, config);
        return res.data;
    } catch (error) {
        throw new Error("Not possible to fetch data");
    }
};

export const SearchTrackByName = async (name) => {
    try {
        const config = getAxiosConfig();
        const res = await axios.get(`spotify/track/searchbyname/${name}/`, config);
        return res.data;
    } catch (error) {
        throw new Error("Not possible to fetch data");
    }
};


