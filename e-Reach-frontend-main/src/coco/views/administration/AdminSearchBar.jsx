import React, {useEffect, useState} from "react";
import adminNotification from "../../../coco/assets/icons/doc-notification.svg"
import adminMessage from "../../../coco/assets/icons/doc-messaging.svg"
import adminProfilePic from "../../../coco/assets/icons/doc-profile.svg"
import "../../../coco/styles/administration/AdminSearchBar.css"
import {GiHamburgerMenu} from "react-icons/gi";
export const AdminSearchBar =(props)=>{

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
                <img className="not" src={adminNotification} alt="notification"/>
                <img className="message" src={adminMessage} alt="message"/>
            </div>
            <div className="adminProfile">
                <img src={adminProfilePic} alt="doctor"/>
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