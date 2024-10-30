import { useEffect } from "react";
import ReviewCardComponent from "../review/reviewCardComponent.jsx";
import { useSelector } from "react-redux";
import useGetReviewArtist from "../../hooks/useGetReviewArtist.jsx";

const MainArtistsComponent = () => {
    const review = useSelector((state) => state.reviewArtist.reviewArtistData);
    const { getReviewArtist, error } = useGetReviewArtist();

    useEffect(() => {
        const fetchReviews = async () => {
            if (!review || review.length === 0) {
                await getReviewArtist();
            }
        };
        fetchReviews();
    }, [getReviewArtist, review]);

    return (
        <div className="w-screen min-h-screen flex justify-center">
            <div className="w-4/5 flex flex-wrap gap-5">
                {error && <p>{error}</p>}
                {review && review.totalCount > 0 ? (
                    review.items
                        .slice()
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                        .map((item) => (
                            <div key={item.id}><ReviewCardComponent review={item}/>
                            </div>
                        ))
                ) : (
                    <p>Loading reviews...</p>
                )}
            </div>
        </div>
    );
};

export default MainArtistsComponent;