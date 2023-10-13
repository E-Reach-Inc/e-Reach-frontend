import React, { useEffect, useState } from "react";
import action from '../patient-icons/patient-eye-view.svg'
import '../styles/PatientRecordTwo.css'
import PatientPopUp from "./PatientPopUp";
import axios from "axios";
import { toast } from "react-toastify";

const PatientRecordTwo = () =>{

  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [selectedMedicalLog, setSelectedMedicalLog] = useState();

  const openPopup = (medicalLog) => {
    console.log("valuePatient value --> ", medicalLog.lastTimeUpdated);
    setSelectedMedicalLog(medicalLog);
    setButtonPopUp(true);
  };

  const closePopup = () => {
    setSelectedMedicalLog(null);
    setButtonPopUp(false);
  };

  const medicalLogs = [
    {
      date: "12:00:00",
      lastTimeUpdated: "12:00:00",
      patientIdentificationNumber: "e123456789990",
      hospitalEmail: "Eexampl@email.com",
      // action: {action},
    },
    // {
    //   date: "12:00:00",
    //   lastTimeUpdated: "12:00:00",
    //   patientIdentificationNumber: "e123456789990",
    //   hospitalEmail: "Eexampl@email.com",
    //   // action: {action},
    // },
    // {
    //   date: "12:00:00",
    //   lastTimeUpdated: "12:00:00",
    //   patientIdentificationNumber: "e123456789990",
    //   hospitalEmail: "Eexampl@email.com",
    //   action: "",
    // },
];

useEffect(()=>{
  const patientIdentificationNumber = localStorage.getItem("patientIdentificationNumber")
  const hospitalEmail = localStorage.getItem("hospitalEmail")
  console.log("hi pin")
  console.log("hi email")

  if (patientIdentificationNumber) {
    axios
      .get(
        " http://e-reach-prod.up.railway.app/api/v1/patient/view-records/" +
          patientIdentificationNumber
      )
      .then((response) => {
        console.log(response)
        if (!response.data)
          toast.info("No records found", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
          });
        else {
          console.log("response.data ==> ", response.data);
          medicalLogs.push(response.data);
          localStorage.setItem("records", JSON.stringify(response.data));
        }
      })
      .catch((failureResponse) => {})
      .finally();
  } else if (hospitalEmail) {
    axios
      .get(
        "http://e-reach-prod.up.railway.app/api/v1/hospital/view-records/" +
          hospitalEmail
      )
      .then((response) => {
        if (!response.data)
          toast.info("No records found", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
          });
        else {
          console.log("Record --> ", response.data);
          medicalLogs.push(response.data);
          localStorage.setItem("records", JSON.stringify(response.data));
        }
      })
      .catch((failureResponse) => {})
      .finally();
  }
}, []);

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

                
        <tbody className="patient-record-two-table-data">
        {medicalLogs.map((value, index) => (
                <tr key={index}>
                  <td>{value.date}</td>
                  {/* <td >{patientsRecords.lastTimeUpdated}</td>
                                    <td >{patientsRecords.patientIdentificationNumber}</td> */}
                  <td>{value.hospitalEmail}</td>
                  <td onClick={() => openPopup(value)}>
                    {value.action} <img src={action} alt="Open Popup" />
                  </td>
                </tr>
              ))}
        </tbody>
      
      {buttonPopUp && (
        <PatientPopUp onClose={closePopup} isModalOpen={true} medicalLog={selectedMedicalLog} />
      )}
              </table>
            </div>
            {buttonPopUp && (
            <PatientPopUp
              onClose={closePopup}
              isModalOpen={true}
              lastTimeUpdated={selectedMedicalLog.lastTimeUpdated}
              hospitalEmail={selectedMedicalLog.hospitalEmail}
              patientIdentificationNumber={selectedMedicalLog.patientIdentificationNumber}
              date={selectedMedicalLog.date}
              // patientDetail={selectedMedicalLog}
            />
          )}
    </div>
  );
};

export default PatientRecordTwo;
