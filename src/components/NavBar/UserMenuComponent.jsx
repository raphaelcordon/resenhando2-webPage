import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, loginUser } from "../../store/slices/userReducer.js"; // Import loginUser
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faGear, faArrowRightToBracket, faBell } from "@fortawesome/free-solid-svg-icons";
import useGetAuthenticatedUser from "../../hooks/useGetAuthenticatedUser.js";
import { useCallback, useEffect } from "react";

const UserMenuComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.user.accessToken);
    const user = useSelector((state) => state.user.userData);
    const { getUser, error } = useGetAuthenticatedUser();

    // Check localStorage and update Redux state
    useEffect(() => {
        const localToken = window.localStorage.getItem("resenhando:authToken");
        if (localToken && !token) {
            dispatch(loginUser(localToken));
        }
    }, [dispatch, token]);

    const fetchUser = useCallback(async () => {
        if (token && !user) {
            try {
                await getUser();
            } catch (err) {
                console.error("Failed to fetch user data:", err);
            }
        }
    }, [getUser, token, user]);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    const truncateText = (text, limit) =>
        text.length > limit ? `${text.substring(0, limit)}...` : text;

    const logoutHandler = () => {
        dispatch(logoutUser());
        window.localStorage.removeItem("resenhando:authToken");
        navigate("/");
    };

    return (
        <div className="h-full w-full flex justify-end pr-2">
            {!token || !user ? (
                <Link
                    to="/login"
                    className="flex items-center w-20 md:w-full hover:font-bold hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor">
                    <div className="flex flex-col items-center justify-end w-full">
                        <FontAwesomeIcon icon={faArrowRightToBracket} className="text-base md:text-lg" />
                        <span className="hidden md:block md:text-lg">Login or Register</span>
                        <span className="md:hidden text-xs">Login</span>
                    </div>
                </Link>
            ) : (
                // User authenticated
                <div className="w-full flex items-center justify-end gap-3 md:justify-around">
                    {/* Notification Icon */}
                    <div
                        className="flex flex-col items-center justify-center hover:bg-HoverLinksBgColor h-full md:px-4 cursor-pointer text-xl">
                        <FontAwesomeIcon icon={faBell} className="text-base md:text-lg"/>
                        <span className="md:hidden text-xs">Notifications</span>
                    </div>

                    <div
                        className="hidden md:flex flex-col items-center justify-center hover:bg-HoverLinksBgColor h-full px-4 cursor-pointer">
                        <FontAwesomeIcon icon={faGear} className="text-base md:text-lg" />
                        <span className="md:flex md:text-lg">{truncateText(user?.firstName + ' ' + user?.lastName, 15)}</span>
                    </div>

                    {/* Logout Icon */}
                    <div className="flex items-center h-full hover:bg-HoverLinksBgColor cursor-pointer">
                        <NavLink
                            to="/"
                            onClick={(e) => {
                                e.preventDefault();
                                logoutHandler();
                            }}
                        >
                            <div className="flex flex-col items-center justify-center h-full">
                                <FontAwesomeIcon icon={faRightFromBracket} />
                                <span className="text-xs md:text-lg">Logout</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenuComponent;
