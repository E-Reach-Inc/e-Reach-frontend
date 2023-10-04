import React from 'react'
import {AdminSearchBar} from "./AdminSearchBar"
import {AdminSideBar} from "./AdminSideBar"
import {useNavigate} from "react-router-dom";


const HospitalAdminDashboard = () => {
    const navigate = useNavigate()
    function handleClickForPatient(){
        navigate("/patient-registration")
    }
    function handleClickForPractitioner(){
        navigate("/doctor-registration")
    }
    function handleClickForRecords(){
        navigate("/")
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
                            <button onClick={handleClickForPatient}>Add a New Patient</button>
                        </div>
                        <div className="practitioner-frame-admin">
                            <button onClick={handleClickForPractitioner}>Add a New Practitioner</button>
                        </div>
                    </div>
                    <div className="second-admin-sub-activity">
                        <div className="patient-record-frame">
                            <button onClick={handleClickForRecords}>Add a New Patient Record</button>
                        </div>
                        <div className="patient-log-frame">
                            <button onClick={handleClickForAdmin}>Activate New Patient Log</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HospitalAdminDashboard;