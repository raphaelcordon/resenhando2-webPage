import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoaderComponent from "../../components/common/loaderComponent.jsx";
import ReviewViewBody from "../../components/review/commonComponents/reviewViewBody.jsx";
import {GetReviewById} from "../../axios/reviewAxios.js";
import UseSetDataForArtistReview from "../../hooks/reviewHooks/useSetDataForArtistReview.jsx";
import UseSetDataForAlbumReview from "../../hooks/reviewHooks/useSetDataForAlbumReview.jsx";
import UseSetDataForTrackReview from "../../hooks/reviewHooks/useSetDataForTrackReview.jsx";

const Review = () => {
    const { id: reviewId } = useParams();
    // Check reviews in store
    const reviews = useSelector((state) => state.reviewArtist.reviewArtistData.items || []);

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
                let existingReview = reviews.find((r) => r.id === reviewId);
                if (!existingReview) {
                    existingReview = await GetReviewById(reviewId);
                }

                setReview(existingReview);

                if (existingReview) {
                    switch (existingReview.reviewType) {
                        case 0: // Artist
                            const artistData = await setDataForArtistReview(existingReview.spotifyId);
                            setFinalReviewContent(artistData);
                            break;
                        case 1: // Album
                            const albumData = await setDataForAlbumReview(existingReview.spotifyId);
                            setFinalReviewContent(albumData);
                            break;
                        case 2: // Track
                            const trackData = await setDataForTrackReview(existingReview.spotifyId);
                            setFinalReviewContent(trackData);
                            break;
                        default:
                            console.log("Unsupported review type.");
                    }
                }
            } catch (error) {
                console.error("Error in fetchData:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [reviewId, reviews, setDataForArtistReview]);

    if (isLoading) {
        return <LoaderComponent />;
    }

    if (!review) {
        return <p>Review not found</p>;
    }

    const reviewProp = {
        finalReviewContent,
        imageUrl: review.coverImage,
        reviewTitle: review.reviewTitle,
        reviewBody: review.reviewBody,
    };

    return (
        <div className="flex flex-col justify-start pt-6 items-center min-h-[60vh]">
            {isLoading ? (
                <LoaderComponent />
            ) : review ? (
                <ReviewViewBody reviewProp={reviewProp} />
            ) : (
                <p>Review not found</p>
            )}
        </div>
    );
};

export default Review;