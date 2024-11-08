import {useSelector} from "react-redux";
import useGetReview from "../../hooks/useGetReview.jsx";
import {useEffect, useState} from "react";
import ReviewCardComponent from "../review/reviewCardComponent.jsx";

const MainMusicsComponent = () => {
    const review = useSelector((state) => state.reviewMusic.reviewMusicData);
    const { getReview, error } = useGetReview();
    const [skip, setSkip] = useState(0);
    const [take] = useState(8);

    useEffect(() => {
        const fetchReviews = async () => {
            if (!review?.items || review.items.length === 0) {
                await getReview("music", skip, take);
            }
        };
        fetchReviews();
    }, [getReview, review, skip, take]);

    const loadMore = async () => {
        const newSkip = skip + take;
        setSkip(newSkip);
        await getReview("music", newSkip, take);
    };

    return (
        <div className="w-screen min-h-screen flex justify-center mb-10">
            <div className="w-4/5 flex flex-wrap gap-5">
                {error && <p>{error}</p>}
                {review?.totalCount >= 0 ? (
                    <>
                        {review.items
                            ?.slice()
                            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                            .map((item) => (
                                <div key={item.id}>
                                    <ReviewCardComponent review={item} />
                                </div>
                            ))}
                        {review.items.length < review.totalCount && (
                            <div className="w-full flex items-center justify-center m-4">
                                <div className="flex items-center gap-4 w-full max-w-md">
                                    <div className="flex-1 border-t border-gray-400"></div>
                                    <button onClick={loadMore} className="px-4 py-2 bg-gray-400 text-white rounded">
                                        Load More
                                    </button>
                                    <div className="flex-1 border-t border-gray-400"></div>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <p>Loading reviews...</p>
                )}
            </div>
        </div>
    );
};
export default MainMusicsComponent;