
const ReviewCardFindArtistComponent = ({ item }) => {
    const { name, genres } = item;
    const image = item.images?.[0];
    const imageUrl = image?.url;
    const truncateText = (text, limit) =>
        text.length > limit ? `${text.substring(0, limit)}...` : text;

    const TitleText = (text) =>
        `${text.substring(0, 1).toUpperCase() + text.substring(1, text.length).toLowerCase()}`
    
    const ListGenres = (genres) => {
        const preparedList = genres.map((genre) => `${TitleText(genre)}` )
        return preparedList.toString().replaceAll(',', ', ');
    }
    

    return (
        <div className="w-[90%] md:w-full cursor-pointer shadow-md mb-6 hover:opacity-60">

            {/* Image block */}
            <div className="w-42">
                <img src={imageUrl} alt={name} className="w-full h-40 md:h-64 object-cover block"/>
            </div>
            
            {/* Text block */}
            <article className="flex flex-col w-full h-16 md:h-24 p-4 bg-gradient-to-b from-[#fafafa] to-[#f5faff] pb-3 overflow-hidden"> {/* [#edf5fd] */}
                <div className="flex flex-col justify-between text-sm text-gray-600 overflow-hidden">
                    <div>
                        <span>Artist:</span> 
                        <span className="text-sm md:text-base font-bold pl-1">{truncateText(name, 20)}</span>
                    </div>
                    <div className="hidden md:block">
                        <span>Genres: </span>
                        { genres.length > 0 ? (
                            <span className="w-full text-sm pl-1">
                                {truncateText(ListGenres(genres), 100)}</span>
                            ) :
                            (
                            <span className="text-sm text-gray-500 pl-1">Not defined</span>
                            )
                        }
                    </div>
                </div>
            </article>
            
        </div>
    )
}
export default ReviewCardFindArtistComponent;