import ButtonNavBarLoginRegister from "../Buttons/ButtonNavBarLoginRegister.jsx";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { logoutUser} from "../../store/slices/userReducer.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {useEffect} from "react";
import UseGetAuthenticatedUser from "../../hooks/useGetAuthenticatedUser.js";

const UserMenuComponent = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.userData);
    const getUser = UseGetAuthenticatedUser();
    console.log(getUser);

    const logoutHandler = () => {
        dispatch(logoutUser());
        window.localStorage.removeItem("token");
        navigate("/");
    };
    
    return (
        <div className="h-full w-full px-4 flex justify-center items-center gap-4 hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor cursor-pointer">
            {!user ? (
                <ButtonNavBarLoginRegister />
            ) : (
                <NavLink to="/"
                    onClick={(e) => {
                        e.preventDefault();
                        logoutHandler();
                    }}>
                    <div className="flex flex-col items-center pl-15 hover:font-bold mx-2 my-2 md:mx-10 lg:mx-8 lg:my-0 xl:mx-12">
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <span>Logout</span>
                    </div>
                </NavLink>
            )
            }
        </div>
    )
}
export default UserMenuComponent;