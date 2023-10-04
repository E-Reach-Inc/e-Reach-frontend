import React, {useEffect, useState} from "react";
import notification from "../../assets/icons/doc-notification.svg"
import message from "../../assets/icons/doc-messaging.svg"
import profilePic from "../../../coco/assets/icons/doc-profile.svg"
import "../../../coco/styles/doctor/doctorSearchBar.css"
export const SearchBar =()=>{

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
        <div className="doc-flex-frame">
            <div className="doc-input-frame">
                <input
                    type="text"
                    className="doc-search-bar"
                    placeholder="search..."
                    aria-label= "Search"
                    // value={searchQuery}
                    // onChange={(e)=> setSearchQuery(e.target.value)}
                />
                <button type="button" className="doc-search-button">
                    Search
                </button>
            </div>
            <div className="doc-date-time">
                <p>{time}</p>
            </div>
            <div className="doc-notifications">
                <img className="not" src={notification} alt="notification"/>
                <img className="message" src={message} alt="message"/>
            </div>
            <div className="doctorProfile">
                <img src={profilePic} alt="doctor"/>
            </div>
        </div>
    )
}