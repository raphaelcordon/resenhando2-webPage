import ButtonCreateReview from "../Buttons/ButtonCreateReview.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import ReviewWriteArtist from "./ReviewWriteArtist.jsx";
import {useState} from "react";


const ReviewArtistDetailed = ({ item }) => {
    const { id, name, uri, href, genres, popularity } = item;
    const image = item.images?.[0];
    const imageUrl = image?.url;
    const followers = new Intl.NumberFormat('de-DE').format(item.followers.total);
    
    const externalUrl = item.externalUrls.spotify;
    const radio = `${externalUrl.substring(0, 25)}embed/${externalUrl.substring(25, externalUrl.length)}`;

    const [writingReview, setWritingReview] = useState(false);
    const handleStartReview = () => {
        setWritingReview(true);
    };

    if (writingReview) {
        return <ReviewWriteArtist item={item} />;
    }

    const truncateText = (text, limit) =>
        text.length > limit ? `${text.substring(0, limit)}...` : text;

    const TitleText = (text) =>
        `${text.substring(0, 1).toUpperCase() + text.substring(1, text.length).toLowerCase()}`

    const ListGenres = (genres) => {
        const preparedList = genres.map((genre) => `${TitleText(genre)}`)
        return preparedList.toString().replaceAll(',', ', ');
    }

    const handleScroll = () => {
        const target = document.getElementById("createArtistReview");
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };
    
    return (
        <div className="h-full w-full flex flex-col justify-between">

            <div className="relative">
                {/* Artist */}
                <div className="py-3 flex justify-center">
                    <span className="text-xl md:text-3xl font-bold pl-1">{truncateText(name, 45)}</span>
                </div>

                {/* Scroll down link for big screens */}
                    <div className="hidden md:flex absolute bottom-0 right-1 z-10  flex-col items-center cursor-pointer hover:opacity-50"
                    onClick={handleScroll}>
                        <span className="text-xs pb-1 z-10 font-extralight text-blue-300">Scroll down</span>
                        <div className="w-6 h-6 absolute -bottom-3 flex items-center justify-center bg-white border-2 border-blue-200 rounded-full shadow-lg shadow-gray-500">
                            <FontAwesomeIcon icon={faCircleDown} className="text-base w-3 h-3 md:text-lg text-blue-200" />
                        </div>
                    </div>
            </div>

            {/* Image block */}
            <div className="w-full flex justify-center">
                <img src={imageUrl} alt={name} className="w-full h-full"/>
            </div>

            {/* Button Create Review */}
            <div className="w-full mt-4 flex justify-center" id="createArtistReview">
                <ButtonCreateReview buttonName={`Write a review about ${truncateText(name, 20)}`}
                                    onClick={handleStartReview}/>
            </div>

            {/* Text block */}
            <article
                className="flex flex-col w-full pt-4 px-2 h-auto bg-gradient-to-b from-[#fafafa] to-[#f5faff]">
                <div className="flex flex-col justify-between text-sm text-gray-600 pb-6">
                    
                    {/* Genres */}
                    <div className="pb-4">
                        <span className="font-bold">Genres: </span>
                        {genres.length > 0 ? (
                                <span className="w-full text-sm pl-1">
                                {truncateText(ListGenres(genres), 500)}</span>
                            ) :
                            (
                                <span className="text-sm text-gray-500 pl-1">Not defined</span>
                            )
                        }
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
                                style={{width: `${popularity}%`}}
                            ></div>
                        </div>
                        <span className="text-sm md:text-base font-bold pl-2">{popularity}%</span>
                    </div>
                </div>
            </article>
            
            {/* Embedded Radio */}
            <div className="w-full flex justify-center items-center">
                <iframe src={radio} width="1024" height="600" allowTransparency="false" allow="encrypted-media"></iframe>
            </div>

        </div>
    )
}
export default ReviewArtistDetailed;