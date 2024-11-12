import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRecordVinyl, faMusic, faPencil, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MainSubMenuComponent = ({ setActiveComponent, activeComponent = null }) => {

    return (
        <div className="w-full h-full flex justify-start">

            {/* Menu Items */}
            <div className="w-full flex items-center justify-start">
                {/* Artists */}
                <Link
                    to="/artists"
                    className={`lg:w-44 h-full flex justify-center items-center gap-2 py-4 px-2 cursor-pointer ${
                        activeComponent === 'artists'
                            ? 'bg-SelectedMenuBgColor text-SelectedMenuTextColor'
                            : 'hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor'
                    }`}
                    onClick={() => {
                        setActiveComponent('artists');
                        setIsDropdownOpen(false);
                    }}
                >
                    <div className="flex flex-col items-center">
                        <FontAwesomeIcon icon={faStar} className="text-lg md:text-xl" />
                        <span className="md:text-base ">Artists</span>
                    </div>
                </Link>

                {/* Albums */}
                <Link
                    to="/albums"
                    className={`lg:w-44 h-full flex justify-center items-center gap-2 py-2 cursor-pointer ${
                        activeComponent === 'albums'
                            ? 'bg-SelectedMenuBgColor text-SelectedMenuTextColor'
                            : 'hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor'
                    }`}
                    onClick={() => {
                        setActiveComponent('albums');
                        setIsDropdownOpen(false);
                    }}
                >
                    <div className="flex flex-col items-center">
                        <FontAwesomeIcon icon={faRecordVinyl} className="text-lg md:text-xl" />
                        <span className="text-sm md:text-base">Albums</span>
                    </div>
                </Link>

                {/* Tracks */}
                <Link
                    to="/tracks"
                    className={`lg:w-44 h-full flex justify-center items-center gap-2 py-2 cursor-pointer ${
                        activeComponent === 'tracks'
                            ? 'bg-SelectedMenuBgColor text-SelectedMenuTextColor'
                            : 'hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor'
                    }`}
                    onClick={() => {
                        setActiveComponent('tracks');
                        setIsDropdownOpen(false);
                    }}
                >
                    <div className="flex flex-col items-center">
                        <FontAwesomeIcon icon={faMusic} className="text-lg md:text-xl" />
                        <span className="text-sm md:text-base">Tracks</span>
                    </div>
                </Link>

                {/* Write a Review */}
                <Link
                    to="/newreview"
                    className={`lg:w-44 h-full flex justify-center items-center gap-2 py-2 cursor-pointer ${
                        activeComponent === 'newReview'
                            ? 'bg-SelectedMenuBgColor text-SelectedMenuTextColor'
                            : 'hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor'
                    }`}
                    onClick={() => {
                        setActiveComponent('newReview');
                        setIsDropdownOpen(false);
                    }}
                >
                    <div className="flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faPencil} className="text-lg md:text-xl" />
                        <span className="text-sm md:text-base">Write a review</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

MainSubMenuComponent.propTypes = {
    setActiveComponent: PropTypes.func.isRequired,
    activeComponent: PropTypes.string,
};

export default MainSubMenuComponent;