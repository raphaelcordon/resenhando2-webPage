const ButtonSubmitDefault = ({ buttonName, type = "button", disabled = false }) => {
    return (
        <div className="">
            <button
                type={type}
                disabled={disabled}
                className={`px-4 py-2 bg-blue-500 text-white rounded ${
                    disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-800"
                }`}
            >
                {buttonName}
            </button>
        </div>
    );
};

export default ButtonSubmitDefault;