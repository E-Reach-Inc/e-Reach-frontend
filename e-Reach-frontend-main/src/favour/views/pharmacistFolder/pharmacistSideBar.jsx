import React from 'react'
import '../../styles/pharmacistFolder/pharmacistSideBar.css'
import eReach from '../../assets/pharmacistimage/eReachLogoNoB.svg'
import dashboard from '../../assets/pharmacistimage/dashboard-fill.svg'
import profile from '../../assets/pharmacistimage/profile.svg'
import schedule from '../../assets/pharmacistimage/appointment.svg'
import medical from '../../assets/pharmacistimage/book-medical.svg'
import settings from '../../assets/pharmacistimage/settings.svg'
import drugs from '../../assets/pharmacistimage/drugs.svg'
import logout from '../../assets/pharmacistimage/log-out.svg'
import medication from '../../assets/pharmacistimage/prescriptions-outline-sharp.svg'
import {Link} from 'react-router-dom'

export const PharmacistSideBar = () =>{
    return(
        <div className= "main-con">
            <div className= "side-bar">
                <img src={eReach} alt={"e-reach-logo"}/>
                <div className= "inner-side-bar">
                    <div className= "dashboard">
                        <img src={dashboard} alt={"dashboard"}/><Link to={"/pharmacist-dashBoard"} id= "link-dashboard">Dashboard</Link>
                    </div>

                    <div className= "Profile">
                        <img src={profile} alt={"profile"}/><Link to={"/pharmacist-profile"} id= "link-profile">Profile</Link>
                    </div>

                    <div className= "scheduling">
                        <img src={schedule} alt={"schedule"}/><Link to={"/pharmacist-appointment"} id= "link-scheduling">Appointment</Link>
                    </div>

                    <div className= "medication">
                        <img src={medication} alt={"medication"}/><Link to={"/pharmacist-medication"} id= "link-medication">Medication</Link>
                    </div>

                    <div className= "medial-log" >
                        <img src={medical} alt={"medical"}/><Link to={"/pharmacist-view-records"} id= "link-ViewLog">View Records</Link>
                    </div>    
                    <div className= "drug">
                        <img src={drugs} alt={"drugs"}/><Link to={"/Drugs"} id= "link-drugs">Add Drugs</Link>
                    </div>
                    <div className= "settings">
                        <img src={settings} alt={"settings"}/><Link to={"/Settings"} id= "link-settings">Settings</Link>
                    </div>

                    <div className= "logout">
                        <img src={logout} alt={"logout"}/><Link to={"/Log Out"} id= "link-logout">Log Out</Link>
                    </div>
                </div>
              </div>
            </div>
    )
}