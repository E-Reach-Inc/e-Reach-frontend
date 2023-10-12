import React, { useEffect, useState } from "react";
import action from '../patient-icons/patient-eye-view.svg'
import '../styles/PatientRecordTwo.css'
import PatientPopUp from "./PatientPopUp";
import axios from "axios";
import { toast } from "react-toastify";

const PatientRecordTwo = () =>{

  const [medicalLogs, setMedicalLogs] = useState([])
  const patientId = localStorage.getItem("patientIdentificationNumber")

  useEffect(()=>{
      axios.get("http://localhost:8080/api/v1/patient/view-records/"+patientId)
          .then((response) => {
              setMedicalLogs(response.data.medicalLogResponses);
              if(response.status === 200)
                  toast.success("logs found", {})
              else toast.info("no logs found")
          })
          .catch((error) => {
              toast.error(error)
              console.error("Error fetching medical logs:", error);
          });
  }, [patientId]);


    const [buttonPopUp,setButtonPopUp]=useState(false);
    const openPopup = () => {
        setButtonPopUp(true);
    };
    const closePopup = () => {
        setButtonPopUp(false);
    };

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
                    <th>Last Time Updated</th>
                    <th>Hospital Name</th>
                    <th>Action</th>
                  </tr>
                </thead>

                {medicalLogs.map((medicalLog, index)=>(
                    <tbody className="patient-record-two-table-data">
                      <tr key={index}>
                          <td>{medicalLog.dateCreated}</td>
                          <td>{medicalLog.lastTimeUpdated}</td>
                          <td >{medicalLog.patientIdentificationNumber}</td>
                          <td>{medicalLog.hospitalName}</td>
                          <td>
                            <img src={action}/>
                           </td>
                      </tr>
                    </tbody>
                ))}

              </table>
            </div>
          {buttonPopUp && <PatientPopUp onClose={closePopup}/>}
    </div>
  );
};

export default PatientRecordTwo;
