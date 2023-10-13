import React, { useContext, useEffect, useState } from "react";
import PrescriptionLog from "./PrescriptionLog";
import TestLog from "./TestLog";
import DoctorsReport from "./DoctorsReportLog";
import { LogContext } from "../../coco/views/doctor/doctorViewActiveLogsOne";
import '../medicalLog/medicalLogStyle/MedicalLog.css'

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
  const logData = useContext(LogContext)

  console.log("log data in medical log ==> ", props)

  useEffect(() => {
      console.log("log data => ", logData)
    
  }, [logData]);

  return (
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
  );
};

export default MedicalLog;
