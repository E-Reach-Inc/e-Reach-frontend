import React from "react";
import logo from '../patient-icons/e-Reach-Logo-NoB.svg'
import dashboard from '../patient-icons/patient-dash-icon.svg'
import profile from '../patient-icons/patient-profile.svg'
import record from '../patient-icons/patient-record-icon.svg'
import appointment from '../patient-icons/patient-appointment-icon.svg'
import settings from '../patient-icons/patient-settings.svg'
import logout from '../patient-icons/patient-log-out.svg'
import '../styles/PatientSideBar.css'
import { Link } from "react-router-dom";





const PatientSideBar  = () => {

    return(
        <div className="patient-sidebar-outer-con">
        <div className="patient-sidebar-inner-con">

                <div className="logo-container">
                      <img className="patient-side-bar-logo" src={logo} alt={"e-Reach logo"} />
                </div>
        
             
                <div className="patient-menu-item"  id="patient-dashboard-icon">
                <img src={dashboard} alt=""   />
                <Link className="side-text"to = {"/patientTab-view"}>Dashboard</Link>
                </div>

                <div className="patient-menu-item">
                    <img src={profile} alt="" />
                    <Link className="side-text"to = {"/patientTab-profile"}>Profile</Link>
 
                </div>

                <div className="patient-menu-item" >
                <img src={record} alt="" />
                <Link className="side-text" to = {"/patientTab-record"} >Medical Record</Link>

                </div>

                <div className="patient-menu-item">
                <img src={appointment} alt=""/>
                <Link className="side-text"to= {"/patientTab-appointment"}>Appointment</Link>
                </div>

            
                <div className="patient-menu-item" id="patient-settings-icon"> 
                <img  src={settings} alt="" />
                <span>Settings</span>
                </div>

                <div className="patient-menu-item" id="patient-log-out-icon">
                <img src={logout} alt="" />
                <span>Log Out</span>
                </div>
        </div>

             

  </div>
    )
   
}

export default PatientSideBar;