import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { GetAlbumById } from "../axios/spotifyAxios.js";

const useGetAlbumById = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    const getAlbumById = useCallback(async (albumId) => {
        setError(null);
        try {
            const res = await GetAlbumById(albumId);
            return res;
        } catch (error) {
            setError(error.message || "An error occurred during fetch.");
        }
    }, [dispatch]);

    return { getAlbumById, error };
};

export default useGetAlbumById;