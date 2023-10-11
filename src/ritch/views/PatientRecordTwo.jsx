import React, { useEffect, useState } from "react";
import action from '../patient-icons/patient-eye-view.svg'
import '../styles/PatientRecordTwo.css'
import PatientPopUp from "./PatientPopUp";
import axios from "axios";
import { toast } from "react-toastify";

const PatientRecordTwo = () => {
 
  const initialMedicalLog = [
    {
      date: "25th/dec/2023",
      // lastTimeUpdated: '12:00:00',
      patientIdentificationNumber: 'e123456789990',
      hospitalEmail: 'eHospital@gmail.com'
      // action: {action},
    },
    {
      date: "25th/dec/2023",
      // lastTimeUpdated: '12:00:00',
      patientIdentificationNumber: 'e123456789990',
      hospitalEmail: 'eHospital@gmail.com'
      // action: {action},
    },
    {
      date: "25th/dec/2023",
      // lastTimeUpdated: '12:00:00',
      patientIdentificationNumber: 'e123456789990',
      hospitalEmail: 'eHospital@gmail.com'
      // action: {action},
    },
  ];

  const [medicalLog, setMedicalLog] = useState([]); 
  const patientId = localStorage.getItem("patientIdentificationNumber");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/patient/view-records/" + patientId)
      .then((response) => {
        setMedicalLog(response.data.medicalLogResponses);
        if (response.status === 200) toast.success("Logs found", {});
        else toast.info("No logs found");
      })
      .catch((error) => {
        toast.error(error.message);
        console.error("Error fetching medical logs:", error);
      });
  }, [patientId]);

  const [buttonPopUp, setButtonPopUp] = useState(false);
  const openPopup = () => {
    setButtonPopUp(true);
  };
  const closePopup = () => {
    setButtonPopUp(false);
  };

  return (
    <div className="patient-record-two-table-outter-con">
      <div className="patient-record-two-med-logs">
        <h2 className="patient-med-logs-two">Medical Logs</h2>
        <button>Browse All</button>
      </div>

      <div className="patient-record-two-inner-con">
        <table className="patient-record-two-table">
          <thead className="patient-record-two-table-header">
            <tr>
              <th>Date Created</th>
              {/* <th>Last Time Updated</th> */}
              <th>P.I.N</th >
              <th>Hospital Email</th>
              <th>Action</th>
            </tr>
          </thead>

          {initialMedicalLog.map((initialMedicalLog, index) => (
            <tbody className="patient-record-two-table-data" key={index}>
              <tr>
                <td>{initialMedicalLog.dateCreated}</td>
                {/* <td>{initialMedicalLog.lastTimeUpdated}</td> */}
                <td>{initialMedicalLog.patientIdentificationNumber}</td>
                <td>{initialMedicalLog.hospitalEmail}</td>
                <td><a href="open popup"><img src={action} /></a></td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      {buttonPopUp && <PatientPopUp onClose={closePopup} />}
    </div>
  );
};

export default PatientRecordTwo;
