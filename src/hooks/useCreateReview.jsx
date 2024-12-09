import {useDispatch} from "react-redux";
import {useCallback, useState} from "react";
import {storeReviewArtistData} from "../store/reducers/reviewArtistReducer.js";
import {storeReviewAlbumData} from "../store/reducers/reviewAlbumReducer.js";
import {storeReviewTrackData} from "../store/reducers/reviewTrackReducer.js";
import {Create} from "../axios/reviewAxios.js";

const useCreateReview = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    const createReview = useCallback(async (data) => {
        setError(null);
        try {
            const reviewResponse = await Create(data);
            const payload = {
                items: [reviewResponse.data],
                totalCount: 1, // Increment total count
            };
            
            switch (data.reviewType) {
                case 0: 
                    dispatch(storeReviewArtistData(payload));
                    break;
                case 1: 
                    dispatch(storeReviewAlbumData(payload));
                    break;
                case 2: 
                    dispatch(storeReviewTrackData(payload));
                    break;
                default:
                    setError("Invalid review type provided.");
                    return;
            }

            return reviewResponse.status;
        } catch (error) {
            setError(error.message || "An error occurred during login.");
            throw error;
        }
    }, [dispatch]);

    return { createReview, error };
};
export default useCreateReview;