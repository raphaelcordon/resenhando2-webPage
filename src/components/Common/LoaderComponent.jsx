import React from "react";

const LoaderComponent = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="relative w-20 h-20 flex items-center justify-center">
                {/* The spinning circular border */}
                <div className="absolute inset-0 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
                {/* The centered image */}
                <img src="/loadingPencil.png" alt="Loading" className="w-14 h-14" />
            </div>
        </div>
    );
};

export default LoaderComponent;
