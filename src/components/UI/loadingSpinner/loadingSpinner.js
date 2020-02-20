import React from 'react';
import './loadingSpinner.scss'

const LoadingSpinner = () => {
    return <div className="loading-spinner">
                <div className="loading-spinner__circle"></div>
                <div className="loading-spinner__circle"></div>
                <div className="loading-spinner__circle"></div>
           </div>;
}

export default LoadingSpinner;