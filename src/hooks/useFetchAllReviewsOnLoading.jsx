import { useDispatch } from "react-redux";
import { GetReviews } from "../axios/reviewAxios.js";
import { storeReviewArtistData } from "../store/reducers/reviewArtistReducer.js";
import {storeReviewAlbumData} from "../store/reducers/reviewAlbumReducer.js";
import {storeReviewTrackData} from "../store/reducers/reviewTrackReducer.js";

export default function useFetchAllReviewsOnLoading() {
    const dispatch = useDispatch();

    return async (skip = 0, take = 8) => {
            const artist = await GetReviews(0, skip, take);
            dispatch(storeReviewArtistData(artist));
            
            const album = await GetReviews(1, skip, take);
            dispatch(storeReviewAlbumData(album));
            
            const track = await GetReviews(2, skip, take);
            dispatch(storeReviewTrackData(track));
    };
};