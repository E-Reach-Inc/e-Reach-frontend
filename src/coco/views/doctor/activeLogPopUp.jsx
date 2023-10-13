import React, { useContext } from "react";
import "../../../coco/styles/doctor/activeLogPopUp.css"

import { LogContext } from "../../../ritch/medicalLog/MedicalLog";

const ActiveLogPopUp = ({isOpen, isClose, activeLogsData}) => {

    const logData = useContext(LogContext)

    if(!isOpen || !activeLogsData){
        return null
    }
    return(
        <>
            <div className="active-log-overlay"></div>
            <div className={`activeLogPopUp ${isOpen ? 'open' : 'closed'}`}>
                <div>
                    <h1>Active Log</h1>
                    <div>
                        <p> Date: {logData.dateCreated}</p>
                        <p> Time: {logData.timeCreated}</p>
                        <p> Patient Id: {logData.patientIdentificationNumber}</p>
                        {/*<div className="active-logtext-box">*/}
                        {/*    <textarea*/}
                        {/*        placeholder= "      Enter Log Here:"*/}
                        {/*    />*/}
                        {/*    <button>Submit</button>*/}
                        {/*</div>*/}
                    </div>
                    <button onClick={isClose}>Close</button>
                </div>
            </div>
        </>
    )
};
export default ActiveLogPopUp;