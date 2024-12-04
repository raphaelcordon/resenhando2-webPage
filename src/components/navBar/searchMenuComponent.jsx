import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchComponent = () => {
    

    return (
        <div className="w-full md:w-auto lg:w-full flex items-center bg-gray-300 rounded-2xl px-3 py-1 md:py-2 m-1 md:m-5">
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-gray-400 text-sm mr-1 "
            />
            <form className="w-full flex items-center">
                <input
                    type="text"
                    placeholder=" search... "
                    className="bg-transparent text-gray-800 placeholder-gray-500 outline-none text-sm w-full md:w-auto"
                />
            </form>
        </div>
    );
};

export default SearchComponent;