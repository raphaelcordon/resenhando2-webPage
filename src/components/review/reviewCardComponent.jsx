
const ReviewCardComponent = ({ review }) => {
    const { id, coverImage, reviewTitle, reviewBody, reviewType, spotifyId, createdAt, user } = review;

    const formattedDate = new Date(createdAt).toLocaleDateString('en-GB');
    const truncateText = (text, limit) =>
        text.length > limit ? `${text.substring(0, limit)}...` : text;
    
    return (
        <div className="w-72 border-gray-300 bg-amber-400 m-0">
            <div className="w-full">
                <img src={coverImage} alt={reviewTitle} className="w-full h-72 object-cover block"/>
            </div>
            <article className="flex flex-col w-full p-4 bg-white pb-3">
                <div className="flex justify-between text-sm text-gray-600">
                    <span>{formattedDate}</span>
                    <span>Author: <b>{truncateText(user.firstName + ' ' + user.lastName, 12)}</b></span>
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