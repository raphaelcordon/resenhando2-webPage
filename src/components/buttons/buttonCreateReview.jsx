const ButtonCreateReview = ({ buttonName, onClick, isActive }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full md:px-12 py-3 text-white cursor-pointer ${
                isActive ? "bg-blue-500" : "bg-gray-500"
            } hover:bg-blue-400`}
        >
            {buttonName}
        </button>
    );
};

export default ButtonCreateReview;