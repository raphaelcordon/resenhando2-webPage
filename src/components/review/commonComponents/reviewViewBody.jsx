const reviewViewBody = ({reviewProp}) => {
    
    const {review, artist, imageUrl, reviewTitle, reviewBody} = reviewProp;
    
    return (
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
                    {artist.genres ? (
                        <span className="w-full text-sm pl-1">{artist.genres}</span>
                    ) : (
                        <span className="text-sm text-gray-500 pl-1">Not defined</span>
                    )}
                </div>
                
                {/* Followers */}
                <div className="pb-4">
                    <span className="font-bold">Spotify followers:</span>
                    <span className="text-sm md:text-base font-bold pl-1">{artist.followers}</span>
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
                    <iframe src={artist.radioUrl} width="1024" height="500" allow="encrypted-media"></iframe>
                </div>

            </div>
        </div>
    )
}
export default reviewViewBody;