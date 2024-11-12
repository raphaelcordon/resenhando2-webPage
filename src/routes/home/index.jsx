import MainArtistsComponent from "../../components/Main/MainArtistsComponent.jsx";
import MainAlbumsComponent from "../../components/Main/MainAlbumsComponent.jsx";
import MainTracksComponent from "../../components/Main/MainTracksComponent.jsx";
import { useOutletContext } from "react-router-dom";
import NewReview from "../NewReview/NewReview.jsx";

const Home = () => {
    const [activeComponent] = useOutletContext();

    const renderComponent = () => {
        switch (activeComponent) {
            case 'artists':
                return <MainArtistsComponent />;
            case 'albums':
                return <MainAlbumsComponent />;
            case 'tracks':
                return <MainTracksComponent />;
            case 'newReview':
                return <NewReview />;
            default:
                return <MainArtistsComponent />;
        }
    };

    return (
        <div className="flex justify-center w-full min-h-80vh bg-gray-100">
            <div>{renderComponent()}</div>
        </div>
    );
};

export default Home;