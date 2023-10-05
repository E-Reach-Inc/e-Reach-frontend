import React, { useState, useEffect } from 'react';
import '../../styles/pharmacistFolder/pharmacistViewRecord.css';
import {PharmacistSideBar} from './pharmacistSideBar';
import { PharmacistSearchBar } from './pharmacistSearchBar';
import ViewIcon from '../../assets/pharmacistimage/viewLogIcon.svg'
import PopUp from "./pharmacistPopUp";
// import { db } from "../../../../firebase.js";

export const PharmacistViewRecord = () => {
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [selectedLog, setSelectedLog] = useState(null);
    const [prescriptions, setPrescriptions] = useState([])
    // const [viewLog, setViewLog] = useState([]); // Initialize viewLog as an empty array

    const viewLog= [
        {
            Date: 'Favour chiemela',
            Name: 'Consultation',
            Result: '22/12/2023'
        },
        {
            Date: 'Favour chiemela',
            Name: 'Consultation',
            Result: '22/12/2023',
        },
        {
            Date: 'Favour chiemela',
            Name: 'Consultation',
            Result: '22/12/2023',
        },
        {
            Date: 'Favour chiemela',
            Name: 'Consultation',
            Result: '22/12/2023',
        },
        {
            Date: 'Favour chiemela',
            Name: 'Consultation',
            Result: '22/12/2023',
        },
        {
            Date: 'Favour chiemela',
            Name: 'Consultation',
            Result: '22/12/2023',
        },
        {
            Date: 'Favour chiemela',
            Name: 'Consultation',
            Result: '22/12/2023',
        },
        {
            Date: 'Favour chiemela',
            Name: 'Consultation',
            Result: '22/12/2023',
        }
      ]

      const dummyPrescriptions = [
        {
          medicationName: 'Paracetamol',
          dosage: '500mg',
          dosageFrequency: 'Once daily',
          startDate: '12/10/2023',
          prescriptionDate:'12/10/2023'
        },
        {
          medicationName: 'Codine',
          dosage: '500mg',
          dosageFrequency: 'Once daily',
          startDate: '12/10/2023',
          prescriptionDate:'12/10/2023'
        },
        {
          medicationName: 'Antibiotics',
          dosage: '500mg',
          dosageFrequency: 'Once daily',
          startDate: '12/10/2023',
          prescriptionDate:'12/10/2023'
        },
        {
            medicationName: 'Panadol',
            dosage: '500mg',
            dosageFrequency: 'Once daily',
            startDate: '12/10/2023',
            prescriptionDate:'12/10/2023'
        },
    ]

    const openPopup = (log) => {
        const prescriptionsForLog = dummyPrescriptions; 
        setPrescriptions(prescriptionsForLog);
        setSelectedLog(log);
        setButtonPopUp(true);
       
    };

    const closePopup = () => {
        setSelectedLog(null);
        setButtonPopUp(false);
    };

    return (
        <div className="body-con">
            <div className="view-con">
                <PharmacistSideBar />
                <div className="view-hold">
                    <PharmacistSearchBar/>
                    <h2 id="appont">View Log</h2>
                    <div className="view-holder">
                        <div className="view-button">
                            <div className="view-text">
                                <h3>View Logs</h3>
                            </div>
                            <div className="input-con">
                                <input
                                    type="text"
                                    className="search-bar-five"
                                    placeholder="search..."
                                    aria-label="Search"
                                />
                                <button type="button" className="search-button-five">
                                    Search
                                </button>
                            </div>
                            <div className="browse-all-view">
                                <button>Browse All</button>
                            </div>
                        </div>
                        <table className="view-table">
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {viewLog.map((log, index) => (
                                <tr
                                    key={index}
                                    onClick={() => {
                                        openPopup(log);
                                    }}>
                                    <td>{log.Date}</td>
                                    <td>{log.Name}</td>
                                    <td><img src= {ViewIcon} alt="viewIcon"/></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <PopUp isOpen={buttonPopUp} onClose={closePopup} log={selectedLog} prescriptions={prescriptions}/>
        </div>
    );
};
