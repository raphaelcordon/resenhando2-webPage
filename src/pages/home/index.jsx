import MainArtistsComponent from "../../components/main/mainArtistsComponent.jsx";
import MainAlbumsComponent from "../../components/main/mainAlbumsComponent.jsx";
import MainTracksComponent from "../../components/main/mainTracksComponent.jsx";
import { useOutletContext } from "react-router-dom";
import NewReview from "../newReview/index.jsx";
import useFetchAllReviewsOnLoading from "../../hooks/useFetchAllReviewsOnLoading";
import {useEffect} from "react";

export default function Home() {
    const [activeComponent] = useOutletContext();
    const fetchAllReviewsOnLoading = useFetchAllReviewsOnLoading();
    
    useEffect(() => {
      fetchAllReviewsOnLoading();  
    },[])

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