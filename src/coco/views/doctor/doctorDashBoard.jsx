import React from 'react'
import "../../../coco/styles/doctor/doctorDashBoard.css"
import {DoctorSideBar} from "./doctorSideBar";
import {SearchBar} from "./doctorSearchBar";
import {DoctorProfileTwo} from "./doctorProfileTwo";
import {ActiveLogsTableTwo} from "./doctorViewActiveLogsTwo";
import {PatientAppointmentTwo} from "./viewPatientAppointmentTwo";
import {ViewPatientRecordTwo} from "./viewPatientRecordTwo";
import {get, ref, query, orderByChild, equalTo } from 'firebase/database';
import {db} from "../../../firebaseConfig/firebase.js"
import { useState, useEffect } from 'react';


export const DoctorDashboard = () =>{

    const [activeLogsData, setActiveLogsData] = useState([])
    const hospitalEmail = localStorage.getItem("hospitalEmail");

    useEffect(()=>{
        async function fetchLogs(){
            const databaseRef = ref(db, "active_logs")
            const logsQuery = query(databaseRef, orderByChild("hospitalEmail"), equalTo(hospitalEmail));
            console.log(hospitalEmail)
            try {
                const snapshot = await get(logsQuery);
                if (snapshot.exists()) {
                    const logsArray = [];
                    let i = 0;
                    snapshot.forEach((childSnapshot) => {
                        console.log("child snapshot ree o", childSnapshot)
                        if(i < 5){
                            const logData = childSnapshot.val();
                            logsArray.push(logData);
                            i++;
                        }
                    });
                    setActiveLogsData(logsArray);
                    console.log("This is active logs data::: ", activeLogsData)
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchLogs()
        
    }, [activeLogsData, hospitalEmail])

    return(
        <div className="Main-Dash-Frame">
            <div><DoctorSideBar/></div>
            <div>
                <div><SearchBar/></div>
                <h2 className='Doc-Dashboard-tag'>Dashboard</h2>
                <div className="Doc-Activity-Frame">
                    <div className="first-sub-activity">
                        <div className="profile-frame-doc">
                            <DoctorProfileTwo/>
                        </div>
                        <div className="appointment-frame-doc">
                            <PatientAppointmentTwo/>
                        </div>
                    </div>
                    <div className="second-sub-activity">
                        <div className="view-active-logs-frame">
                            <ActiveLogsTableTwo activeLogsData={activeLogsData}/>
                        </div>
                        <div className="view-patient-records-frame">
                            <ViewPatientRecordTwo/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}