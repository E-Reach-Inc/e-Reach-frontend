import React from "react";

const CreateLogPopUp = ({isOpen, isClose, activeLogsData}) => {
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
                        <p> Date: {activeLogsData.date}</p>
                        <p> Time: {activeLogsData.time}</p>
                        <p> Patient Id: {activeLogsData.patientId}</p>
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