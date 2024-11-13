import React, { useEffect, useRef } from "react";
import Logo from '../../assets/img/logo.png';
import LogoMobile from '../../assets/img/logoMobile.png';
import PropTypes from 'prop-types';
import MainSubMenuComponent from "./MainSubMenuComponent.jsx";
import UserMenuComponent from "./UserMenuComponent.jsx";
import { Link } from "react-router-dom";

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
        <div className="h-full w-full flex items-center justify-between">
            {/* Logo */}
            <div className="hidden h-full w-3/12 md:w-1/6 md:flex items-center">
                <Link to="/">
                    <span className="flex items-center pl-3 pr-3">
                        <img src={Logo} alt="Resenhando 2.0 Logo" className="hidden md:flex md:max-h-14" />
                    </span>
                </Link>
            </div>

            {/* Main Sub Menu */}
            <div className="h-full w-4/6">
                <MainSubMenuComponent setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
            </div>

            {/* User Configurations */}
            <div className="h-full w-2/6 md:w-1/6">
                <UserMenuComponent />
            </div>
        </div>
    );
};

NavBarMainComponent.propTypes = {
    setActiveComponent: PropTypes.func.isRequired,
    activeComponent: PropTypes.string,
};

export default NavBarMainComponent;
