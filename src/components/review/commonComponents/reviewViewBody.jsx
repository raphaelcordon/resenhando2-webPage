import {useEffect, useState} from "react";
import AdjustDatetime from "../../../hooks/common/AdjustDatetime.js";

const reviewViewBody = ({reviewProp}) => {
    
    const {finalReviewContent, review} = reviewProp;
    const [reviewType, setReviewType] = useState("");
    const formattedDate = AdjustDatetime(review.createdAt);
    
    useEffect(() => {
        switch (review.reviewType) {
            case 0:
                setReviewType("artist");
                break;
            case 1:
                setReviewType("album");
                break;
            case 2:
                setReviewType("track");
                break;
        }
    });
    
    return (
        <div className="w-full flex flex-col md:flex-row justify-start md:justify-center">
            {/* Image block */}
            <div className="w-42 md:w-1/2 md:h-full">
                <img src={review.coverImage} alt={finalReviewContent.name} className="w-full h-full md:h-full object-cover block"/>
            </div>

            {/* Review */}
            <div className="w-full md:w-1/2 md:p-4 md:pt-0 flex flex-col">
                
                <div className="flex flex-col justify-between text-sm text-gray-600 font-light text-start py-4 px-1">
                    <div className="">
                        Review about the {reviewType} <b>{finalReviewContent.name}</b>
                    </div>
                    <div>Created at {formattedDate} by <b>{review.user.firstName} {review.user.lastName}</b></div>
                </div>

                {/* Review Title and Body */}
                <div className="bg-gray-100 py-0 px-1 mb-4 w-full">
                    <div className="mb-4 text-2xl font-bold">{review.reviewTitle}</div>
                    <div className="mb-4">{review.reviewBody}</div>
                </div>

                <div className="w-full p-2 md:p-0 flex flex-col">
                    {!finalReviewContent.track ? (
                        
                        <>
                            {/* Genres */}
                            <div className="pb-4">
                                <span className="font-bold">Genres: </span>
                                {finalReviewContent.genres ? (
                                    <span className="w-full text-sm pl-1">{finalReviewContent.genres}</span>
                                ) : (
                                    <span className="text-sm text-gray-500 pl-1">Not defined</span>
                                )}
                            </div>
    
                            {/* Followers */}
                            <div className="pb-4">
                                <span className="font-bold">Spotify followers:</span>
                                <span className="text-sm md:text-base font-bold pl-1">{finalReviewContent.followers}</span>
                            </div>
                        </>
                        
                    ) : (
                        <>
                            {/* Release Data */}
                            <div className="pb-4">
                                <span className="font-bold">Release Date:</span>
                                <span className="text-sm md:text-base font-bold pl-1">{finalReviewContent.releaseDate}</span>
                            </div>
                        </>
                    )}
                    
                    {/* Popularity */}
                    <div className="flex items-center">
                        <span className="font-bold mr-2">Artist Popularity:</span>
                        <div className="flex-1 bg-gray-300 rounded-lg h-4 relative">
                            <div
                                className="bg-green-500 h-4 rounded-lg"
                                style={{width: `${finalReviewContent.popularity}%`}}
                            ></div>
                        </div>
                        <span className="text-sm md:text-base font-bold pl-2">{finalReviewContent.popularity}%</span>
                    </div>
                    
                    {/* Embedded Radio */}
                    <div className="w-full flex justify-center items-center mt-4">
                        <iframe src={finalReviewContent.radioUrl} width="1024" height="500" allow="encrypted-media"></iframe>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default reviewViewBody;