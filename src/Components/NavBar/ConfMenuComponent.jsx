import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faBell} from "@fortawesome/free-solid-svg-icons";

const ConfMenuComponent = () => {
    return (
        <div className="h-full w-full flex divide-x-2 divide-solid">
            <span className="h-full w-full flex justify-center items-center text-2xl text-blue-400 hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor">
                <FontAwesomeIcon icon={faGear}/>
            </span>
            <span className="h-full w-full flex justify-center items-center text-2xl text-blue-400 hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor">
                <FontAwesomeIcon icon={faBell}/>
            </span>
        </div>
    )
}
export default ConfMenuComponent;