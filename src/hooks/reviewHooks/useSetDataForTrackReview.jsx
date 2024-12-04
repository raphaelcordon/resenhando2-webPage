import { useCallback } from "react";
import useGetTrackById from "../useGetTrackById.jsx";
import {GetTrackById} from "../../axios/spotifyAxios.js";

const useSetDataForTrackReview = () => {
    const { getTrackById } = useGetTrackById();

    const setDataForTrackReview = useCallback(async (spotifyId) => {
        try {
            const data = await GetTrackById(spotifyId);
            console.log("track", data);
            return {
                ...data,
                track: true,
                releaseDate: new Date(data.releaseDate).toLocaleDateString('en-GB'),
                radioUrl: `${data.externalUrls?.spotify?.substring(0, 25)}embed/${data.externalUrls?.spotify?.substring(25)}`,
            };
        } catch (error) {
            console.error("Error fetching track:", error);
            throw error;
        }
    }, [useGetTrackById]);

    return { setDataForTrackReview };
};

export default useSetDataForTrackReview;