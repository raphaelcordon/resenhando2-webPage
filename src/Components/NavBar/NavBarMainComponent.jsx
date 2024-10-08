import ButtonMenuBurger from "../Buttons/ButtonMenuBurger.jsx";
import MainSubMenuComponent from "./MainSubMenuComponent.jsx";
import SearchMenuComponent from "./SearchMenuComponent.jsx";
import ConfMenuComponent from "./ConfMenuComponent.jsx";
import UserMenuComponent from "./UserMenuComponent.jsx";

const NavBarMainComponent = ({ setActiveComponent, activeComponent }) => {
    
    return (
        <div className="h-full w-full flex items-center divide-x-2 divide-solid">

            {/* Button & Logo */}
            <div className="h-full basis-3/12 w-full flex items-center gap-5 bg-white">
                <span className="h-full">
                    <ButtonMenuBurger />
                </span>
                <span className="flex items-center">
                    <p>Logo</p>
                </span>
            </div>

            {/* Main Sub Menu */}
            <div className="h-full basis-4/12 flex items-center justify-center">
                <MainSubMenuComponent setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
            </div>

            {/* Search */}
            <div className="h-full basis-2/12 flex items-center"><SearchMenuComponent /></div>

            {/* Configuration Buttons */}
            <div className="h-full basis-1/12 flex items-center"><ConfMenuComponent /></div>

            {/* User Configurations */}
            <div className="h-full basis-2/12 flex items-center"><UserMenuComponent /></div>
        </div>
    )
}
export default NavBarMainComponent;