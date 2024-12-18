import { useCallback } from "react";
import useGetArtistById from "../useGetArtistById.jsx";
import truncateText from "../common/truncateText.js";
import titleText from "../common/titleText.js";

const useSetDataForArtistReview = () => {
    const { getArtistById } = useGetArtistById();

    const setDataForArtistReview = useCallback(async (spotifyId) => {
        try {
            const data = await getArtistById(spotifyId);
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
    }, [getArtistById]);

    return { setDataForArtistReview };
};

export default useSetDataForArtistReview;