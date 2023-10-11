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
import MedicalLog from "../../../ritch/medicalLog/MedicalLog";
import { useNavigate } from "react-router";


export const ActiveLogsTableOne = () => {
    const [activeLogsButtonPopUp, setActiveLogsButtonPopUp] = useState(false);
    const [selectedActiveLogs, setSelectedActiveLogs] = useState(null);
    const [activeLogsData, setActiveLogsData] = useState([]); 
    const hospitalEmail = localStorage.getItem("hospitalEmail");
    const navigate = useNavigate()

    useEffect(() => {
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
                }
            } catch (error) {
                toast.error("could not fetch logs", {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
                console.error("Error fetching data::: ", error);
            }
        };

        fetchData();
    }, []);


    function openMedicalLog(event){
        const patientId = event.target.parentElement.parentElement.id;
        let patientLog = null;
        activeLogsData.map((log, index)=>{
            if(patientId === log.patientIdentificationNumber){
                patientLog = log;
            }
        });
        console.log(patientLog)
        // navigate("/medical-log/")
        // <MedicalLog patientLog={patientLog}/>

    }

    const openActiveLogsPopUp = (event) => {
        const patientId = event.target.parentElement.parentElement.id;
        let patientLog = null;
        let mappedArray = activeLogsData.map((log, index)=>{
            if(patientId === log.patientIdentificationNumber){
                patientLog = log;
                return patientLog;
            }
        });
        setSelectedActiveLogs(patientLog);
        setActiveLogsButtonPopUp(true);
    }

    const closeActiveLogsPopUp = () => {
        setSelectedActiveLogs(null);
        setActiveLogsButtonPopUp(false);
    }

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
                            {activeLogsData.map((activeLog, index) => (
                                <tr key={index} id={activeLog.patientIdentificationNumber}>
                                    <td >{activeLog.dateCreated}</td>
                                    <td >{activeLog.timeCreated}</td>
                                    <td >{activeLog.patientIdentificationNumber}</td>
                                    <td >
                                        <img onClick={(event) => (openActiveLogsPopUp(event))}
                                             id="log-action-buttons" src={ViewLog} alt="view">
                                        </img>
                                        <img onClick={openMedicalLog}
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

