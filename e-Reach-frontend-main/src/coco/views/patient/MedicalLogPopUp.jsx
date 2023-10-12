import * as React from 'react';
import { db } from "../../../firebaseConfig/firebase.js";
import {set, push, ref } from "firebase/database";
import {useState} from "react";
import "../../styles/patient/MedicalLogPopUp.css"

export function MedicalLogModal({ closeModal }) {
    const currentDate = new Date().toISOString().split('T')[0];
    const currentTime = new Date().toISOString().split('T')[1].slice(0, 8);

    const[medicalLog, setMedicalLog] = useState( {
        dateCreated: currentDate,
        patientIdentificationNumber: "",
        hospitalEmail: "",
        vitalsDTO: {
            dateTaken: currentDate,
            bloodPressure: 0.00,
            heartRate: 0.00,
            temperature: 0.00,
            respiratoryRate: 0.00,
            officerEmail: "",
        },
        doctorReportDTO: {
            date: currentDate + " " + currentTime,
            reportContent: "",
            diagnosis: "",
            treatment: "",
            practitionerEmail: "",
        },
        prescriptionsDTO: [
            {
                medicationName: "",
                dosage: "",
                dosageFrequency: "",
                startDate: "",
                prescriptionDate: currentDate,
                practitionerEmail: "",
            },
        ],
        testDTO: [
            {
                testName: "",
                fileUrl: "{}",
                testDate: currentDate,
                testReport: "",
                practitionerEmail: "",
            },
        ],

    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMedicalLog({ ...medicalLog, [name]: value });
    };


    const handleSubmit = () => {
        const medicalLogRef = push(ref(db, 'medicalLogs'));

        set(medicalLogRef, medicalLog)
            .then(() => {
                console.log('Data has been successfully written to Firebase!');
            })
            .catch((error) => {
                console.error('Error writing data to Firebase:', error);
            });
    };

    return (
        <div className='popUp-overlay'>
                <h2>  Patient Log</h2>
                <form onSubmit={handleSubmit}>
                    <p> Date Created: {medicalLog.dateCreated}</p>
                    <p> P.I.N: {medicalLog.patientIdentificationNumber}</p>
                    <p> Hospital Email: {medicalLog.hospitalEmail}</p>
                <div className="pop-up-submit-button">
                    <button className="pop-up-save-button" onClick={handleSubmit}>Save</button>
                    <button className="pop-up-close-button" onClick={closeModal}>Close</button>
                </div>
                </form>
        </div>
    );
}
