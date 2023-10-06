import React, { useState } from "react";
import PatientNavBar from "./PatientNavBar";
import action from '../patient-icons/patient-eye-view.svg'
import '../styles/PatientRecordTwo.css'
import PatientPopUp from "./PatientPopUp";



const PatientRecordTwo = () =>{

  const [buttonPopUp,setButtonPopUp]=useState(false);
  const openPopup = () => {
          setButtonPopUp(true);
      };
      const closePopup = () => {
        setButtonPopUp(false);
      };



  const patientsRecords = [
    {
        date: "25th/dec/2023",
        lastTimeUpdated: '12:00:00',
        patientIdentificationNumber: 'e123456789990',
        // action: {action},
    },
    {
      date: "25th/dec/2023",
      lastTimeUpdated: '12:00:00',
      patientIdentificationNumber: 'e123456789990',
      // action: {action},
  },
  {
    date: "25th/dec/2023",
    lastTimeUpdated: '12:00:00',
    patientIdentificationNumber: 'e123456789990',
    // action: {action},
},
    
];

    return(
        <div className="patient-record-two-table-outter-con">

          <div className="patient-record-two-med-logs">
          <h2 className="patient-med-logs-two">Records</h2>
          <button>Browse All</button>
          </div>
          
          <div className="patient-record-two-inner-con">
         
        <table className="patient-record-two-table">

          <thead className="patient-record-two-table-header">
            <tr>
              <th>Date Created</th>
              <th>Last Time Updated</th>
              <th>Hospital Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="patient-record-two-table-data">
          {patientsRecords.map((patientsRecords, index) => (
                                <tr key={index}>
                                    <td >{patientsRecords.date}</td>
                                    <td >{patientsRecords.lastTimeUpdated}</td>
                                    <td >{patientsRecords.patientIdentificationNumber}</td>
                                    <td onClick={openPopup}><img src={action} /></td>
                                </tr>
                  ))}
                  
          </tbody>
        </table>
          </div>
          {buttonPopUp && <PatientPopUp onClose={closePopup}/>}
    </div>
    )
    
}
export default PatientRecordTwo;