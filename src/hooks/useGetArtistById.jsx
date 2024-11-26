import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { GetArtistById } from "../axios/spotifyAxios.js";

const useGetArtisById = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    const getArtistById = useCallback(async (artistId) => {
        setError(null);
        try {
            const res = await GetArtistById(artistId);
            return res;
        } catch (error) {
            setError(error.message || "An error occurred during fetch.");
        }
    }, [dispatch]);

    return { getArtistById, error };
};

export default useGetArtisById;