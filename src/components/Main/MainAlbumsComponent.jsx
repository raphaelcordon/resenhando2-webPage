import {useSelector} from "react-redux";
import useGetReview from "../../hooks/useGetReviews.jsx";
import {useEffect, useState} from "react";
import ReviewCardComponent from "../review/reviewCardComponent.jsx";
import LoaderComponent from "../Common/LoaderComponent.jsx";
import {NavLink} from "react-router-dom";

const MainAlbumsComponent = () => {
    const review = useSelector((state) => state.reviewAlbum.reviewAlbumData);
    const { getReview, error } = useGetReview();
    const [skip, setSkip] = useState(0);
    const [take] = useState(8);

    useEffect(() => {
        const fetchReviews = async () => {
            if (!review?.items || review.items.length === 0) {
                await getReview("album", skip, take);
            }
        };
        fetchReviews();
    }, [getReview, review, skip, take]);

    const loadMore = async () => {
        const newSkip = skip + take;
        setSkip(newSkip);
        await getReview("album", newSkip, take);
    };

    return (
        <div className="w-screen min-h-[60vh] flex justify-center mb-10">
            <div className="w-full lg:w-4/5 flex flex-wrap gap-3 lg:gap-5">
                {error && <p>{error}</p>}
                {review?.totalCount > 0 ? (
                    <>
                        {review.items
                            ?.slice()
                            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                            .map((item) => (
                                <NavLink to={`/review/${item.id}`}  key={item.id}>
                                    <div className="">
                                        <ReviewCardComponent review={item} />
                                    </div>
                                </NavLink>
                            ))}
                        {review.items.length < review.totalCount && (
                            <div className="w-full flex items-center justify-center m-4">
                                <div className="w-full flex items-center gap-4">
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
                    <LoaderComponent />
                )}
            </div>
        </div>
    );
};
export default MainAlbumsComponent;