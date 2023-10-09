import React, {useEffect, useState} from "react";
import {DoctorSideBar} from "./doctorSideBar";
import {SearchBar} from "./doctorSearchBar";
import "../../../coco/styles/doctor/doctorViewActiveLogsOne.css"
import ViewLog from "../../../coco/assets/icons/doc-view-log.svg"
import EditLog from "../../../coco/assets/icons/doc-edit-log.svg"
import ActiveLogPopUp from "./activeLogPopUp";
import { ToastContainer, toast } from "react-toastify";
import { getDatabase, get, ref, query, orderByChild, equalTo } from 'firebase/database'; // Import Firebase database functions
import { db } from "../../../firebaseConfig/firebase";


export const ActiveLogsTableOne = () => {
    const [activeLogsButtonPopUp, setActiveLogsButtonPopUp] = useState(false);
    const [selectedActiveLogs, setSelectedActiveLogs] = useState(null);
    const [activeLogsData, setActiveLogsData] = useState([]); 
    const hospitalEmail = localStorage.getItem("hospitalEmail");

    useEffect(() => {
        localStorage.setItem("hospitalEmail", "richardsakaabiam@gmail.com")
        console.log("hello tue tue")
        const fetchData = async () => {
            const logsRef = ref(db, "active_logs");
            const logsQuery = query(logsRef, orderByChild("hospitalEmail"), equalTo(hospitalEmail));
        
            try {
                const snapshot = await get(logsQuery);
                if (snapshot.exists()) {
                    const logsArray = [];
                    snapshot.forEach((childSnapshot) => {
                        const logData = childSnapshot.val();
                        logsArray.push(logData);
                    });
                    setActiveLogsData(logsArray);
                    toast.info("medical logs found", {position: toast.POSITION.TOP_CENTER, autoClose:3000})
                    console.log("This is active logs data::: ", activeLogsData)
                }
                toast.info("you hospital has not created any medical log(s)", {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
            } catch (error) {
                toast.error("could not fetch logs", {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [hospitalEmail]);


    const openActiveLogsPopUp = (activeLogsData) => {
        setSelectedActiveLogs(activeLogsData);
        setActiveLogsButtonPopUp(true);
    }

    const closeActiveLogsPopUp = () => {
        setSelectedActiveLogs(null);
        setActiveLogsButtonPopUp(false);
    }
    // const activeLogsData = [
    //     { date: '2023-09-27', time: '10:00 AM', patientId: 1 },
    //     { date: '2023-09-26', time: '03:30 PM', patientId: 2 },
    // ];

    return(
        <div className="Doc-Log-Main-Frame">
            <ToastContainer/>
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
                                    <td >{activeLogsData.dateCreated}</td>
                                    <td >{activeLogsData.timeCreated}</td>
                                    <td >{activeLogsData.patientIdentificationNumber}</td>
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

