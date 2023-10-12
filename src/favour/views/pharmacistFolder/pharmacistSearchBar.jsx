import React, {useState, useEffect}from "react";
import notification from "../../assets/pharmacistimage/notificationnew.svg";
import '../../styles/pharmacistFolder/pharmacistSearchBar.css'
import message from "../../assets/pharmacistimage/messagesnew.svg";
import shedoctor from "../../assets/pharmacistimage/profilenew.svg";


export const PharmacistSearchBar =()=>{
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
            <div className="flex-container">
                <div className="input-con">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="search..."
                        aria-label= "Search"
                        // value={searchQuery}
                        // onChange={(e)=> setSearchQuery(e.target.value)}
                    />
                    <button type="button" className="search-button">
                        Search
                    </button>
                </div>
                <div className="date-time">
                    <p>{time}</p>
                </div>
                <div className="notifications">
                    <img className="not" src={notification} alt="notification"/>
                    <img className="message" src={message} alt="message"/>
                </div>
                <div className="doctor">
                    <img src={shedoctor} alt="doctor"/>
                </div>
            </div>
        )
}