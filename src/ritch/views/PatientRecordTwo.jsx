import React, { useEffect, useState } from "react";
import action from '../patient-icons/patient-eye-view.svg'
import '../styles/PatientRecordTwo.css'
import PatientPopUp from "./PatientPopUp";
import axios from "axios";
import { toast } from "react-toastify";

const PatientRecordTwo = () =>{

  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [selectedMedicalLog, setSelectedMedicalLog] = useState(null);

  const openPopup = (medicalLog) => {
    setSelectedMedicalLog(medicalLog);
    setButtonPopUp(true);
  };

  const closePopup = () => {
    setSelectedMedicalLog(null);
    setButtonPopUp(false);
  };


  const medicalLogs = [
    {
        date: "25th/dec/2023",
        // lastTimeUpdated: '12:00:00',
        // patientIdentificationNumber: 'e123456789990',
        hospitalEmail: 'gloryHealth@gmail.com'
        // action: {action},
    },
    {
      date: "25th/dec/2023",
      // lastTimeUpdated: '12:00:00',
      // patientIdentificationNumber: 'e123456789990',
      hospitalEmail: 'gloryHealth@gmail.com'
      // action: {action},
  }
];

useEffect(()=>{
  const patientIdentificationNumber = localStorage.getItem("patientIdentificationNumber")
  const hospitalEmail = localStorage.getItem("hospitalEmail")
  console.log("hi pin")
  console.log("hi email")

  if(patientIdentificationNumber){

      axios.get(" http://localhost:8080/api/v1/patient/view-records/"+patientIdentificationNumber)
          .then(response => {
              if(!response.data)
                toast.info("No records found", {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
              else {
                  medicalLogs.push(response.data)
                  localStorage.setItem("records", JSON.stringify(response.data));

              }
          })
          .catch(failureResponse => {

          })
          .finally()
  }

  else if(hospitalEmail){
      axios.get("http://localhost:8080/api/v1/hospital/view-records/"+hospitalEmail)
          .then(response => {
            if(!response.data)
              toast.info("No records found", {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
            else {
                medicalLogs.push(response.data)
                localStorage.setItem("records", JSON.stringify(response.data));

            }
          })
          .catch(failureResponse => {

          })
          .finally() 
  }
}, [])

  return(
        <div className="patient-record-two-table-outter-con">
          <div className="patient-record-two-med-logs">
          <h3 className="patient-med-logs-two">Records</h3>
          <button>Browse All</button>
          </div>
          <div className="patient-record-two-inner-con">
              <table className="patient-record-two-table">
                <thead className="patient-record-two-table-header">
                  <tr>
                    <th>Date Created</th>
                    <th>Hospital Email</th>
                    <th>Action</th>
                  </tr>
                </thead>

                {medicalLogs.map((medicalLog, index) => (
        <tbody className="patient-record-two-table-data" key={index}>
          <tr>
            <td>{medicalLog.dateCreated}</td>
            <td>{medicalLog.hospitalEmail}</td>
            <td onClick={() => openPopup(medicalLog)}>
              {medicalLog.action} <img src={action} alt="Open Popup" />
            </td>
          </tr>
        </tbody>
      ))}
      {buttonPopUp && (
        <PatientPopUp onClose={closePopup} isModalOpen={true} medicalLog={selectedMedicalLog} />
      )}
              </table>
            </div>
            {buttonPopUp && <PatientPopUp onClose={closePopup} isModalOpen={true}/>}
    </div>
  );
};

export default PatientRecordTwo;
