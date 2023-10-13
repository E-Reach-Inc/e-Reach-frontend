import React, { useContext, useEffect, useState } from "react";
import PrescriptionLog from "./PrescriptionLog";
import TestLog from "./TestLog";
import DoctorsReport from "./DoctorsReportLog";
import '../medicalLog/medicalLogStyle/MedicalLog.css'

export const LogContext = React.createContext();

const logData = {
        doctorReportDTO: {
            date: '',
            reportContent: '',
            diagnosis: '',
            treatment: '',
            practitionerEmail: ''
        },
        prescriptionsDTO: [
         
        ],
        testDTO: [
          {
            testName: '',
            fileUrl: '',
            testDate: '',
            testReport: '',
            practitionerEmail: ''
          }
        ],
        patientIdentificationNumber: '',
        hospitalEmail: ''
    }

const MedicalLog = (props) => {
  const [allLogs, setAllLogs] = useState([]);

  console.log("log data in medical log ==> ", props)

  useEffect(() => {
      console.log("log data => ", props)
    
  }, [props]);

  return (

    <LogContext.Provider value={props}>
    <div className="medical-log-holder-con">
      <div>
        {allLogs.map((log) => (
          <div key={log.id}>
          </div>
        ))}
          <div className="medical-log-main-con">
            <div className="medical-log-inner-con">
            <h2 id="mmm">Medical Log</h2>
                <TestLog />
                <PrescriptionLog />
                <DoctorsReport />
                <button className="medical-log-back-btn">Back</button>
            </div>
       
          </div>
       
      </div>
    </div>
    </LogContext.Provider>
  );
};

export default MedicalLog;
