import React, { useEffect, useState } from "react";
import PrescriptionLog from "./PrescriptionLog";
import TestLog from "./TestLog";
import DoctorsReport from "./DoctorsReportLog";
import { ref, query, orderByChild, equalTo, get } from "firebase/database";
import {db} from '../../firebaseConfig/firebase'

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
  useEffect(() => {
    // localStorage.setItem("hospitalEmail", "gloryHealth")
    const logsRef = ref(db, "medicalLogs");
    const logsQuery = query(
      logsRef,
      orderByChild("hospitalEmail"),
      equalTo(localStorage.getItem("hospitalEmail"))
    );
    get(logsQuery)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const logs = [];
          snapshot.forEach((childSnapshot) => {
            logs.push(childSnapshot.val());
          });
          setAllLogs(logs);
          console.log(logs)
        } else {
            console.log("nope")
          setAllLogs([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching logs:", error);
      });
  }, []);

  return (
    <div className="medical-log-holder-con">
      <div>
        {/* Render your medical logs here using the filtered data in 'allLogs' */}
        {allLogs.map((log) => (
          <div key={log.id}>
          </div>
        ))}
        {/* <TestLog /> */}
        <PrescriptionLog prescriptions={prescriptions} />
        {/* <DoctorsReport /> */}
      </div>
    </div>
  );
};

export default MedicalLog;
