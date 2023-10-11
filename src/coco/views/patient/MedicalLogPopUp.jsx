import * as React from 'react';
import { db } from "../../../firebaseConfig/firebase.js";
import {set, push, ref } from "firebase/database";
import {useState} from "react";
import "../../styles/patient/MedicalLogPopUp.css"
import { ToastContainer, toast } from 'react-toastify';

export function MedicalLogModal({ closeModal: onClose, isModalOpen }) {

    const requiredData ={
        patientId: "",
        hospitalEmail: ""

    }

    const [data, setData] = useState(requiredData)
    
    const currentDate = new Date().toISOString().split('T')[0];
    const currentTime = new Date().toISOString().split('T')[1].slice(0, 8);

    const medicalLog = {
        dateCreated: currentDate,
        timeCreated: currentTime,
        patientIdentificationNumber: data.patientId,
        hospitalEmail: data.hospitalEmail,
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

    }

    const handleInputChange = (event) => {
        setData({ ...data, [event.target.id]: event.target.value });
    };


    function handleSubmit(event){
        event.preventDefault()
        
        try{
            const medicalLogRef = push(ref(db, 'active_logs'));
            set(medicalLogRef, medicalLog)
                .then(successResponse => {
                    console.log(medicalLog)
                    toast.success('log created successfully', 
                    {position: toast.POSITION.TOP_CENTER, autoClose: 3000})
                    isModalOpen = true;
                    console.log('Data has been successfully written to Firebase!');
                })
                .catch((error) => {
                    toast.error(error, {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
                    console.error('Error writing data to Firebase:', error);
                });
        }catch(error){
            console.error(error)
        }
    };

    function closePopUp(event){
        event.preventDefault();
    }

    return (
        isModalOpen && (<div className='popUp-overlay'>
            <ToastContainer/>
                <h2>  Patient Log</h2>
                <form onSubmit={handleSubmit} className='Medical-Log-Form'>
                    <div className="Log-Data-Frame">
                        <p> Date Created: {medicalLog.dateCreated}</p>
                        <div className='Pin-Frame'>
                            <label htmlFor='pin'> P.I.N:</label>
                            <input id='patientId' onChange={handleInputChange} placeholder='enter your P.I.N' required minLength={'10'} maxLength={'10'}/>
                        </div>
                        <div className='Email-Frame'>
                            <label htmlFor='pin'> Hospital Email:</label>
                            <input id='hospitalEmail' type={'email'} onChange={handleInputChange} placeholder='abubakarchinedu@gmail.com' required/>
                        </div>
                        
                        <div className="pop-up-submit-button">
                            <button type={'submit'} className="pop-up-close-button">Create</button>
                        </div>
                    </div>
                </form>
        </div>)
    );
}
