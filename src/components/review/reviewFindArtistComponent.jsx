import { useState } from "react";
import { SearchArtistByName } from "../../axios/spotifyAxios.js";
import LoaderComponent from "../Common/LoaderComponent.jsx";
import ButtonSubmitDefault from "../Buttons/ButtonSubmitDefault.jsx";
import ReviewCardFindArtistComponent from "./reviewCardFindArtistComponent.jsx";

const ReviewFindArtistComponent = () => {
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getSubmitData = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await SearchArtistByName(search);
            setSearchResult(res || []); // Update based on actual response structure
        } catch (error) {
            console.log(error);
            setSearchResult([]); // Clear results if there's an error
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <div className="w-full md:w-auto flex items-center bg-white rounded-2xl px-3 py-1 md:py-2 m-1 md:m-5">
                <span className="text-sm text-gray-800">Search for an artist:</span>
                <form onSubmit={getSubmitData} className="w-auto flex items-center px-2">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        required
                        placeholder="Artist name..."
                        className="bg-transparent text-gray-800 placeholder-gray-500 outline-none text-sm w-full md:w-auto"
                    />
                </form>
            </div>

            <hr />

            {/* Display loader or results */}
            {isLoading ? (
                <LoaderComponent />
            ) : searchResult.length > 0 ? (
                <div className="w-full lg:w-4/5 flex flex-wrap gap-3 lg:gap-5">
                    {searchResult
                        .filter((item) => item.images.length > 0) // Filter items with non-empty images
                        .map((item) => (
                            <div key={item.id} className="p-2">
                                <ReviewCardFindArtistComponent item={item}/>
                            </div>
                        ))}
                </div>
            ) : (
                <p className="text-center mt-4 text-gray-500">No results found.</p>
            )}
        </div>
    );
};

export default ReviewFindArtistComponent;
