import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const SearchMenuComponent = () => {
    return (
        <div className="w-full flex justify-start gap-3 px-4">
            <span><FontAwesomeIcon icon={faMagnifyingGlass}/></span>
            <span className="flex-grow">
                <form className="w-full">
                    <input 
                        type="text" 
                        name="search" 
                        id="search" 
                        placeholder="Search is not implemented yet..."
                        className="w-full" />
                </form>
            </span>
        </div>
    )
}
export default SearchMenuComponent;