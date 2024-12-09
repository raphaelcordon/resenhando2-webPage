import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoaderComponent from "../../components/common/loaderComponent.jsx";
import ReviewViewBody from "../../components/review/commonComponents/reviewViewBody.jsx";
import { GetReviewById } from "../../axios/reviewAxios.js";
import UseSetDataForArtistReview from "../../hooks/reviewHooks/useSetDataForArtistReview.jsx";
import UseSetDataForAlbumReview from "../../hooks/reviewHooks/useSetDataForAlbumReview.jsx";
import UseSetDataForTrackReview from "../../hooks/reviewHooks/useSetDataForTrackReview.jsx";

export default function Review() {
    const { id: reviewId } = useParams();
    const reviews = useSelector((state) => state.reviewArtist.reviewArtistData.items || []); // Get reviews from Redux
    console.log("reviews", reviews);

    const [review, setReview] = useState(null);
    const [finalReviewContent, setFinalReviewContent] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { setDataForArtistReview } = UseSetDataForArtistReview();
    const { setDataForAlbumReview } = UseSetDataForAlbumReview();
    const { setDataForTrackReview } = UseSetDataForTrackReview();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                // Check if the review is already in the Redux store
                let existingReview = reviews.find((r) => r.id === reviewId);

                // If not found, fetch from the server
                if (!existingReview) {
                    existingReview = await GetReviewById(reviewId);
                }

                setReview(existingReview);

                // Fetch additional data based on the review type
                if (existingReview) {
                    let reviewContent = null;
                    switch (existingReview.reviewType) {
                        case 0: // Artist
                            reviewContent = await setDataForArtistReview(existingReview.spotifyId);
                            break;
                        case 1: // Album
                            reviewContent = await setDataForAlbumReview(existingReview.spotifyId);
                            break;
                        case 2: // Track
                            reviewContent = await setDataForTrackReview(existingReview.spotifyId);
                            break;
                        default:
                            console.warn("Unsupported review type:", existingReview.reviewType);
                    }

                    setFinalReviewContent(reviewContent);
                }
            } catch (error) {
                console.error("Error in fetchData:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [reviewId, reviews, setDataForArtistReview, setDataForAlbumReview, setDataForTrackReview]);

    if (isLoading) {
        return <LoaderComponent />;
    }

    if (!review) {
        return <p>Review not found</p>;
    }

    const reviewProp = {
        finalReviewContent,
        review,
    };

    return (
        <div className="flex flex-col justify-start pt-6 items-center min-h-[60vh]">
            <ReviewViewBody reviewProp={reviewProp} />
        </div>
    );
};