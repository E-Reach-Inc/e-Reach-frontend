import React, { useContext, useEffect, useState } from "react";
import PrescriptionLog from "./PrescriptionLog";
import TestLog from "./TestLog";
import DoctorsReport from "./DoctorsReportLog";
import { ref, query, orderByChild, equalTo, get } from "firebase/database";
import {db} from '../../firebaseConfig/firebase'
import { LogContext } from "../../coco/views/doctor/doctorViewActiveLogsOne";

const prescriptions =  {
    medicationName: 'paracetamol',
    dosage: '2 tablets',
    dosageFrequecy: 'Morning and night',
    startDate: '',
    prescriptionDate: '',
    practitionerEmail: ''
  }

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

const MedicalLog = () => {
  const [allLogs, setAllLogs] = useState([]);
  const logData = useContext(LogContext)
  useEffect(() => {
      console.log("log data => ", logData)
    
  }, []);

  return (
    <div className="medical-log-holder-con">
      <div>
        {/* Render your medical logs here using the filtered data in 'allLogs' */}
        {allLogs.map((log) => (
          <div key={log.id}>
          </div>
        ))}
       
        <TestLog />
        <PrescriptionLog prescriptions={prescriptions} />
        <DoctorsReport />
      </div>
    </div>
  );
};

export default MedicalLog;
