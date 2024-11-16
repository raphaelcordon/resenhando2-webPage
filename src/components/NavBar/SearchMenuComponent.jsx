import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <div className="w-full md:w-auto flex items-center bg-gray-300 rounded-2xl px-3 py-1 m-1">
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-gray-400 text-sm mr-1 "
            />
            <form className="w-full flex items-center">
                <input
                    type="text"
                    placeholder=" search... "
                    value={searchQuery}
                    onChange={handleInputChange}
                    className="bg-transparent text-gray-800 placeholder-gray-500 outline-none text-sm w-full md:w-auto"
                />
            </form>
        </div>
    );
};

SearchComponent.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchComponent;