import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRecordVinyl, faMusic, faPencil, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {Link, useLocation} from 'react-router-dom';
import {useEffect} from 'react';

const MainSubMenuComponent = ({ setActiveComponent, activeComponent = null }) => {

    return (
        <div className="w-full h-full flex justify-start">

            {/* Menu Items */}
            <div className="w-full flex items-center justify-around md:justify-start">
                
                {/* Artists */}
                <Link
                    to="/artists"
                    className={`w-full md:w-44 h-full flex justify-center items-center gap-2 py-4 px-2 cursor-pointer ${
                        activeComponent === 'artists'
                            ? 'bg-SelectedMenuBgColor text-SelectedMenuTextColor'
                            : 'hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor'
                    }`}
                    onClick={() => {
                        setActiveComponent('artists');
                    }}
                >
                    <div className="flex flex-col items-center">
                        <FontAwesomeIcon icon={faStar} className="text-base md:text-lg" />
                        <span className="text-xs md:text-base lg:text-lg">Artists</span>
                    </div>
                </Link>

                {/* Albums */}
                <Link
                    to="/albums"
                    className={`w-full md:w-44 h-full flex justify-center items-center gap-2 py-2 cursor-pointer ${
                        activeComponent === 'albums'
                            ? 'bg-SelectedMenuBgColor text-SelectedMenuTextColor'
                            : 'hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor'
                    }`}
                    onClick={() => {
                        setActiveComponent('albums');
                    }}
                >
                    <div className="flex flex-col items-center">
                        <FontAwesomeIcon icon={faRecordVinyl} className="text-base md:text-lg" />
                        <span className="text-xs md:text-base lg:text-lg">Albums</span>
                    </div>
                </Link>

                {/* Tracks */}
                <Link
                    to="/tracks"
                    className={`w-full md:w-44 h-full flex justify-center items-center gap-2 py-2 cursor-pointer ${
                        activeComponent === 'tracks'
                            ? 'bg-SelectedMenuBgColor text-SelectedMenuTextColor'
                            : 'hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor'
                    }`}
                    onClick={() => {
                        setActiveComponent('tracks');
                    }}
                >
                    <div className="flex flex-col items-center">
                        <FontAwesomeIcon icon={faMusic}  className="text-base md:text-lg" />
                        <span className="text-xs md:text-base lg:text-lg">Tracks</span>
                    </div>
                </Link>

                {/* Write a Review */}
                <Link
                    to="/newreview"
                    className={`w-full md:w-44 h-full flex justify-center items-center gap-2 py-2 cursor-pointer ${
                        activeComponent === 'newReview'
                            ? 'bg-SelectedMenuBgColor text-SelectedMenuTextColor'
                            : 'hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor'
                    }`}
                    onClick={() => {
                        setActiveComponent('newReview');
                    }}
                >
                    <div className="flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faPencil} className="text-base md:text-lg" />
                        <span className="text-xs md:text-base lg:text-lg text-nowrap">Write a review</span>
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