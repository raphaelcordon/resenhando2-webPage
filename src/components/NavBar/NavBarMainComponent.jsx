import React, { useEffect, useRef } from "react";
import Logo from '../../assets/img/logo.png';
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
            <div className="h-full lg:w-1/6 flex items-center">
                <Link to="/">
                    <span className="flex items-center pl-3 pr-3">
                        <img src={Logo} alt="Resenhando 2.0 Logo" className="max-h-14" />
                    </span>
                </Link>
            </div>

            {/* Main Sub Menu */}
            <div className="h-full lg:w-4/6">
                <MainSubMenuComponent setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
            </div>

            {/* User Configurations */}
            <div className="h-full lg:w-1/6">
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
