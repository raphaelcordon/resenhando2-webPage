import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, loginUser } from "../../store/reducers/userReducer.js"; // Import loginUser
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faGear, faArrowRightToBracket, faBell } from "@fortawesome/free-solid-svg-icons";
import useGetAuthenticatedUser from "../../hooks/useGetAuthenticatedUser.jsx";
import { useCallback, useEffect } from "react";
import useLogout from "../../hooks/useLogout.jsx";
import truncateText from "../../hooks/common/truncateText.js";

const UserMenuComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.user.accessToken);
    const user = useSelector((state) => state.user.userData);
    const { getUser, error } = useGetAuthenticatedUser();
    const { logout } = useLogout();

    // Check localStorage and update Redux state
    useEffect(()=> {
        const localStorageToken = window.localStorage.getItem("resenhando:authToken");
        
        if (localStorageToken && !token) {
            dispatch(loginUser(localStorageToken));
        }
        if (localStorageToken && token && !user) {
            fetchUser();
        }
    }, [dispatch, token, user]);

    const fetchUser = async () => {
        await getUser();
    };
    
    return (
        <div className="h-full w-full flex justify-end">
            {!token || !user ? (
                <Link
                    to="/login"
                    className="flex items-center justify-end px-4 md:px-0 md:w-full hover:font-bold hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor">
                    <div className="flex flex-col items-center justify-end w-full">
                        <FontAwesomeIcon icon={faArrowRightToBracket} className="text-base md:text-lg" />
                        <span className="hidden md:block md:text-lg">Login or Register</span>
                        <span className="md:hidden text-xs">Login</span>
                    </div>
                </Link>
            ) : (
                // User authenticated
                <div className="w-full flex items-center justify-end gap-2 md:justify-around pr-1 md:pr-0">
                    
                    {/* Notification Icon */}
                    <div
                        className="flex flex-col items-center justify-center hover:bg-HoverLinksBgColor md:w-1/6 h-full cursor-pointer text-xl">
                        <FontAwesomeIcon icon={faBell} className="text-base md:text-lg"/>
                        <span className="md:hidden text-xs">Notifications</span>
                    </div>
                    
                    {/* User */}
                    <div
                        className="hidden md:flex flex-col items-center justify-center hover:bg-HoverLinksBgColor md:w-4/6 h-full cursor-pointer">
                        <FontAwesomeIcon icon={faGear} className="text-base md:text-lg" />
                        <span className="md:hidden lg:flex md:text-xs text-nowrap">{truncateText(user?.firstName + ' ' + user?.lastName, 15)}</span>
                    </div>

                    {/* Logout Icon */}
                    <div className="flex items-center justify-center md:w-2/6 h-full hover:bg-HoverLinksBgColor cursor-pointer">
                        <NavLink
                            to="/"
                            onClick={(e) => {
                                e.preventDefault();
                                logout();
                            }}
                        >
                            <div className="flex flex-col items-center justify-center h-full">
                                <FontAwesomeIcon icon={faRightFromBracket} />
                                <span className="text-xs md:text-base">Logout</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenuComponent;
