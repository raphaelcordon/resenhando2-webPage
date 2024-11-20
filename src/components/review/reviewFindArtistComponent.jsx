import { useState } from "react";
import { SearchArtistByName } from "../../axios/spotifyAxios.js";
import LoaderComponent from "../Common/LoaderComponent.jsx";
import ButtonSubmitDefault from "../Buttons/ButtonSubmitDefault.jsx";
import ReviewCardFindArtistComponent from "./reviewCardFindArtistComponent.jsx";

const ReviewFindArtistComponent = () => {
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isResultNull, setIsResultNull] = useState(false);

    const getSubmitData = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await SearchArtistByName(search);
            console.log(res);
            res?.length === 0 ? setIsResultNull(true) : setIsResultNull(false);
            setSearchResult(res || []); // Update based on actual response structure
        } catch (error) {
            console.log(error);
            setSearchResult([]); // Clear results if there's an error
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full md:w-4/5 flex flex-col items-center">
            <div className="w-[95vw] md:w-full h-10 flex items-center bg-gray-300 rounded-2xl pl-3 md:m-5">
                <span className="w-auto text-xs md:text-sm text-gray-500 text-nowrap">Search for an artist:</span>
                <form onSubmit={getSubmitData} className="w-full h-full flex items-center pl-2 rounded-2xl">
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

            <hr className="mt-5"/>

            {/* Display loader or results */}
            {isLoading ? (
                <LoaderComponent />
            ) : searchResult.length > 0 ? (
                <div className="w-full flex flex-wrap justify-start md:gap-1 pl-2 md:pl-0">
                    {searchResult
                        .filter((item) => item.images.length > 0) // Filter items with non-empty images
                        .map((item) => (
                            <div key={item.id} className="w-1/2 md:w-1/6">
                                <ReviewCardFindArtistComponent item={item} />
                            </div>
                        ))}
                </div>
            ) : isResultNull ? (
                <p className="text-center mt-4 text-gray-500">No results found.</p>
            ) : null }
        </div>
    );
};

export default ReviewFindArtistComponent;
