import React, {useState} from "react";
import {DoctorSideBar} from "./doctorSideBar";
import {SearchBar} from "./doctorSearchBar";
import "../../../coco/styles/doctor/doctorViewActiveLogsOne.css"
import ViewLog from "../../../coco/assets/icons/doc-view-log.svg"
import EditLog from "../../../coco/assets/icons/doc-edit-log.svg"
import ActiveLogPopUp from "./activeLogPopUp";

export const ActiveLogsTableOne = () => {
    const [activeLogsButtonPopUp, setActiveLogsButtonPopUp] = useState(false);
    const [selectedActiveLogs, setSelectedActiveLogs] = useState(null);

    const openActiveLogsPopUp = (activeLogsData) => {
        setSelectedActiveLogs(activeLogsData);
        setActiveLogsButtonPopUp(true);
    }

    const closeActiveLogsPopUp = () => {
        setSelectedActiveLogs(null);
        setActiveLogsButtonPopUp(false);
    }
    const activeLogsData = [
        { date: '2023-09-27', time: '10:00 AM', patientId: 1 },
        { date: '2023-09-26', time: '03:30 PM', patientId: 2 },
    ];

    return(
        <div className="Doc-Log-Main-Frame">
            <div className="doc-log-side-bar-hold">
                <DoctorSideBar/>
            </div>
            <div className="doc-log-second-side">
                <div className="doc-search-bar-hold">
                    <SearchBar/>
                </div>
                <div className="doc-log-details-holder">
                    <div className="log-left-profile">
                        <div className="log-title" >
                            <h2>Active Logs</h2>
                        </div>
                        <table className= 'log-table2'>
                            <thead>
                            <tr>
                                <th >Date</th>
                                <th>Time</th>
                                <th >Patient Id</th>
                                <th >Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {activeLogsData.map((activeLogsData, index) => (
                                <tr key={index}>
                                    <td >{activeLogsData.date}</td>
                                    <td >{activeLogsData.time}</td>
                                    <td >{activeLogsData.patientId}</td>
                                    <td >
                                        <img onClick={() => (openActiveLogsPopUp(activeLogsData))}
                                             id="log-action-buttons" src={ViewLog} alt="view">
                                        </img>
                                        <img onClick={() => (openActiveLogsPopUp(activeLogsData))}
                                             id="log-action-buttons" src={EditLog} alt="edit">
                                        </img>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ActiveLogPopUp isOpen={activeLogsButtonPopUp} isClose={closeActiveLogsPopUp} activeLogsData={selectedActiveLogs}/>
        </div>
    )
};

