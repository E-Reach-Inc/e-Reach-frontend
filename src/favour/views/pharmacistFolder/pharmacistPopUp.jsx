import React, { useState } from 'react';
import "../../styles/pharmacistFolder/pharmacistPopUp.css"

const PopUp = ({ isOpen, onClose, log, prescriptions }) => {
     const [prescriptionDetailsVisible, setPrescriptionDetailsVisible] = useState([]);
    if (!isOpen || !log || !prescriptions) {
        return null;
    }

    const addPrescriptionToDispensed = (event) => {
        event.preventDefault();

    }
    const togglePrescriptionDetails = (index) => {
        const updatedVisibility = [...prescriptionDetailsVisible];
        updatedVisibility[index] = !updatedVisibility[index];
        setPrescriptionDetailsVisible(updatedVisibility);
    };
 
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

                    <h2>Prescriptions</h2>
                    {prescriptions.map((prescription, index) => (
                        <div key={index}>
                            <div className="namePrescriptionHolder">
                              <h4 id='prescriptionText'>{prescription.medicationName}</h4>
                              <input 
                                    id={prescription.patientIdentificationNumber} 
                                    value={prescription.medicationName} type="checkbox" 
                                    className={"custom-checkbox"} 
                                    onChange={addPrescriptionToDispensed}
                                    />
                              {/* <label htmlFor={`checkbox${index}`}></label> */}
                              <button id='button' onClick={() => togglePrescriptionDetails(index)}>View Dosage</button>
                             </div>
                              {prescriptionDetailsVisible[index] && (
                                <>
                                 <p>Dosage: {prescription.dosage}</p>
                                 <p>DosageFrequency: {prescription.dosageFrequency}</p>
                                 <p>StartDate: {prescription. startDate}</p>
                                 <p>PrescriptionDate: {prescription.prescriptionDate}</p>
                                </>
                            )}
                        </div>
                    ))}
                    <button id='close' onClick={onClose}>Close</button>
                </div>
            </div>
        </>
    );
};

export default PopUp;