import React from 'react';
import "../../../coco/styles/doctor/appointmentPopUp.css"
const AppointmentPopUp = ({isOpen, isClose, patientAppointmentData}) => {
    if(!isOpen || !patientAppointmentData){
        return null
    }
    return(
        <>
            <div className="appoint-overlay"></div>
            <div className={`appointmentPopUp ${isOpen ? 'open' : 'closed'}`}>
                <div>
                    <h1>Appointment Information</h1>
                    <div>
                        <p> Date and Time: {patientAppointmentData.dateTime}</p>
                        <p> Patient Id: {patientAppointmentData.patientId}</p>
                        <input
                            type= "text"
                            placeholder= "input logs here"
                        />
                    </div>
                    <button onClick={isClose}>Close</button>
                </div>
            </div>
        </>
    )
};

export default AppointmentPopUp;

