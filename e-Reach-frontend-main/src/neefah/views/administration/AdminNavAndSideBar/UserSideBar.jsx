import {Link} from "react-router-dom";
import "../../../styles/administration/AdminNavAndSideBar/UserSideBar.css"
import eReach from "../../../assets/images/EReachLogoNoB.svg"
import userDashboard from "../../../assets/icons/user-Dashboard.svg"
import userProfile from "../../../assets/icons/user-profile.svg"
import userMessaging from "../../../assets/icons/user-messaging.svg"
import userSetting from  "../../../assets/icons/user-settings.svg"
import userLogout from "../../../assets/icons/user-Logout.svg"
export  const UserSideBar = () =>{
    return(
        <div className= "admin-main-container">
            <div className= "admin-side-bar">
                <img src={eReach} alt={"e-reach-logo"}/>
                <div className= "admin-inner-side-bar">
                    <div className= "admin-dashboard">
                        <img src={userDashboard} alt={"dashboard"}/>
                        <Link to={"/user-dashboard"} id= "link-admin-dashboard">Dashboard</Link></div>

                    <div className= "admin-Profile">
                        <img src={userProfile} alt={"profile"}/>
                        <Link to={""} id="link-to-admin-profile">Profile</Link></div>

                    <div className= "admin-Users">
                        {/*<img src={adminUsers} alt={"users"}/>*/}
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

export default UserSideBar