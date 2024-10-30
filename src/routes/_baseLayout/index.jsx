import NavBar from "../../components/NavBar/NavBarMainComponent";
import Footer from "../../components/Footer/FooterComponent";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const _BaseLayout = () => {
    const [activeComponent, setActiveComponent] = useState('artists');

    return (
        <div className="flex flex-col min-h-screen w-screen">
            {/* Header */}
            <div className="h-16 p-0 m-0 w-full">
                <NavBar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
            </div>

            {/* Main Content Area */}
            <div className="flex-grow w-full min-h-80vh">
                <Outlet context={[activeComponent]} />
            </div>

            {/* Footer */}
            <div className="flex flex-col justify-center items-center min-h-20vh w-full bg-gray-800">
                <Footer />
            </div>
        </div>
    );
};

export default _BaseLayout;
