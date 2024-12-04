import { useState, useRef } from "react";
import { SearchArtistByName } from "../../../axios/spotifyAxios.js";
import LoaderComponent from "../../common/loaderComponent.jsx";
import ReviewCardFindArtistComponent from "./../cardComponents/reviewCardFindArtistComponent.jsx";
import ReviewArtistDetailed from "./../detailingComponents/reviewArtistDetailed.jsx";

// This component Search for ARTISTS in the Backend and render them back in multiple "reviewCardFindArtistComponent.jsx"
const ReviewFindArtistComponent = () => {
    const [search, setSearch] = useState("");
    const [searchLimit, setSearchLimit] = useState(5);
    const [searchOffset, setSearchOffset] = useState(0);
    const [searchResult, setSearchResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isResultNull, setIsResultNull] = useState(false);
    const [selectedArtist, setSelectedArtist] = useState(null); // Track the selected artist
    const elementRef = useRef(null); // Reference for the element to scroll to

    const getSubmitData = async (limit, offset) => {
        setIsLoading(true);
        try {
            const res = await SearchArtistByName(search, limit, offset);
            if (res?.length === 0) {
                setIsResultNull(true);
            } else {
                setIsResultNull(false);
                setSearchResult((prevResults) => [...prevResults, ...res]);
            }
        } catch (error) {
            console.log(error);
            setIsResultNull(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent page reload
        setSearchResult([]); // Clear previous results
        setSearchOffset(0); // Reset offset for the first search
        setSearchLimit(5); // Reset limit for the first search
        await getSubmitData(5, 0); // Fetch first set of results
    };

    const loadMore = async () => {
        if (searchOffset === 0) {
            // Second search: Limit 10, Offset 6
            setSearchLimit(10);
            setSearchOffset(6);
            await getSubmitData(10, 6);

            // Scroll to the element with index 6
            setTimeout(() => {
                elementRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }, 100);
        }
    };

    const handleCardClick = (artist) => {
        setSelectedArtist(artist); // Set the selected artist
    };

    const closeDetailedView = () => {
        setSelectedArtist(null); // Close the detailed view
    };

    return (
        <div className="w-full md:w-4/5 flex flex-col items-center relative">
            {/* Search Bar */}
            <div className="w-[95vw] md:w-full h-10 flex items-center bg-gray-300 rounded-2xl pl-3 md:m-5">
                <span className="w-auto text-xs md:text-sm text-gray-500 text-nowrap">Search for an artist:</span>
                <form onSubmit={handleSearch} className="w-full h-full flex items-center pl-2 rounded-2xl">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        required
                        placeholder="Artist name..."
                        className="bg-transparent text-blue-600 placeholder-blue-400 outline-none text-base w-full h-full"
                    />
                </form>
            </div>

            {/* Display loader or results */}
            {isLoading ? (
                <LoaderComponent />
            ) : searchResult.length > 0 ? (
                <div className="flex flex-col w-full">
                    <div className="text-gray-500 pl-2 md:pl-0 pt-4 md:pt-0 pb-4">
                        Results of your search:
                    </div>
                    <div className="w-full flex flex-wrap justify-start md:justify-around md:gap-1 pl-2 md:pl-0">
                        {searchResult
                            .filter((item) => item.images.length > 0)
                            .map((item, index) => (
                                <div
                                    key={item.id}
                                    className="w-1/2 md:w-1/6 cursor-pointer"
                                    ref={index === 5 ? elementRef : null} // Add ref to the 6th element
                                    onClick={() => handleCardClick(item)} // Handle card click
                                >
                                    <ReviewCardFindArtistComponent item={item} />
                                </div>
                            ))}
                    </div>
                    {searchResult.length < 15 && (
                        <div className="w-full flex items-center justify-center m-4">
                            <button onClick={loadMore} className="px-4 py-2 bg-gray-400 text-white rounded">
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            ) : isResultNull ? (
                <p className="text-center mt-4 text-gray-500">No results found.</p>
            ) : null}

            {/* Overlay Component */}
            {selectedArtist && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeDetailedView} // Close when clicking outside
                >
                    <div
                        className="bg-white rounded-lg shadow-lg w-4/5 md:w-2/5 h-4/5 scroll-auto overflow-y-auto"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        <ReviewArtistDetailed item={selectedArtist} onClose={closeDetailedView} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReviewFindArtistComponent;
