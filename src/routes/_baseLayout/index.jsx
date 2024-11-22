import NavBar from "../../components/NavBar/NavBarMainComponent";
import Footer from "../../components/Footer/FooterComponent";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import MobileTopNavBar from "../../components/NavBar/MobileTopNavBar.jsx";

const _BaseLayout = () => {
    const [activeComponent, setActiveComponent] = useState('artists');

    return (
        <div className="flex flex-col h-screen w-screen">
            
            {/*Mobile Top Navbar*/}
            <div className="w-full bg-white md:hidden order-1 h-12">
                <MobileTopNavBar/>
            </div>
            
            {/* NAVBAR */}
            <div className="w-full bg-white md:relative fixed bottom-0 z-50 md:order-1 order-3 h-16">
                <NavBar setActiveComponent={setActiveComponent} activeComponent={activeComponent}/>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow w-full h-60vh order-2 pb-16 md:pb-0">
                <Outlet context={[activeComponent]}/>
            </div>

            {/* Footer */}
            <div
                className="flex flex-col justify-center items-center min-h-[24vh] md:min-h-[18vh] w-full bg-gray-800 order-3 md:order-3 pb-16 md:pb-0">
                <Footer/>
            </div>
            
        </div>
    );
};

export default _BaseLayout;
