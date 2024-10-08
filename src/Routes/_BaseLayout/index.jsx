import NavBar from "../../Components/NavBar/NavBarMainComponent"
import Footer from "../../Components/Footer/FooterComponent"
import {Outlet} from "react-router-dom";
const _BaseLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <div className="h-16 p-0 m-0">
                <NavBar />
            </div>

            {/* Main Content Area */}
            <div className="flex-grow">
                <Outlet />
            </div>

            {/* Footer */}
            <div className="h-16 bg-gray-800">
                <Footer />
            </div>
        </div>
    );
};

export default _BaseLayout;