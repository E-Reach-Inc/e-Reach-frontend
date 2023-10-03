import React, { useEffect, useState } from "react";

import searchIcon from '../patient-icons/patient-search-icon.svg'
import notification from '../patient-icons/paitient-notification.png'
import message from '../patient-icons/patient-envelope.png'
import femaleImage from '../patient-icons/patient-female.svg'
import maleImage from '../patient-icons/patient-male.svg'
import '../styles/PatientNavBar.css'





const PatientNavBar = () =>{

    const [patientData, setPatientData] = useState({
        firstName: ""
      });

    
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
            <div className="patient-nav-bar-outer-con">
              <div className="patient-nav-bar-inner-con">
             
                <div className="patient-search-container">
            
                  <input
                    type="text"
                    placeholder="Search..."
                    className="patient-search-input"
                  />
        
                  <button className="patient-search-button">
                    <img src={searchIcon} alt="Search"/>
                  </button>
                  
                  
                </div>
        
                <button className="patient-current-date">{time}</button>
        
                <div className="patient-nav-bar-icons">

                    <div className="patient-notification-icon">
                      <img src={notification} alt="Notification" className="nav-icons"  />
                    </div>
        
                  <div className="patient-message-icon">
                    <img src={message} alt="Message" className="nav-icons"  />
                  </div>
        
                  <div className="patient-profile-icon">
                  <div className="patient-nav-bar-profile-image">
                          {patientData.gender == "male" ? (<img src={femaleImage} alt="Patient"  className="nav-icons" />): (<img src={maleImage} alt="Patient"  className="nav-icons"/>)}
                      
                    </div>
                  
                  </div>
                </div>
               
              </div>
            </div>
         
    )
   
}

export default PatientNavBar;