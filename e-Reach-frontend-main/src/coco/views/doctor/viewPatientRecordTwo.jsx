import React from 'react';
import {useNavigate} from "react-router-dom";
import "../../../coco/styles/doctor/viewPatientRecordTwo.css"

export const ViewPatientRecordTwo = () => {
    const patientRecordData =[
        { primaryCentre: 'Hospital A', dateCreated: '2023-09-27', lastUpdated: '10:30 AM', patientId: 1 },
        { primaryCentre: 'Clinic B', dateCreated: '2023-09-26', lastUpdated: '02:45 PM', patientId: 2 },
        { primaryCentre: 'Medical Center C', dateCreated: '2023-09-25', lastUpdated: '09:15 AM', patientId: 3 },
        { primaryCentre: 'Urgent Care D', dateCreated: '2023-09-24', lastUpdated: '11:00 AM', patientId: 4 },
    ];

    const navigateToRecords = useNavigate();
    const handleButtonClick =()=>{
        navigateToRecords("/doctorsTab-patientsTab-record-one")
    }

    return(
        <div className= 'major-records-frame'>
            <div className= 'records-browse-navigate-button'>
                <div className= 'records-text'>
                    <h3>View Patient Records</h3>
                </div>
                <div className= 'browse-all-records-button'>
                    <button onClick={handleButtonClick} id="browse-all-appoint-button-doc">Browse All</button>
                </div>
            </div>
            <table className= 'records-table'>
                <thead>
                <tr>
                    <th >Primary Centre</th>
                    <th >Date Created</th>
                    <th >Last Updated</th>
                    <th >Patient Id</th>
                </tr>
                </thead>
                <tbody>
                {patientRecordData.map((patientRecordData, index) => (
                    <tr key={index}>
                        <td >{patientRecordData.primaryCentre}</td>
                        <td >{patientRecordData.dateCreated}</td>
                        <td >{patientRecordData.lastUpdated}</td>
                        <td >{patientRecordData.patientId}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}