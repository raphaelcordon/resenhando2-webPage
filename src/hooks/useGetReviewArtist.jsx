import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { GetReviews } from "../axios/reviewAxios.js";
import { storeReviewArtistData } from "../store/slices/reviewArtistReducer.js";

const useGetReviewArtist = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    const getReviewArtist = useCallback(async () => {
        setError(null);
        try {
            const response = await GetReviews();
            dispatch(storeReviewArtistData(response));
        } catch (error) {
            setError(error.message || "An error occurred during fetch.");
            throw error;
        }
    }, [dispatch]);

    // Return the function and error state
    return { getReviewArtist, error };
};

export default useGetReviewArtist;