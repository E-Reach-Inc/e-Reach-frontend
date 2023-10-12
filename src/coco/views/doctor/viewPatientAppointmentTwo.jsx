import React from 'react';
import {useNavigate} from "react-router-dom";
import "../../../coco/styles/doctor/viewPatientAppointmentTwo.css"

export const PatientAppointmentTwo = () => {
    const patientAppointmentData = [
        { dateTime: '2023-09-27T10:00:00', patientId: 1 },
        { dateTime: '2023-09-26T15:30:00', patientId: 2 },
        { dateTime: '2023-09-25T08:15:00', patientId: 3 },
    ];
    const navigateToAppointments = useNavigate();
    const handleButtonClick =()=>{
        navigateToAppointments("/doctor-patient-appointment-one")
    }

    return(
        <div className= 'major-appoint-frame'>
            <div className= 'appoint-browse-navigate-button'>
                <div className= 'appoint-text'>
                    <h3>Appointment</h3>
                </div>
                <div className= 'browse-all-appoint-button'>
                    <button onClick={handleButtonClick} id="browse-all-appoint-button-doc">Browse All</button>
                </div>
            </div>
            <table className= 'appoint-table'>
                <thead>
                <tr>
                    <th >Date and Time</th>
                    <th >Patient Id</th>
                </tr>
                </thead>
                {/* <tbody>
                {patientAppointmentData.map((patientAppointmentData, index) => (
                    <tr key={index}>
                        <td >{patientAppointmentData.dateTime}</td>
                        <td >{patientAppointmentData.patientId}</td>
                    </tr>
                ))}
                </tbody> */}
            </table>
        </div>
    )
}