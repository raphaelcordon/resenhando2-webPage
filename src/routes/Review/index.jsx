import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ButtonSubmitDefault from "../../components/Buttons/ButtonSubmitDefault.jsx";
import useGetReview from "../../hooks/useGetReviews.jsx";
import useGetArtistById from "../../hooks/useGetArtistById.jsx";
import LoaderComponent from "../../components/Common/LoaderComponent.jsx";

const Review = () => {
    const { id: reviewId } = useParams();
    const { getReview, error } = useGetReview();
    const { getArtistById, errorGetArtist } = useGetArtistById();
    
    const [reviewTitle, setReviewTitle] = useState('');
    const [reviewBody, setReviewBody] = useState('');
    const [spotifyId, setSpotifyId] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const reviews = useSelector((state) => state.reviewArtist?.reviewArtistData?.items || []);
    const review = reviews.find((review) => review.id === reviewId);
    const [artist, setArtist] = useState([]);
    const [genres, setGenres] = useState('');
    const [followers, setFollowers] = useState([]);
    const [externalUrl, setExternalUrl] = useState('');
    const [radio, setRadio] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            if (!review) {
                setIsLoading(true);
                await getReview("artist", 0, 8);
                setIsLoading(false);
            } else {
                setReviewTitle(review.reviewTitle || '');
                setReviewBody(review.reviewBody || '');
                setSpotifyId(review.spotifyId || '');
                setImageUrl(review.coverImage || '');
            }
        };

        const fetchSpotifyArtist = async () => {
            if (review && review.spotifyId) {
                setIsLoading(true);
                try {
                    const res = await getArtistById(review.spotifyId);
                    setArtist(res);
                    setFollowers(new Intl.NumberFormat('de-DE').format(res.followers?.total) || 0); // Directly extract total followers
                    setGenres(truncateText(ListGenres(res.genres), 500)); // Use res.genres directly
                    setExternalUrl(res.externalUrls?.spotify || '');
                    setRadio(`${externalUrl.substring(0, 25)}embed/${externalUrl.substring(25, externalUrl.length)}`)
                } catch (error) {
                    console.error("Error fetching artist:", error);
                } finally {
                    setIsLoading(false);
                }
            }
        };

        fetchData();
        fetchSpotifyArtist();
    }, [review, getReview, getArtistById, radio]);

    if (error) {
        return <p>Error: {error}</p>;
    }
    

    const truncateText = (text, limit) =>
        text.length > limit ? `${text.substring(0, limit)}...` : text;

    const TitleText = (text) =>
        `${text.substring(0, 1).toUpperCase() + text.substring(1, text.length).toLowerCase()}`

    const ListGenres = (genres) => {
        const preparedList = genres.map((genre) => `${TitleText(genre)}` )
        return preparedList.toString().replaceAll(',', ', ');
    }
    
    return (
        <div className="flex flex-col justify-start pt-6 items-center min-h-[60vh]">
            {isLoading ? (
                <LoaderComponent />
            ) : review ? (
                <div className="w-full flex flex-col md:flex-row justify-start md:justify-center">
                    {/* Image block */}
                    <div className="w-42 md:w-1/2 md:h-full">
                        <img src={imageUrl} alt={review.name} className="w-full h-full md:h-full object-cover block"/>
                    </div>
                    
                    {/* Review */}
                    <div className="md:w-1/2 w-[95vw] p-6">
                        <h2 className="text-xl font-semibold text-start mt-2 mb-2">
                            Review about: "{artist.name}"
                        </h2>
                        <div className="mb-4">{reviewTitle}</div>
                        <div className="mb-4">{reviewBody}</div>

                        {/* Genres */}
                        <div className="pb-4">
                            <span className="font-bold">Genres: </span>
                            {genres ? (
                                <span className="w-full text-sm pl-1">{genres}</span>
                            ) : (
                                <span className="text-sm text-gray-500 pl-1">Not defined</span>
                            )}
                        </div>

                        {/* Followers */}
                        <div className="pb-4">
                            <span className="font-bold">Spotify followers:</span>
                            <span className="text-sm md:text-base font-bold pl-1">{followers}</span>
                        </div>

                        {/* Popularity */}
                        <div className="flex items-center">
                            <span className="font-bold mr-2">Popularity:</span>
                            <div className="flex-1 bg-gray-300 rounded-lg h-4 relative">
                                <div
                                    className="bg-green-500 h-4 rounded-lg"
                                    style={{width: `${artist.popularity}%`}}
                                ></div>
                            </div>
                            <span className="text-sm md:text-base font-bold pl-2">{artist.popularity}%</span>
                        </div>

                        {/* Embedded Radio */}
                        <div className="w-full flex justify-center items-center mt-2">
                            <iframe src={radio} width="1024" height="500" allowTransparency="false" allow="encrypted-media"></iframe>
                        </div>
                        
                    </div>
                </div>
            ) : (
                <p>Review not found</p>
            )}
        </div>
    );
};

export default Review;