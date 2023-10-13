import React from 'react'
import eReach from "../../../assets/images/EReachlogoNoB.svg"
import userDashboard from "../../../assets/icons/userDashboard.svg"
import userMessaging from "../../../assets/icons/userMessaging.svg"
import userSetting from "../../../assets/icons/userSettings.svg"
import userLogout from "../../../assets/icons/userLogout.svg"
import userProfile from "../../../assets/icons/userProfile.svg"
import users from  "../../../assets/icons/users.svg"
import {Link} from "react-router-dom";
import "../../../styles/administration/userSideAndNavBar/userSideBar.css"
export  const AdminSideBar = () =>{
    return(
        <div className= "admin-main-container">
            <div className= "admin-side-bar">
                <img src={eReach} alt={"e-reach-logo"}/>
                <div className= "admin-inner-side-bar">
                    <div className= "admin-dashboard">
                        <img src={userDashboard} alt={"dashboard"}/>
                        <Link to={"/admin-dashboard"} id= "link-admin-dashboard">Dashboard</Link></div>

                    <div className= "admin-Profile">
                        <img src={userProfile} alt={"profile"}/>
                        <Link to={""} id="link-to-admin-profile">Profile</Link></div>

                    <div className= "admin-Users">
                        <img src={users} alt={"users"}/>
                        <Link to={"/user"} id="link-to-users">Users</Link></div>


                    <div className= "admin-Messaging">
                        <img src={userMessaging} alt={"messages"}/>
                        <Link to={""} id="link-to-messaging">Messages</Link></div>

                    <div className= "admin-Settings">
                        <img src={userSetting} alt={"settings"}/>
                        <Link to={""} id="link-to-settings">Settings</Link></div>

                    <div className= "admin-Logout">
                        <img src={userLogout} alt={"logout"}/>
                        <Link to={""} id="link-to-logout">Log Out</Link></div>
                </div>
            </div>
        </div>
    )
}
export default AdminSideBar;