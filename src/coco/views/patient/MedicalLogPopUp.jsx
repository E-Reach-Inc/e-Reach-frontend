import * as React from 'react';
import { db } from "../../../firebaseConfig/firebase.js";
import {set, push, ref } from "firebase/database";
import {useState} from "react";

export function MedicalLogModal({ isOpen, closeModal }) {
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
        <div>
            {/*<button onClick={openModal}>Open Modal</button>*/}
            <MedicalLogModal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Patient Log Modal"
            >
                <h2>  Patient Log</h2>
                <form onSubmit={handleSubmit}>
                    <p> Date Created: {medicalLog.dateCreated}</p>
                    <p> P.I.N: {medicalLog.patientIdentificationNumber}</p>
                    <p> Hospital Email: {medicalLog.hospitalEmail}</p>

                    <div className="Vitals">
                        <label>dateTaken:</label>
                        <input
                            type="date"
                            name="date"
                            value={medicalLog.vitalsDTO.dateTaken}
                            onChange={handleInputChange}
                        />

                        <label>bloodPressure:</label>
                        <input
                            type="text"
                            name="bloodPressure"
                            value={medicalLog.vitalsDTO.bloodPressure}
                            onChange={handleInputChange}
                        />

                        <label>heartRate:</label>
                        <input
                            type="text"
                            name="heartRate"
                            value={medicalLog.vitalsDTO.heartRate}
                            onChange={handleInputChange}
                        />

                        <label>temperature:</label>
                        <input
                            type="text"
                            name="temperature"
                            value={medicalLog.vitalsDTO.dateTaken + "°C"}
                            onChange={handleInputChange}
                        />

                        <label>respiratoryRate:</label>
                        <input
                            type="text"
                            name="respiratoryRate"
                            value={medicalLog.vitalsDTO.respiratoryRate}
                            onChange={handleInputChange}
                        />

                        <label>officerEmail:</label>
                        <input
                            type="text"
                            name="officerEmail"
                            value={medicalLog.vitalsDTO.officerEmail}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="DoctorReport">
                        <label>Date:</label>
                        <textarea
                            name="date"
                            value={medicalLog.doctorReportDTO.date}
                            onChange={handleInputChange}
                        />

                        <label>Report Content:</label>
                        <textarea
                            name="reportContent"
                            value={medicalLog.doctorReportDTO.reportContent}
                            onChange={handleInputChange}
                        />

                        <label>Diagnosis:</label>
                        <textarea
                            name="diagnosis"
                            value={medicalLog.doctorReportDTO.diagnosis}
                            onChange={handleInputChange}
                        />

                        <label>Treatment:</label>
                        <textarea
                            name="treatment"
                            value={medicalLog.doctorReportDTO.treatment}
                            onChange={handleInputChange}
                        />

                        <label>Practitioner Email:</label>
                        <textarea
                            name="treatment"
                            value={medicalLog.doctorReportDTO.practitionerEmail}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="Prescription">
                        <label>Medication:</label>
                        <input
                            type="text"
                            name="diagnosis"
                            value={medicalLog.prescriptionsDTO.map((prescription, index)=>{
                                return (
                                    <div>

                                    </div>
                                )
                            })}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="Prescription">
                        <label>Medication:</label>
                        <input
                            type="text"
                            name="diagnosis"
                            value={medicalLog.prescriptionsDTO}
                            onChange={handleInputChange}
                        />
                    </div>


                    <label>Treatment:</label>
                    <input
                        type="text"
                        name="treatment"
                        value={medicalLog.treatment}
                        onChange={handleInputChange}
                    />

                <button onClick={handleSubmit}>Save</button>
                <button onClick={closeModal}>Close</button>
                </form>
            </MedicalLogModal>
        </div>
    );
}
