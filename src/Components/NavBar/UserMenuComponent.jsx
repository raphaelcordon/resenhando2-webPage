import userMenuImage from '../../assets/img/user-menu.png';
const UserMenuComponent = () => {
    
    return (
        <div className="h-full w-full px-4 flex justify-start items-center gap-4 hover:bg-HoverLinksBgColor hover:text-HoverLinksTextColor">
            <span>
                <img src={userMenuImage} alt="Default image for non logged users" className="h-8 w-8" />
            </span>
            <span className="font-bold">Hi, user</span>
        </div>
    )
}
export default UserMenuComponent;