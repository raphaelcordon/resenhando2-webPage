import { useCallback } from "react";
import useGetArtistById from "../useGetArtistById.jsx";
import truncateText from "../common/truncateText.js";
import titleText from "../common/titleText.js";

const useSetDataForArtistReview = () => {
    const { getArtistById } = useGetArtistById();

    const setDataForArtistReview = useCallback(async (spotifyId) => {
        try {
            const artistData = await getArtistById(spotifyId);
            return {
                ...artistData,
                genres: truncateText(
                    artistData.genres.map((genre) => titleText(genre)).join(", "),
                    500
                ),
                followers: new Intl.NumberFormat("de-DE").format(
                    artistData.followers?.total || 0
                ),
                radioUrl: `${artistData.externalUrls?.spotify?.substring(0, 25)}embed/${artistData.externalUrls?.spotify?.substring(25)}`,
            };
        } catch (error) {
            console.error("Error fetching artist:", error);
            throw error;
        }
    }, [getArtistById]);

    return { setDataForArtistReview };
};

export default useSetDataForArtistReview;