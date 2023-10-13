import React from "react";
import "../styles/PatientView.css"
import PatientNavBar from './PatientNavBar'
import PatientSideBar from "./PatientSideBar";
import PatientProfileTwo from "./PatientProfileTwo";
import PatientAppointmentTwo from "./PatientAppointmentTwo";
import PatientRecordTwo from "./PatientRecordTwo";
import { useParams } from "react-router";




const PatientView = () =>{

    const param = useParams()

    console.log(param.pin)
   
    return(
        <div className="patient-view-outer-container">
            <div>
                <PatientSideBar/> 
            </div>   
            <div  className="patient-view-main-body" >

                <div className="patient-view-side-bar-div">
                <PatientNavBar/>
                 </div> 
                <div className="patient-view-central-body">
                    <div className="patient-view-top-body-div">
                        <div className="patient-view-profile-two-div"> 
                            <PatientProfileTwo pin={param.pin}/>
                        </div>
                        <div className="patient-view-appointment-two-table">    
                            <PatientAppointmentTwo/> 
                        </div> 
                        </div>
                        <div className="patient-view-btm-body">
                            <div>
                            <PatientRecordTwo/>
                            </div>
                        
                    </div>
                </div>
               



            </div>
           
           
           
            

        </div>
    )
}

export default PatientView