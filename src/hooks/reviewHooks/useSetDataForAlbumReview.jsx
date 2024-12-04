import { useCallback } from "react";
import useGetAlbumById from "../useGetAlbumById.jsx";
import truncateText from "../common/truncateText.js";
import titleText from "../common/titleText.js";
import {GetAlbumById} from "../../axios/spotifyAxios.js";

const useSetDataForAlbumReview = () => {
    const { getAlbumById } = useGetAlbumById();

    const setDataForAlbumReview = useCallback(async (spotifyId) => {
        try {
            const data = await GetAlbumById(spotifyId);
            return {
                ...data,
                genres: truncateText(
                    data.genres.map((genre) => titleText(genre)).join(", "),
                    500
                ),
                followers: new Intl.NumberFormat("de-DE").format(
                    data.followers?.total || 0
                ),
                radioUrl: `${data.externalUrls?.spotify?.substring(0, 25)}embed/${data.externalUrls?.spotify?.substring(25)}`,
            };
        } catch (error) {
            console.error("Error fetching artist:", error);
            throw error;
        }
    }, [useGetAlbumById]);

    return { setDataForAlbumReview };
};

export default useSetDataForAlbumReview;