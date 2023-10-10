import {DoctorSideBar} from "./doctorSideBar";
import {SearchBar} from "./doctorSearchBar";
import ViewLog from "../../../coco/assets/icons/doc-view-log.svg";
import EditLog from "../../../coco/assets/icons/doc-edit-log.svg";
import React, {useEffect, useState} from "react";
import "../../../coco/styles/doctor/viewPatientRecordOne.css"
import RecordPopUp from "./recordPopUp"
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";


export const ViewPatientRecordOne= () => {
    const [recordButtonPopUp, setRecordButtonPopUp] = useState(false);
    const [selectedPatientRecord, setSelectedPatientRecord] = useState(null);
    const [patientRecordData, setPatientRecordData] = useState([]);

    useEffect(()=>{
        const hospitalEmail = localStorage.getItem("hospitalEmail");
        try{axios.get("http://localhost:8080/api/v1/doctor/view-patients-records/"+hospitalEmail)
            .then(successResponse => {
                setPatientRecordData(successResponse.data);
                toast.info("medical logs found ", {position: toast.POSITION.TOP_CENTER, autoClose: 3000})
            })
            .catch(failureResponse => {
                toast.error("could not fetch logs", {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
                console.log(failureResponse)
            })  
            .finally(()=>{
                toast.info("you hospital has not created any medical log(s)", {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
            })
        }catch(error){
            toast.error("could not fetch logs", {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
            console.error("Error fetching data:", error);
        }
    }, [])

    const openRecordPopUp = (patientRecordData) => {
        setSelectedPatientRecord(patientRecordData);
        setRecordButtonPopUp(true);
    }

    const closeRecordPopUp = () => {
        setSelectedPatientRecord(null);
        setRecordButtonPopUp(false);
    }
    

    return(
        <div className="Doc-Records-Main-Frame">
            <ToastContainer/>
            <div className="doc-Records-side-bar-hold">
                <DoctorSideBar/>
            </div>
            <div className="doc-Records-second-side">
                <div className="doc-search-bar-hold">
                    <SearchBar/>
                </div>
                <div className="doc-Records-details-holder">
                    <div className="Records-left-profile">
                        <div className="Records-title" >
                            <h2>View Patient Records</h2>
                            <input
                                type="text"
                                className="doc-Records-search-bar"
                                placeholder="search..."
                                aria-label= "Search"
                                // value={searchQuery}
                                // onChange={(e)=> setSearchQuery(e.target.value)}
                            />
                            <button type="button" className="doc--Records-search-button">
                                Search
                            </button>
                        </div>
                        <table className= 'Records-table'>
                            <thead>
                            <tr>
                                <th >Primary Centre</th>
                                <th >Date Created</th>
                                <th >Last Updated</th>
                                <th >Patient Id</th>
                                <th >Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {patientRecordData.map((record, index) => (
                  <tr key={index}>
                    <td>{record.primaryCentre}</td>
                    <td>{record.dateCreated}</td>
                    <td>{record.lastUpdated}</td>
                    <td>{record.patientId}</td>
                    <td>
                      <img
                        onClick={() => openRecordPopUp(record)}
                        id="records-action-buttons"
                        src={ViewLog}
                        alt="view"
                      ></img>
                      
                      {/* <img
                        onClick={() => editRecord(record.patientId)}
                        id="records-action-buttons"
                        src={EditLog}
                        alt="edit"
                      ></img> */}
                    </td>
                  </tr>
                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <RecordPopUp isOpen={recordButtonPopUp} isClose={closeRecordPopUp} patientRecordData={selectedPatientRecord}/>
        </div>
    )
}