import React, { useEffect, useRef } from "react";
import logo from '../../assets/img/logo.png';
import PropTypes from 'prop-types';
import ButtonMenuBurger from "../Buttons/ButtonMenuBurger.jsx";
import MainSubMenuComponent from "./MainSubMenuComponent.jsx";
import SearchMenuComponent from "./SearchMenuComponent.jsx";
import ConfMenuComponent from "./ConfMenuComponent.jsx";
import UserMenuComponent from "./UserMenuComponent.jsx";

const NavBarMainComponent = ({ setActiveComponent, activeComponent }) => {

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

            {/* Button & Logo */}
            <div className="h-full basis-3/12 w-full flex items-center gap-5 bg-white">
                <span className="h-full">
                    <ButtonMenuBurger />
                </span>
                <span className="flex items-center">
                    <img src={logo} alt="Resenhando 2.0 Logo" className="max-h-14"/>
                </span>
            </div>

            {/* Main Sub Menu */}
            <div className="h-full basis-4/12 flex items-center justify-center" ref={mainMenuRef}>
                <MainSubMenuComponent setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
            </div>

            {/* Search */}
            <div className="h-full basis-2/12 flex items-center"><SearchMenuComponent /></div>

            {/* Configuration Buttons */}
            <div className="h-full basis-1/12 flex items-center"><ConfMenuComponent /></div>

            {/* User Configurations */}
            <div className="h-full basis-2/12 flex items-center"><UserMenuComponent /></div>
        </div>
    );
};

NavBarMainComponent.propTypes = {
    setActiveComponent: PropTypes.func.isRequired,
    activeComponent: PropTypes.string.isRequired,
};

export default NavBarMainComponent;
