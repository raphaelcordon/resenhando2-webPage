import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGuitar, faRecordVinyl, faMusic } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

const MainSubMenuComponent = ({ setActiveComponent, activeComponent = null }) => {
    return (
        <div className="w-full h-full flex justify-around">
            
            <span onClick={() => setActiveComponent('artists')}
                  className={`w-full h-full flex justify-center items-center gap-2 cursor-pointer ${
                      activeComponent === 'artists'
                          ? 'bg-SelectedMenuBgColor text-SelectedMenuTextColor'
                          : 'hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor'
                  }`}><Link to="/"><FontAwesomeIcon icon={faGuitar} /> Artists</Link>
            </span>

            <span onClick={() => setActiveComponent('albums')}
                  className={`w-full h-full flex justify-center items-center gap-2 cursor-pointer ${
                      activeComponent === 'albums'
                          ? 'bg-SelectedMenuBgColor text-SelectedMenuTextColor'
                          : 'hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor'
                  }`}><Link to="/"><FontAwesomeIcon icon={faRecordVinyl} /> Albums</Link>
            </span>

            <span onClick={() => setActiveComponent('tracks')}
                  className={`w-full h-full flex justify-center items-center gap-2 cursor-pointer ${
                      activeComponent === 'tracks'
                          ? 'bg-SelectedMenuBgColor text-SelectedMenuTextColor'
                          : 'hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor'
                  }`}><Link to="/"><FontAwesomeIcon icon={faMusic} /> Tracks</Link>
            </span>

        </div>
    );
};

MainSubMenuComponent.propTypes = {
    setActiveComponent: PropTypes.func.isRequired,
    activeComponent: PropTypes.string,
};

export default MainSubMenuComponent;