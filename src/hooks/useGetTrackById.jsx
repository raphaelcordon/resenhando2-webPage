import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { GetTrackById } from "../axios/spotifyAxios.js";
import useSetDataForTrackReview from "./reviewHooks/useSetDataForTrackReview.jsx";

const useGetTrackById = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    const getTrackById = useCallback(async (trackId) => {
        setError(null);
        try {
            const res = await GetTrackById(trackId);
            return res;
        } catch (error) {
            setError(error.message || "An error occurred during fetch.");
        }
    }, [dispatch]);

    return { getTrackById, error };
};

export default useGetTrackById;