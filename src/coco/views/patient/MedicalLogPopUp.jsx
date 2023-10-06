import * as React from 'react';
import { db } from "../../../firebaseConfig/firebase.js";
import {set, push, ref } from "firebase/database";
import {useState} from "react";
import "../../styles/patient/MedicalLogPopUp.css"
import { ToastContainer, toast } from 'react-toastify';

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
                fileUrl: "",
                testDate: currentDate,
                testReport: "",
                practitionerEmail: "",
            },
        ],

    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setMedicalLog({ ...medicalLog, [id]: value });
    };


    function handleSubmit(event){
        event.preventDefault()
        try{const medicalLogRef = push(ref(db, 'medicalLogs'));
            set(medicalLogRef, medicalLog)
                .then(successResponse => {
                    toast.success('log created successfully', 
                    {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
                    console.log('Data has been successfully written to Firebase!');
                })
                .catch((error) => {
                    toast.error(error, {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
                    console.error('Error writing data to Firebase:', error);
                });
        }catch(error){

        }
    };

    return (
        <div className='popUp-overlay'>
            <ToastContainer/>
                <h2>  Patient Log</h2>
                <form onSubmit={handleSubmit}>
                    <div className="Log-Data-Frame">
                        <p> Date Created: {medicalLog.dateCreated}</p>
                        <div className='Pin-Frame'>
                            <label htmlFor='pin'> P.I.N:</label>
                            <input id='pin' onChange={handleInputChange} placeholder='enter your P.I.N'/>
                        </div>
                        <div className='Email-Frame'>
                            <label htmlFor='pin'> Hospital Email:</label>
                            <input id='email' onChange={handleInputChange} placeholder='abubakarchinedu@gmail.com'/>
                        </div>
                        
                        <div className="pop-up-submit-button">
                            <button className="pop-up-save-button" onClick={handleSubmit}>Save</button>
                            <button className="pop-up-close-button" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </form>
        </div>
    );
}
