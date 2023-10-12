import {DoctorSideBar} from "./doctorSideBar";
import {SearchBar} from "./doctorSearchBar";
import React, {useState} from "react";
import "../../../coco/styles/doctor/viewPatientAppointmentOne.css"
import ViewLog from "../../../coco/assets/icons/doc-view-log.svg"
import AppointmentPopUp from "./appointmentPopUp";

export const PatientAppointmentOne = () => {
    const [appointButtonPopUp, setAppointButtonPopUp] = useState(false);
    const [selectedAppointmentLog, setSelectedAppointmentLog] = useState(null);

    const openAppointPopUp = (patientAppointmentData) => {
        setSelectedAppointmentLog(patientAppointmentData);
        setAppointButtonPopUp(true);
    }

    const closeAppointPopUp = () => {
        setSelectedAppointmentLog(null);
        setAppointButtonPopUp(false);
    }
    const patientAppointmentData = [
        {dateTime: '2023-09-27T10:00:00', patientId: 1},
        {dateTime: '2023-09-26T15:30:00', patientId: 2},
        {dateTime: '2023-09-25T08:15:00', patientId: 3},
    ];

    return(
        <div className="Doc-Appoint-Main-Frame">
            <div className="doc-Appoint-side-bar-hold">
                <DoctorSideBar/>
            </div>
            <div className="doc-Appoint-second-side">
                <div className="doc-search-bar-hold">
                    <SearchBar/>
                </div>
                <div className="doc-Appoint-details-holder">
                    <div className="Appoint-left-profile">
                        <div className="Appoint-title" >
                            <h2>Appointment</h2>
                            <input
                                type="text"
                                className="doc-appoint-search-bar"
                                placeholder="search..."
                                aria-label= "Search"
                                // value={searchQuery}
                                // onChange={(e)=> setSearchQuery(e.target.value)}
                            />
                            <button type="button" className="doc--appoint-search-button">
                                Search
                            </button>
                        </div>
                        <table className= 'Appoint-table'>
                            <thead>
                            <tr>
                                <th >Date and Time</th>
                                <th >Patient Id</th>
                                <th >Actions</th>
                            </tr>
                            </thead>
                            {/* <tbody>
                            {patientAppointmentData.map((patientAppointmentData, index) => (
                                <tr key={index}>
                                    <td >{patientAppointmentData.dateTime}</td>
                                    <td >{patientAppointmentData.patientId}</td>
                                    <td >
                                        <img onClick={() => (openAppointPopUp(patientAppointmentData))}
                                             id="action-buttons" src={ViewLog} alt="view">
                                        </img>
                                    </td>
                                </tr>
                            ))}
                            </tbody> */}
                        </table>
                    </div>
                </div>
            </div>
            <AppointmentPopUp isOpen={appointButtonPopUp} isClose={closeAppointPopUp} patientAppointmentData={selectedAppointmentLog}/>
        </div>
    )
};
