import React from 'react';
import "../../styles/pharmacistFolder/pharmacistPopUp.css"
const PopUp = ({ isOpen, onClose, log }) => {
    if (!isOpen || !log){
        return null;
    }
    return (
        <>
            <div className="overlay"></div>
         <div className={`popup ${isOpen ? 'open' : 'closed'}`}>
            <div className="popup-content">
                <h2>Log Info</h2>
                <div>
                    <p>Date: {log.Date}</p>
                    <p>Name: {log.Name}</p>
                    <p>Result: {log.Result}</p>
                </div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
        </>
    );
};

export default PopUp;
