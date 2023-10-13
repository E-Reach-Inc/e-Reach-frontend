import React, {useEffect, useState} from "react";
import notification  from "../../../assets/icons/userNotification.svg"
import userMessage from "../../../assets/icons/userMessaging.svg"
import userProfilePic from "../../../assets/icons/userProfile.svg"
import "../../../styles/administration/userSideAndNavBar/userSearchBar.css"
import {GiHamburgerMenu} from "react-icons/gi";
export const UserSearchBar =(props)=>{

    const[time, setTime] = useState("");
    useEffect(()=>{
        setInterval(() => {
            setTime(getTime());
        }, 1000);

    },[]);


    function getTime(){
        const now = new Date();
        return now.toLocaleString("en-Us", {
            day :"numeric",
            month: "long",
            year : "numeric",
            hour: "numeric",
            minute : "numeric",
            second : "numeric"
        })
    }


    return (
        <div className="admin-flex-frame">
            <div className="admin-input-frame">
                <input
                    type="text"
                    className="admin-search-bar"
                    placeholder="search..."
                    aria-label="Search"
                    // value={searchQuery}
                    // onChange={(e)=> setSearchQuery(e.target.value)}
                />
                <button type="button" className="admin-search-button">
                    Search
                </button>
            </div>
            <div className="admin-date-time">
                <p>{time}</p>
            </div>
            <div className="admin-notifications">
                <img className="not" src={notification} alt="notification"/>
                <img className="message" src={userMessage} alt="message"/>
            </div>
            <div className="adminProfile">
                <img src={userProfilePic} alt="doctor"/>
            </div>
            <div className="hamburger-icon">
                <button
                    onClick={props.toggleSideBar}>
                    <GiHamburgerMenu/>
                </button>
            </div>

        </div>
    )
}
export default UserSearchBar;