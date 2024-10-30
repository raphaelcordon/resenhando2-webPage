import MainArtistsComponent from "../../components/Main/MainArtistsComponent.jsx";
import MainAlbumsComponent from "../../components/Main/MainAlbumsComponent.jsx";
import MainMusicsComponent from "../../components/Main/MainMusicsComponent.jsx";
import { useOutletContext } from "react-router-dom";

const Home = () => {
    const [activeComponent] = useOutletContext();

    const renderComponent = () => {
        switch (activeComponent) {
            case 'artists':
                return <MainArtistsComponent />;
            case 'albums':
                return <MainAlbumsComponent />;
            case 'musics':
                return <MainMusicsComponent />;
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