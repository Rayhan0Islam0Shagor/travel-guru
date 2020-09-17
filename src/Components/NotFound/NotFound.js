import React from 'react';
import TopBar from '../TopBar/TopBar';

const NotFound = () => {
    return (
        <div className="head">
            <TopBar />
            <div className="custom-div"></div>
            <div style={{ color: '#f7e7bd' }} className="text-center mt-5">
                <h1>404 ERROR! 😕</h1>
                <h3>SORRY! PAGE NOT FOUND ☹️</h3>
            </div>
        </div>
    );
};

export default NotFound;