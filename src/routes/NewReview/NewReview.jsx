import {ToastContainer} from "react-toastify";
import ButtonReviewType from "../../components/Buttons/ButtonReviewType.jsx";
import ReviewFindArtistComponent from "../../components/review/reviewFindArtistComponent.jsx";
import ReviewFindAlbumComponent from "../../components/review/reviewFindAlbumComponent.jsx";
import ReviewFindTrackComponent from "../../components/review/reviewFindTrackComponent.jsx";
import {useState} from "react";

const NewReview = () => {

    const [activeComponent, setActiveComponent] = useState("");

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case "Artist":
                return <ReviewFindArtistComponent />;
            case "Album":
                return <ReviewFindAlbumComponent />;
            case "Track":
                return <ReviewFindTrackComponent />;
            default:
                return null;
        }
    };

    return (
        <div className="w-screen min-h-[60vh] flex flex-col justify-start pt-6 items-center">
            <ToastContainer />
            <div className="w-[95vw] md:w-4/5 p-6 bg-gray-300">
                <h2 className="font-semibold text-center my-4">Today I'd like to write a review about:</h2>

                <div className="flex justify-center">
                    <ButtonReviewType
                        buttonName="Artist"
                        onClick={() => setActiveComponent("Artist")}
                        isActive={activeComponent === "Artist"}
                    />
                    <ButtonReviewType
                        buttonName="Album"
                        onClick={() => setActiveComponent("Album")}
                        isActive={activeComponent === "Album"}
                    />
                    <ButtonReviewType
                        buttonName="Track"
                        onClick={() => setActiveComponent("Track")}
                        isActive={activeComponent === "Track"}
                    />
                </div>

                <div className="mt-6">
                    {renderActiveComponent()}
                </div>
            </div>
        </div>
    );
};
export default NewReview;