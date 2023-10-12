
import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import "../../../coco/styles/doctor/doctorViewActiveLogsTwo.css"

export const ActiveLogsTableTwo = () => {

    // useEffect(()=>{
    //     const databaseRef ´=
    // }, [])

    const activeLogsData = [
        { date: '2023-09-27', time: '10:00 AM', patientId: 1 },
        { date: '2023-09-26', time: '03:30 PM', patientId: 2 },
    ];

    const navigateToLogs = useNavigate();
    const handleButtonClick =()=>{
        navigateToLogs("/doctorsTab-active-logs-one")
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
                {activeLogsData.map((activeLogsData, index) => (
                    <tr key={index}>
                        <td >{activeLogsData.date}</td>
                        <td >{activeLogsData.time}</td>
                        <td >{activeLogsData.patientId}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
};

