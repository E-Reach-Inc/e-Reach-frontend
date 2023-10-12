import React from 'react'
import "../../../coco/styles/doctor/doctorDashBoard.css"
import {DoctorSideBar} from "./doctorSideBar";
import {SearchBar} from "./doctorSearchBar";
import {DoctorProfileTwo} from "./doctorProfileTwo";
import {ActiveLogsTableTwo} from "./doctorViewActiveLogsTwo";
import {PatientAppointmentTwo} from "./viewPatientAppointmentTwo";
import {ViewPatientRecordTwo} from "./viewPatientRecordTwo";

export const DoctorDashboard = () =>{
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
                            <ActiveLogsTableTwo/>
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