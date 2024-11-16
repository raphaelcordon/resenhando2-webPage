import LogoFooter from '../../assets/img/logoFooter.png';
import UserMenuComponent from "./UserMenuComponent.jsx";
import { Link } from "react-router-dom";
import SearchMenuComponent from "./SearchMenuComponent.jsx";

const MobileTopNavBar = () => {
    
    return (
        <div className="h-full w-full flex items-center justify-between">
            {/* Logo */}
            <div className="h-full w-1/6 flex items-center bg-gray-300">
                <Link to="/">
                    <img src={LogoFooter} alt="Resenhando 2.0 Logo" className="w-ful h-auto"/>
                </Link>
            </div>

            {/* Search */}
            <div className="h-full w-3/6 flex items-center justify-start">
                <SearchMenuComponent/>
            </div>

            {/* User Configurations */}
            <div className="h-full w-2/6">
                <UserMenuComponent/>
            </div>
        </div>
    );
};

export default MobileTopNavBar;
