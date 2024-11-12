import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, loginUser } from "../../store/slices/userReducer.js"; // Import loginUser
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faGear, faArrowRightFromBracket, faBell } from "@fortawesome/free-solid-svg-icons";
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
        <div className="h-full w-full flex justify-around">
            {!token || !user ? (
                <Link
                    to="/login"
                    className="flex justify-around items-center w-full hover:font-bold hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor"
                >
                    <div className="flex flex-col items-center">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        Login or Register
                    </div>
                </Link>
            ) : (
                // User authenticated
                <div className="flex justify-around items-center w-full">
                    <div className="flex flex-col items-center justify-center hover:bg-HoverLinksBgColor h-full px-4 cursor-pointer text-xl">
                        <FontAwesomeIcon icon={faBell} />
                    </div>

                    <div className="flex flex-col items-center justify-center hover:bg-HoverLinksBgColor h-full px-4 cursor-pointer">
                        <FontAwesomeIcon icon={faGear} />
                        {truncateText(user?.firstName + ' ' + user?.lastName, 15)}
                    </div>

                    <div className="flex items-center h-full hover:bg-HoverLinksBgColor px-4 cursor-pointer">
                        <NavLink
                            to="/"
                            onClick={(e) => {
                                e.preventDefault();
                                logoutHandler();
                            }}
                        >
                            <div className="flex flex-col items-center justify-center h-full">
                                <FontAwesomeIcon icon={faRightFromBracket} />
                                <span>Logout</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenuComponent;
