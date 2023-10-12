import React from 'react'
import eReach from "../../../coco/assets/images/EReachLogoNoB.svg"
import docDashboard from "../../../coco/assets/icons/doc-dashboard-icon.svg"
import {Link} from "react-router-dom";
import docProfile from "../../../coco/assets/icons/doc-profile.svg"
import docAppointment from "../../../coco/assets/icons/doc-appointment.svg"
import docPatientRecord from "../../../coco/assets/icons/doc-patient-record.svg"
import docActiveLogs from "../../../coco/assets/icons/doc-active-logs.svg"
import docMessaging from "../../../coco/assets/icons/doc-messaging.svg"
import docSetting from "../../../coco/assets/icons/doc-settings.svg"
import docLogout from "../../../coco/assets/icons/doc-logout.svg"
import "../../../coco/styles/doctor/doctorSideBar.css"
export  const DoctorSideBar = () =>{
    return(
        <div className= "main-container">
            <div className= "doc-side-bar">
                <img src={eReach} alt={"e-reach-logo"}/>
                <div className= "doc-inner-side-bar">
                    <div className= "doc-dashboard">
                        <img src={docDashboard} alt={"dashboard"}/>
                        <Link to={"/doctorsTab-dashboard"} id= "link-doc-dashboard">Dashboard</Link></div>

                    <div className= "doc-Profile">
                        <img src={docProfile} alt={"profile"}/>
                        <Link to={"/doctorsTab-profile-one"} id="link-to-doc-profile">Profile</Link></div>

                    <div className= "doc-Appointment">
                        <img src={docAppointment} alt={"appointment"}/>
                        <Link to={"/doctorsTab-patientsTab-appointment-one"} id="link-to-Appointment">Appointment</Link></div>

                    <div className= "doc-View-Patient-Record">
                        <img src={docPatientRecord} alt={"patientsTab record"}/>
                        <Link to={"/doctorsTab-patientsTab-record-one"} id="link-to-patient-record">PatientsTab Records</Link></div>

                    <div className= "doc-View-Active-Logs">
                        <img src={docActiveLogs} alt={"active logs"}/>
                        <Link to={"/doctorsTab-active-logs-one"} id="link-to-active-logs">Active Logs</Link></div>

                    <div className= "doc-Messaging">
                        <img src={docMessaging} alt={"messages"}/>
                        <Link to={""} id="link-to-messaging">Messages</Link></div>

                    <div className= "doc-Settings">
                        <img src={docSetting} alt={"settings"}/>
                        <Link to={""} id="link-to-settings">Settings</Link></div>

                    <div className= "doc-Logout">
                        <img src={docLogout} alt={"logout"}/>
                        <Link to={""} id="link-to-logout">Log Out</Link></div>
                </div>
            </div>
        </div>
    )
}