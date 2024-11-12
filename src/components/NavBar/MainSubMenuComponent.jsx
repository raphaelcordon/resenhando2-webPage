import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRecordVinyl, faMusic, faPencil } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

const MainSubMenuComponent = ({ setActiveComponent, activeComponent = null }) => {
    return (
        <div className="w-full h-full flex justify-around">


            <Link to="/artists" className={`w-full h-full flex justify-center items-center gap-2 cursor-pointer ${
                activeComponent === 'artists'
                    ? 'bg-SelectedMenuBgColor text-SelectedMenuTextColor'
                    : 'hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor'
            }`}>
                <span onClick={() => setActiveComponent('artists')}>
                    <div className="flex flex-col items-center pl-15 hover:font-bold">
                        <FontAwesomeIcon icon={faStar}/><span>Artists</span>
                    </div>
                </span>
            </Link>

            <Link to="/albums" className={`w-full h-full flex justify-center items-center gap-2 cursor-pointer ${
                activeComponent === 'albums'
                    ? 'bg-SelectedMenuBgColor text-SelectedMenuTextColor'
                    : 'hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor'
            }`}>
                <span onClick={() => setActiveComponent('albums')}>
                    <div className="flex flex-col items-center pl-15 hover:font-bold">
                        <FontAwesomeIcon icon={faRecordVinyl}/><span>Albums</span>
                    </div>
                </span>
            </Link>

            <Link to="/tracks" className={`w-full h-full flex justify-center items-center gap-2 cursor-pointer ${
                activeComponent === 'tracks'
                    ? 'bg-SelectedMenuBgColor text-SelectedMenuTextColor'
                    : 'hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor'
            }`}>
                <span onClick={() => setActiveComponent('tracks')}>
                    <div className="flex flex-col items-center pl-15 hover:font-bold">
                        <FontAwesomeIcon icon={faMusic}/><span>Tracks</span>
                    </div>
                </span>
            </Link>

            <Link to="/newreview" className={`w-full h-full flex justify-center items-center gap-2 cursor-pointer ${
                activeComponent === 'newReview'
                    ? 'bg-SelectedMenuBgColor text-SelectedMenuTextColor'
                    : 'hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor'
            }`}>
                <span onClick={() => setActiveComponent('newReview')}>
                    <div className="flex flex-col items-center pl-15 hover:font-bold">
                        <FontAwesomeIcon icon={faPencil}/><span className="flex flex-nowrap">Write a review</span>
                    </div>
                </span>
            </Link>
        </div>
    );
};

MainSubMenuComponent.propTypes = {
    setActiveComponent: PropTypes.func.isRequired,
    activeComponent: PropTypes.string,
};

export default MainSubMenuComponent;