import React, { useState } from 'react';
import {db} from "../../firebase"
import {set, ref} from "firebase/database"

function MedicalLog() {
  const workerEmail = localStorage.getItem("workerEmail")
  const [selectedEntryType, setSelectedEntryType] = useState('test'); // Default to Test Entry
  const [formData, setFormData] = useState({
    testName: '',
    testResult: '',
    testDate: '',
    nameOfPractitionerThatCreatedIt: '',
    // Add other fields for different entry types here
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function createLog(pin) {
      set(ref(db, "medical logs/"+pin), {
        doctorReportDTO: {
          date: "",
          reportContent: "",
          diagnosis: "",
          treatment: "",
          practitionerEmail: ""
        },
        prescriptionsDTO: [
          {
            medicationName: "",
            dosage: "",
            dosageFrequency: "",
            startDate: "2023-09-29",
            prescriptionDate: "2023-09-29",
            practitionerEmail: ""
          }
        ],
        testDTO: [
          {
            testName: "",
            multipartFile: {},
            testDate: "2023-09-29",
            testReport: "",
            practitionerEmail: ""
          }
        ],
        vitalsDTO: {
          dateTaken: "2023-09-29",
          bloodPressure: 0.00,
          heartRate: 0.00,
          temperature: 0.00,
          respiratoryRate: 0.00,
          officerEmail: ""
        },
        patientIdentificationNumber: "",
        hospitalEmail: ""
      }).then().catch()
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const pin = event.target.value;
    createLog(pin)
    console.log(formData);
  };

  return (
    <div>
      <h1>Medical Log</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder={"patient id"}/>
        <button type={"submit"}>Create</button>
      </form>
    </div>
  );
}


export default MedicalLog;
