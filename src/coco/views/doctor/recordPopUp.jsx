import React from 'react';
import "../../../coco/styles/doctor/recordPopUp.css"

const RecordPopUp = ({isOpen, isClose, patientRecordData}) => {
    if(!isOpen || !patientRecordData){
        return null
    }
    return(
        <>
            <div className="record-overlay"></div>
            <div className={`recordPopUp ${isOpen ? 'open' : 'closed'}`}>
                <div>
                    <h1>Patient Record</h1>
                    <div>
                        <p> Primary Center: {patientRecordData.primaryCentre}</p>
                        <p> Date Created: {patientRecordData.dateCreated}</p>
                        <p> Last Updated: {patientRecordData.lastUpdated}</p>
                        <p> Patient Id: {patientRecordData.patientId}</p>
                        {/*<input*/}
                        {/*    type= "text"*/}
                        {/*    placeholder= "input logs here"*/}
                        {/*/>*/}
                    </div>
                    <button onClick={isClose}>Close</button>
                </div>
            </div>
        </>
    )
};
export default RecordPopUp;