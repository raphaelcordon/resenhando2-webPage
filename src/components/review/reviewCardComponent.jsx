import {useSelector} from "react-redux";

const ReviewCardComponent = ({ review }) => {
    const { id, coverImage, reviewTitle, reviewBody, reviewType, spotify, userId, createdAt } = review;

    const formattedDate = new Date(createdAt).toLocaleDateString('en-GB');
    const truncateText = (text, limit) =>
        text.length > limit ? `${text.substring(0, limit)}...` : text;

    
    return (
        <div>
            <div className="w-full">
                <img src={coverImage} alt={reviewTitle} className="w-full h-72 object-cover block"/>
            </div>
            <article className="flex flex-col w-full p-4 bg-white pb-4">
                <div className="flex justify-between text-sm text-gray-600">
                    <span>{formattedDate}</span>
                    <span>Author: <b>{truncateText(userId, 10)}</b></span>
                </div>
                <div className="flex flex-wrap font-extrabold text-lg">
                    {truncateText(reviewTitle, 25)}
                </div>
                <div className="text-sm text-gray-600 h-10 p-1">
                    {truncateText(reviewBody, 40)}
                </div>
            </article>
        </div>
    )
}
export default ReviewCardComponent;