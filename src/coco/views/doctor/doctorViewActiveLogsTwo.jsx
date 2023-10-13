import React from 'react';
import {useNavigate} from "react-router-dom";
import "../../../coco/styles/doctor/doctorViewActiveLogsTwo.css"



export const ActiveLogsTableTwo = ({activeLogsData}) => {

    console.log("here is active logs data:::> ", activeLogsData)
    const navigateToLogs = useNavigate();
    const handleButtonClick =()=>{
        navigateToLogs("/doctor-active-logs-one")
    }
    return(
        <div className= 'major-log-frame'>
            <div className= 'log-browse-navigate-button'>
                <div className= 'log-text'>
                    <h3>Active Logs</h3>
                </div>
                <div className= 'browse-all-log-button'>
                    <button onClick={handleButtonClick} id="browse-all-log-button-doc">Browse All</button>
                </div>
            </div>
            <table className= 'log-table'>
                <thead>
                <tr>
                    <th >Date</th>
                    <th>Time</th>
                    <th >Patient Id</th>
                </tr>
                </thead>
                <tbody>
                {activeLogsData.map((activeLog, index) => (
                    <tr key={index}>
                        <td >{activeLog.dateCreated}</td>
                        <td >{activeLog.timeCreated}</td>
                        <td >{activeLog.patientIdentificationNumber}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
};

