import React from 'react'
import eReach from "../../../coco/assets/images/EReachLogoNoB.svg"
import adminDashboard from "../../../coco/assets/icons/doc-dashboard-icon.svg"
import adminProfile from "../../../coco/assets/icons/doc-profile.svg"
import adminMessaging from "../../../coco/assets/icons/doc-messaging.svg"
import adminSetting from "../../../coco/assets/icons/doc-settings.svg"
import adminLogout from "../../../coco/assets/icons/doc-logout.svg"
import {Link} from "react-router-dom";
import "../../../coco/styles/administration/AdminSideBar.css"
export  const AdminSideBar = () =>{
    return(
        <div className= "admin-main-container">
            <div className= "admin-side-bar">
                <img src={eReach} alt={"e-reach-logo"}/>
                <div className= "admin-inner-side-bar">
                    <div className= "admin-dashboard">
                        <img src={adminDashboard} alt={"dashboard"}/>
                        <Link to={""} id= "link-admin-dashboard">Dashboard</Link></div>

                    <div className= "admin-Profile">
                        <img src={adminProfile} alt={"profile"}/>
                        <Link to={""} id="link-to-admin-profile">Profile</Link></div>


                    <div className= "admin-Messaging">
                        <img src={adminMessaging} alt={"messages"}/>
                        <Link to={""} id="link-to-messaging">Messages</Link></div>

                    <div className= "admin-Settings">
                        <img src={adminSetting} alt={"settings"}/>
                        <Link to={""} id="link-to-settings">Settings</Link></div>

                    <div className= "admin-Logout">
                        <img src={adminLogout} alt={"logout"}/>
                        <Link to={""} id="link-to-logout">Log Out</Link></div>
                </div>
            </div>
        </div>
    )
}