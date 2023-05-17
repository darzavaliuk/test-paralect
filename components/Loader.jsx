import React from "react";

const Loader = ({ isLoading }) => {
    return (
        <div className={`loader ${isLoading ? "is-loading" : ""}`}>
            <div className="loader-dot"></div>
            <div className="loader-dot"></div>
            <div className="loader-dot"></div>
        </div>
    );
};

export default Loader;