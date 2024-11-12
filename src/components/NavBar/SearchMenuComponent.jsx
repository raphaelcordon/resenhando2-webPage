import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <div className="relative w-full md:w-auto">
            {/* Toggle Button for Mobile */}
            <button
                className="md:hidden flex items-center justify-center w-full px-4 py-2"
                onClick={toggleDropdown}
            >
                <FontAwesomeIcon
                    icon={isDropdownOpen ? faTimes : faMagnifyingGlass}
                    className="text-gray-800 text-xl"
                />
            </button>

            {/* Search Form */}
            <div
                className={`${
                    isDropdownOpen ? 'flex' : 'hidden'
                } absolute bottom-16 left-0 w-full flex-col bg-white md:relative md:flex md:flex-row md:items-center`}
            >
                <form className="w-full flex items-center justify-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleInputChange}
                        className="bg-transparent text-gray-800 placeholder-gray-500 outline-none text-sm w-full md:w-auto"
                    />
                </form>
            </div>
        </div>
    );
};

SearchComponent.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchComponent;
