import React, { useEffect, useRef } from "react";
import Logo from '../../assets/img/logo.png';
import PropTypes from 'prop-types';
import MainSubMenuComponent from "./MainSubMenuComponent.jsx";
import SearchMenuComponent from "./SearchMenuComponent.jsx";
import UserMenuComponent from "./UserMenuComponent.jsx";
import {Link} from "react-router-dom";

const NavBarMainComponent = ({ setActiveComponent, activeComponent = null }) => {
    const mainMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mainMenuRef.current && !mainMenuRef.current.contains(event.target)) {
                setActiveComponent(null); // Deactivate MainSubMenuComponent
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setActiveComponent]);

    return (
        <div className="h-full w-full flex items-center divide-x-2 divide-solid">
            {/* Logo */}
            <div className="h-full basis-2/12 w-full flex items-center gap-5 bg-white">
                <Link to="/">
                    <span className="flex items-center pl-3 pr-3">
                        <img src={Logo} alt="Resenhando 2.0 Logo" className="max-h-14"/>
                    </span>
                </Link>
            </div>

            {/* Main Sub Menu */}
            <div className="h-full basis-5/12 flex items-center justify-center" ref={mainMenuRef}>
                <MainSubMenuComponent setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
            </div>

            {/* Search */}
            <div className="h-full basis-3/12 flex items-center"><SearchMenuComponent /></div>
            

            {/* User Configurations */}
            <div className="h-full basis-2/12 flex items-center"><UserMenuComponent /></div>
        </div>
    );
};

NavBarMainComponent.propTypes = {
    setActiveComponent: PropTypes.func.isRequired,
    activeComponent: PropTypes.string,
};
export default NavBarMainComponent;