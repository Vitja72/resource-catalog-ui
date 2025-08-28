import React from "react";

const LoadingSpinner = ( {label = "Wird geladen..." } ) => {
    return (
        <div className="flex justify-center items-center py-20 bg-gray-50 rounded-2xl shadow-inner-sm">
                <svg className="animate-spin h-10 w-10 text-main-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>

                </svg>
                <p className="ml-4 text-xl text-gray-700 font-medium">{label}</p>
            </div>

    );
};

export default LoadingSpinner;