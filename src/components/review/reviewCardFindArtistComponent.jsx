
const ReviewCardFindArtistComponent = ({ item }) => {
    const { id, name, uri, href, genres } = item;
    const image = item.images?.[0];
    const imageUrl = image?.url;
    const truncateText = (text, limit) =>
        text.length > limit ? `${text.substring(0, limit)}...` : text;

    return (
        <div className="w-full lg:w-72 shadow m-0">
            <div className="w-full">
                <img src={imageUrl} alt={name} className="w-full lg:h-72 object-cover block"/>
            </div>
            
            <article className="flex flex-col w-full p-4 bg-white pb-3">
                <div className="flex justify-between text-sm text-gray-600">
                    <span>{name}</span>
                </div>
            </article>
        </div>
    )
}
export default ReviewCardFindArtistComponent;