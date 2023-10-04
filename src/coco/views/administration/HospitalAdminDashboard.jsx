import React from 'react'
import {AdminSearchBar} from "./AdminSearchBar"
import {AdminSideBar} from "./AdminSideBar"
import {useNavigate} from "react-router-dom";
import "../../../coco/styles/administration/HospitalAdminDashboard.css"
import AdminPatientIcon from "../../assets/images/patient.svg"
import AdminDoctorIcon from "../../assets/images/doctor.svg"
import AdminPatientRecord from "../../../coco/assets/images/records.svg"
import AdminPatientLogs from "../../../coco/assets/icons/admin-logs.svg"


const HospitalAdminDashboard = () => {
    const navigate = useNavigate()
    function handleClickForPatient(){
        navigate("/patient-registration")
    }
    function handleClickForPractitioner(){
        navigate("/doctor-registration")
    }
    function handleClickForRecords(){
        navigate("/patient-record")
    }
    function handleClickForAdmin(){
        navigate("/doctor-registration")
    }
    return (
        <div className="admin-main-frame">
            <div>
                <AdminSideBar/>
            </div>
            <div>
                <AdminSearchBar/>
                <div className="Admin-Activity-Frame">
                    <div className="first-admin-sub-activity">
                        <div className="patient-frame-admin">
                            <img src={AdminPatientIcon} alt="patient"/>
                            <button id="click-patient-button" onClick={handleClickForPatient}>Add a New Patient</button>
                        </div>
                        <div className="practitioner-frame-admin">
                            <img src={AdminDoctorIcon} alt="doctor"/>
                            <button id="click-practitioner-button" onClick={handleClickForPractitioner}>Add a New Practitioner</button>
                        </div>
                    </div>
                    <div className="second-admin-sub-activity">
                        <div className="patient-record-frame">
                            <img src={AdminPatientRecord} alt="record"/>

                            <button id="click-records-button" onClick={handleClickForRecords}>View Patient Records</button>
                        </div>
                        <div className="patient-log-frame">
                            <img src={AdminPatientLogs} alt="record"/>
                            <button id="click-log-button" onClick={handleClickForAdmin}>Activate New Patient Log</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HospitalAdminDashboard;