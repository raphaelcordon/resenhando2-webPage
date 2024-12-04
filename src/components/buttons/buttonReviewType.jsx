const ButtonReviewType = ({ buttonName, onClick, isActive }) => {
    return (
        <button
            onClick={onClick}
            className={`px-8 md:px-12 py-1 text-white ${
                isActive ? "bg-blue-500" : "bg-gray-500"
            } hover:bg-blue-400`}
        >
            {buttonName}
        </button>
    );
};

export default ButtonReviewType;
