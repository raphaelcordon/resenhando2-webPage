import NavBar from "../../Components/NavBar/NavBarMainComponent";
import Footer from "../../Components/Footer/FooterComponent";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const _BaseLayout = () => {
    const [activeComponent, setActiveComponent] = useState('artists');

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <div className="h-16 p-0 m-0">
                <NavBar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
            </div>

            {/* Main Content Area */}
            <div className="flex-grow min-w-max min-h-80vh">
                <Outlet context={[activeComponent]} />
            </div>

            {/* Footer */}
            <div className="flex flex-col justify-center items-center min-h-20vh bg-gray-800">
                <Footer />
            </div>
        </div>
    );
};

export default _BaseLayout;
