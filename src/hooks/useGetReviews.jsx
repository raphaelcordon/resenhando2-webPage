import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { GetReviews } from "../axios/reviewAxios.js";
import { storeReviewArtistData } from "../store/slices/reviewArtistReducer.js";
import {storeReviewAlbumData} from "../store/slices/reviewAlbumReducer.js";
import {storeReviewTrackData} from "../store/slices/reviewTrackReducer.js";

const useGetReviews = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    const getReview = useCallback(async (reviewType, skip = 0, take = 8) => {
        setError(null);
        try {
            const response = await GetReviews(reviewType, skip, take);
            
            switch (reviewType) {
                case "artist": dispatch(storeReviewArtistData(response));
                break;
                case "album": dispatch(storeReviewAlbumData(response));
                break;
                case "track": dispatch(storeReviewTrackData(response));
                break;
            }
        } catch (error) {
            setError(error.message || "An error occurred during fetch.");
        }
    }, [dispatch]);

    return { getReview, error };
};

export default useGetReviews;