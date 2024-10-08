import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar, faRecordVinyl, faMusic } from '@fortawesome/free-solid-svg-icons'

const MainSubMenuComponent = () => {
    
    return (
        <div className="w-full h-full flex justify-around">
            <span className="w-full h-full flex justify-center items-center bg-SelectedMenuBgColor text-SelectedMenuTextColor gap-2 hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor">
                <FontAwesomeIcon icon={faGuitar} /> Artists
            </span>
            <span className="w-full h-full flex justify-center items-center gap-2 hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor">
                <FontAwesomeIcon icon={faRecordVinyl} /> Albuns
            </span>
            <span className="w-full h-full flex justify-center items-center gap-2 hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor">
                <FontAwesomeIcon icon={faMusic} /> Musics
            </span>
        </div>
    )
}
export default MainSubMenuComponent;