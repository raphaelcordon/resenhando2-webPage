import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoaderComponent from "../../components/common/loaderComponent.jsx";
import ReviewViewBody from "../../components/review/commonComponents/reviewViewBody.jsx";
import {GetReviewById} from "../../axios/reviewAxios.js";
import UseSetDataForArtistReview from "../../hooks/reviewHooks/useSetDataForArtistReview.jsx";

const Review = () => {
    const { id: reviewId } = useParams();
    // Check reviews in store
    const reviews = useSelector((state) => state.reviewArtist.reviewArtistData.items || []);

    const [review, setReview] = useState(null);
    const [artist, setArtist] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { setDataForArtistReview } = UseSetDataForArtistReview();

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
                            setArtist(artistData);
                            break;
                        case 1: // Album
                            console.log("Album data fetching not implemented yet.");
                            break;
                        case 2: // Track
                            console.log("Track data fetching not implemented yet.");
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
        review,
        artist,
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